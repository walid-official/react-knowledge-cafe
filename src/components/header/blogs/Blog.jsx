
import { CiBookmark } from "react-icons/ci";
const Blog = ({blog,handleBookMarked,handleReadingTime,btnStyle}) => {
    const {id,title,courseThumbnail,authorName,authorImageAvatar,postDate,readingTime,hasTag} = blog;

    return (
        <div className="">
            
                <div className="">
                    <img className="w-[100%] lg:h-[400px] md:h-[300px] object-cover" src={courseThumbnail} alt="" />

                    <div className="flex justify-between py-6">

                        <div className="">
                            <div className="flex gap-3 items-center">
                                <img className="w-16" src={authorImageAvatar} alt="" />
                                <div className="">
                                    <h3>{authorName}</h3>
                                    <p>{postDate}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex gap-2 items-center">
                            <h2>{readingTime} min read</h2>
                            <button className={btnStyle ? 'text-red-400' : 'text-slate-500'} onClick={() => handleBookMarked(blog)}><CiBookmark></CiBookmark></button>
                        </div>

                    </div>    
                </div>
                <div className="">
                    <h1 className="md:text-2xl text-xl font-bold mb-6">{title}</h1>
                    <div className="flex gap-6 pb-4">
                        {
                            hasTag.map((tag,index) => <p key={index}>#{tag}</p>)
                        }
                    </div>
                    <button  className="pb-6 block text-purple-800 font-bold underline" onClick={() => handleReadingTime(readingTime,id)}>Mark as read</button>
                            
                </div>
            
        </div>
    );
};

export default Blog;