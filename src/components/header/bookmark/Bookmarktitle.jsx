const Bookmarktitle = ({bookTitle}) => {
    
    return (
        <div className="bg-white p-4 my-2">
            <h2 className="font-bold">{bookTitle.title}</h2>
        </div>
    );
};

export default Bookmarktitle;