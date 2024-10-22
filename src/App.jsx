import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Blogs from './components/header/blogs/Blogs'
import Bookmark from './components/header/bookmark/Bookmark'


function App() {
const [bookMarks,setBookMarks] = useState([]);
const [times,setTimes] = useState(0);
const [btnChange, setBtnStyle] = useState(false);


  const handleBookMarked = (blogTitle) => {
    const newBookMarks = [...bookMarks,blogTitle];
    setBookMarks(newBookMarks);
    setBtnStyle(!btnChange);
  }

  const handleReadingTime = (time,id) => {
    const newReadingTime = times + time;
    setTimes(newReadingTime);
    const remainingBookMarks = bookMarks.filter(bookmark => bookmark.id !== id);
    setBookMarks(remainingBookMarks)
  }



  return (
    <>
      <div className="lg:w-[70%] w-[90%] mx-auto">
          <Header></Header>
          <div className="lg:flex gap-4">
            <Blogs handleBookMarked={handleBookMarked} handleReadingTime={handleReadingTime} btnStyle={btnChange}></Blogs>
            <div className="lg:w-[30%] ">
              <div className="border min-h-40 py-30 bg-[#1111110D]">
              <Bookmark bookMarks={bookMarks} readingTime={times}></Bookmark>
              </div>
              
            </div>
          </div>
      </div>
    </>
  )
}

export default App
