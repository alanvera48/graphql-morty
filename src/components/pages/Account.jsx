import React, {} from "react";

import "./Account.css";
import checkSkill from "../../assets/images/CheckSkill.png";

export default function Account() {

  




  return (
      <div className='acountContainer'>

       <h3>Developer:<span> Diego</span></h3>
       <h3>Years of experience in RN:<span> 2</span></h3>
       <h3>Email:<span> diegomfried@gmail.com</span></h3>
       <h3>Skills: <br/>
       <div className='containerCheck'><img src={checkSkill}/><span> React Js</span><br/></div>
       <div className='containerCheck'><img src={checkSkill}/><span> Angular </span><br/></div>
       <div className='containerCheck'><img src={checkSkill}/><span> Node.js</span><br/></div>
 
      
       </h3>
      
       <h3>Github:<span> dieg0MF</span></h3>


     <div className='containerTextArea'>
         <h3>What was your biggest challenge?</h3>
         <span> implement Typescript in React</span>

     </div>
     <div className='containerTextArea'>
         <h3>Tell us  somthing about yourself</h3>
         <span>I like challenges</span>

     </div>


      </div>

  )
  
 
}
