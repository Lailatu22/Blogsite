import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
function BlogDetails() {
    const location = useLocation()
    const [post, setPost] = useState({});
    useEffect(()=>{
        setPost(location.state.post);
    })

    [location.state]
    


  return (
    <div>
    {post &&4(
        <div>
        <h2>{post.title}</h2>
        <p>{post.extract}</p>
        <img src={'/$images/${post.image}'}
        alt="" height={350} width="100%"/>
        <P>{post.body}</P>
        </div>
    )}
    
    </div>
  )
}

export default details