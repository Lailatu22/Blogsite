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
     <p>{about.name}</p>
     </div>

     <div style={{marginTop:"10px"}}>
     <h3>bio</h3>
      <p>{about.bio}</p>
      </div>
 
      <div style={{marginTop:"10px"}}>
      <h3>hobbies</h3>
      {about.hobbies.map((hobby)=>(
        <p key={hobby} style={{display:"inline-block", marginRight:"10px"}}>
        </p>
      )
        
        )
      }
       
       
       </div>
  
      </div>
  )}

export default withLayout (About)
