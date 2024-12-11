import React from "react"
import "./port.css";

function About(){
    return(
        <div style={{display:"flex",flexWrap:"wrap"}}>
        <div style={{padding:"70px  70px", marginTop:"30px",marginLeft:"100px"}}>
        <img src="photo-removebg-preview (1).png" style={{width:"320px",backgroundColor:""}}/>

        </div>
        <div style={{padding:"70px  70px", marginTop:"30px",marginLeft:"100px",alignItems:"center"}}>
          <p className="box" id="About " style={{textAlign:"center"
   }}><h1>About Me</h1><br/><p>Hii I am very glad introduce my self to you guys i am Nagendra i am actually coming from Vayalapd in Andhra pradesh recently completed my
            graduation in siddartha institute of science and technology in the stream of ECE(Electronice and communication engineering)
            i have did one project during my academics that project title name is "Design of patch rectangular 4*4 array for satellite communication" that 
            project aim is te increase signal strength,impeadence,velocity,frequency,gain and successfully completed my project with my teammates coming to my technical skills i
             have knowledge on frontend technologies such as Html5,css3,Bootstrap,JavaScript,reactjs,Angular and also i have knowledge on
             backend technologies such as sql,node js,frame work of the express js my hobbies i enjoy play chess because of it helps to me think strategically improve my 
             problem solving skills My strength is can i motivate my self at any situation my short term goal is i want get job repuated it company like yours.
             my long term goal is i have to good position in front developer in that company........Thank you</p></p>  
        </div>
        </div>
    )
}

export default About;

// style={{
    
//     backgroundColor: "lightblue",
//     boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)", // Adding box-shadow
//   }}