import Link from 'next/link'

const NotFound = () => {
    return (
        <section className="not-found">
            <div className="container">
                <h2>Whoopss...</h2>
                <h3>The page you are looking for could not be found</h3>
                <span>Go Back to <Link href='/'>Homepage</Link></span>
            </div>
        </section>
    );
}

export default NotFound;