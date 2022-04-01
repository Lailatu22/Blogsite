import React from 'react'
import Home from './pages/Home'
import {Routes, Route, Navigate} from "react-router-dom"
import About from './pages/About'
import Blog from './pages/Blog'
import BlogList from './pages/Blog/blogs'

function App() {
  return (
    <Routes>
   <Route path="/" element={<Home/>} />
   <Route path="/about" element={<About/>} />
   <Route path="/blog" element={<Blog/>} >
   <Route index element={<BlogList/>}/>
   <Route path='blog' element={<blogDetails/>}/>
   </Route>
   <Route path="*" element={<Navigate to="/"/>} />
   
    
    </Routes>
  )
}

export default (App)