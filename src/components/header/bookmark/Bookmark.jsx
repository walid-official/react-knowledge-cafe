import Bookmarktitle from "./Bookmarktitle";

const Bookmark = ({bookMarks}) => {
    console.log(bookMarks);
    return (
        <div className="">
            <div className="w-[30%] border bg-[#1111110D]">
                <h2 className="p-3 font-bold text-xl">Bookmarked Blogs: </h2>
                {
                    bookMarks.map(books => <Bookmarktitle key={books.id} bookTitle={books}></Bookmarktitle>)
                }
            </div>
        </div>
        
    );
};

export default Bookmark;