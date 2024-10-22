import { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = ({handleBookMarked}) => {
    const [blogs,setBlogs] = useState([]);

    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])


    return (
        <div className="w-[70%] border">
                {
                    blogs.map(blog => <Blog key={blog.id} handleBookMarked={handleBookMarked} blog={blog}></Blog>)
                }
        </div>
    );
};

export default Blogs;