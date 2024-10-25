"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const fetchBlogs = async () => {
    const response = await fetch('https://dummyapi.online/api/blogposts');
    return response.json();
}

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const[visibleCount, setVisibleCount] = useState(10);
    const[isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getBlogs = async () => {
            const data = await fetchBlogs();
            setBlogs(data);
            setIsLoading(false);
        }
        getBlogs();
    }, []);

    const loadMoreBlogs = () => {
        setVisibleCount(prevCount => prevCount + 10);
    }

    return (
        <section className="all-blogs">
            <div className="container">
                <header className="entry-header">
                    <h2>Here you can find a list of dummy blogs</h2>
                </header>
                <div className="blog-list-wrap">
                    {isLoading && <p>Loading blogs...</p>}
                    {blogs.slice(0, visibleCount).map (blog => (
                        <div className="blog-item" key={blog.id}>
                            <span className="blog-number">{blog.id}.</span>
                            <div className="blog-detail">
                                <h4>{blog.title}</h4>
                                <div className="entry-meta">
                                    <span className="author-name">By {blog.author}</span>
                                    <span className="entry-date">({blog.date_published})</span>
                                </div>
                                <Link href={'/blogs/' + blog.id} className="read-more">Read More</Link>
                            </div>
                        </div>
                    ))}
                    <div className="btn-wrap">
                        <button onClick={loadMoreBlogs} className="btn-primary">Load More</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blogs;