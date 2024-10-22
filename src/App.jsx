import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Blogs from './components/header/blogs/Blogs'
import Bookmark from './components/header/bookmark/Bookmark'


function App() {
const [bookMarks,setBookMarks] = useState([]);

  const handleBookMarked = (blogTitle) => {
    const newBookMarks = [...bookMarks,blogTitle];
    setBookMarks(newBookMarks);
  }

  return (
    <>
      <div className="w-[70%] mx-auto">
          <Header></Header>
          <div className="flex gap-4">
            <Blogs handleBookMarked={handleBookMarked}></Blogs>
            <Bookmark bookMarks={bookMarks}></Bookmark>
          </div>
      </div>
    </>
  )
}

export default App
