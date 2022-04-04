import React from 'react'
import withLayout from './withLayout'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <div>
    <div className='banner'>
    <h1>welcome to my webpage</h1>
    <p>This is my webpage. I love programming and i will to teach anyone</p>
    <div className='actions-wrap'>
    <button className='btn-outline'onClick={()=>navigate("/about")}>About me</button>
    <button className='btn-containo'onClick={()=>navigate("/blog")}>Read more</button>
    </div>

    
    </div>
    
    </div>
  )
}

export default withLayout (Home)