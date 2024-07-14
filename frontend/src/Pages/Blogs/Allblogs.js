import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Allblogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:5000/blog');
                setBlogs(response.data);
            } catch (error) {
                setError('Failed to fetch blogs');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <div className='blogs'>
            <div className='container'>
                <div className='row'>
                    {loading && <p>Loading...</p>}
                    {error && <p className="text-danger">{error}</p>}
                    {!loading && !error && blogs.map((blog) => (
                        <div className='col-lg-4 mb-4' key={blog._id}>
                            <div className='single-blog'>
                                <img src={`/blogimg/${blog.image}`} className='img1' alt='blog' />
                                <div className='content position-relative'>
                                    <div className='dates'>
                                        <i className="fa-solid fa-calendar-days"></i>
                                        {new Date(blog.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' })}
                                    </div>
                                    <h3>{blog.heading}</h3>
                                    <p>By Admin</p>
                                    <p dangerouslySetInnerHTML={{ __html: blog.description }} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CSS IS ON homepage.css */}

            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <a className="page-link" href="#">Prev</a>
                    </li>
                    <li className="page-item"><a className="page-link active" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Allblogs;
