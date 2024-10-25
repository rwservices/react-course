import Link from "next/link";

const fetchBlogSingle = async (id) => {
    const response = await fetch (`https://dummyapi.online/api/blogposts/${id}`);
    return response.json()
}

const blogDetailSingle = async ({params}) => {
    const {id} = params;
    const blog = await fetchBlogSingle(id);

    return (
        <section className="single-blog-detail">
            <div className="container">
                <Link href='/blogs' className="btn-primary go-back">Back</Link>
                <div className="blog-item">
                    <span className="blog-number">{blog.id}.</span>
                    <div className="blog-detail">
                        <h4>{blog.title}</h4>
                        <p>{blog.content}</p>
                        <span className="author-name">By <span>{blog.author}</span></span>
                        <span className="entry-date">on {blog.date_published}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default blogDetailSingle;