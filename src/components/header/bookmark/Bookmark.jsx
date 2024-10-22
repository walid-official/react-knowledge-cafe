import Bookmarktitle from "./Bookmarktitle";

const Bookmark = ({bookMarks,readingTime}) => {
    return (
        <div className="">
            <div className="">
                <h2 className="p-3 block text-purple-800 font-bold text-xl">Spent Time On Read: {readingTime}</h2>
            </div>
            <div className="">
                <h2 className="p-3 font-bold text-xl">Bookmarked Blogs: {bookMarks.length}</h2>
                <div className="">
                    {
                        bookMarks.map(books => <Bookmarktitle key={books.id} bookTitle={books} ></Bookmarktitle>)
                    }
                </div>
            </div>
        </div>
        
    );
};

export default Bookmark;