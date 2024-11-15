# Ensure the script is called with at least 1 argument
if [ "$#" -lt 1 ]; then
    echo "Usage: ./get_commits.sh <from_date> [to_date]"
    echo "Example: ./get_commits.sh 2024-08-30"
    echo "Example: ./get_commits.sh 2024-08-30 2024-08-31"
    exit 1
fi

# Arguments
FROM_DATE=$1
TO_DATE=${2:-$FROM_DATE}  # Use TO_DATE if provided, otherwise use FROM_DATE

# Automatically get the project name from the Git repository directory
PROJECT_NAME=$(basename "$(git rev-parse --show-toplevel)")

# Automatically get the Git username
USERNAME=$(git config user.name)

# Define the start and end times for the specified date range using the local timezone
SINCE="${FROM_DATE}T00:00:00"
UNTIL="${TO_DATE}T23:59:59"

# Generate the filename for the report
REPORT_FILE="report.txt"

# Read the template file
TEMPLATE="Hello Bhuwan Sir,

I hope you are doing well.

Below is my task update for today.

Dated: $(date +"%d/%m/%Y")

Project: {{PROJECT_NAME}}

{{COMMITS}}

Total lines of code changed: {{LINES_CHANGED}}

Thank you
Regards,

$USERNAME"

# Capture the git log output, filter out 'merge' and 'delete branch' commits, and process it to include numbered list points
COMMITS=$(git log --author="$USERNAME" --since="$SINCE" --until="$UNTIL" --pretty=format:"%s" \
    | grep -Ev "^(Merge branch|Delete branch)" \
    | awk '{print NR". " $0}')

# Calculate total lines added and deleted in the specified date range
LINES_CHANGED=$(git log --author="$USERNAME" --since="$SINCE" --until="$UNTIL" --stat \
    | grep "files changed" \
    | awk '{added+=$4; removed+=$6} END {print added+removed " (added: " added ", removed: " removed ")"}')

# Replace placeholders in the template with actual values
REPORT_CONTENT="${TEMPLATE//\{\{PROJECT_NAME\}\}/$PROJECT_NAME}"
REPORT_CONTENT="${REPORT_CONTENT//\{\{COMMITS\}\}/$COMMITS}"
REPORT_CONTENT="${REPORT_CONTENT//\{\{LINES_CHANGED\}\}/$LINES_CHANGED}"

# Write the final report to the file
echo "$REPORT_CONTENT" > "$REPORT_FILE"

# Notify the user about the saved report
echo "Work report saved to $REPORT_FILE"