import React, {useContext} from 'react'
import{ AboutContext }from '../AboutContext'
import withLayout from './withLayout'

function About() {
  const {about} = useContext(AboutContext)

  return (
    <div div style={{maxwidth:"700px",margin:"auto",padding:"20px 0"}}>
    <h2>About Me</h2>

    <div style={{marginTop:"10px"}}>
    <h3>name</h3>
     <p>{about.Name}</p>
     </div>

     <div style={{marginTop:"10px"}}>
     <h3>bio</h3>
      <p>{about.Bio}</p>
      </div>
 
      <div style={{marginTop:"10px"}}>
      <h3>hobbies</h3>
       <p>{about.hobbies.map}</p>
       </div>
  
      </div>
  )}

export default withLayout (About)
