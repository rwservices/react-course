#!/bin/bash

# Check if date is provided, otherwise use today's date
REPORT_DATE=${1:-$(date +"%Y-%m-%d")}

# File to save the report
REPORT_FILE="report_${REPORT_DATE}.txt"

# Prompt for project name
read -p "Enter the project name: " PROJECT_NAME

# Prompt for tasks completed
echo "Enter tasks completed (enter 'done' when finished):"
TASKS=""
while true; do
    read -p "> " TASK
    if [ "$TASK" == "done" ]; then
        break
    fi
    TASKS+="$TASK\n"
done

# Prompt for hours worked
read -p "Enter hours worked: " HOURS_WORKED

# Prompt for any additional notes
read -p "Enter any additional notes: " NOTES

# Template for the report
TEMPLATE="Hello Team,

Here is my work report for the project.

Date: ${REPORT_DATE}
Project: ${PROJECT_NAME}

Tasks Completed:
${TASKS}

Hours Worked: ${HOURS_WORKED}

Additional Notes:
${NOTES}

Thank you,
${USER}"

# Write the final report to the file
echo -e "$TEMPLATE" > "$REPORT_FILE"

# Notify the user about the saved report
echo "Work report saved to $REPORT_FILE"