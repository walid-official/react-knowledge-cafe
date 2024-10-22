import { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = ({handleBookMarked,handleReadingTime,btnStyle}) => {
    const [blogs,setBlogs] = useState([]);

    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])


    return (
        <div className="lg:w-[70%]">
                {
                    blogs.map((blog,index) => <Blog key={index}
                         handleBookMarked={handleBookMarked}
                         handleReadingTime={handleReadingTime}
                         btnStyle={btnStyle}
                         blog={blog}></Blog>)
                }
        </div>
    );
};

export default Blogs;