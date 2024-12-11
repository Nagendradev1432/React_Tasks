import React from "react";
// import "./port.css;"

function Services(){
    return(
        <div style={{ display: "flex",gap:"20px",justifyContent:"center",flexWrap:"wrap"}}>
        <div>
          <p className="service" style={{textAlign:"center",padding:"20px 40px"}}><h5>UI/UX</h5><br/><p>{"</>"}</p><p>A UI/UX Designer focuses on enhancing user satisfaction by designing intuitive, visually appealing interfaces and seamless user experiences. They conduct user research, create wireframes, prototypes, and interactive designs, and collaborate with developers to ensure usability, 
            accessibility, and a user-centered design process.UI/UX Designers collaborate closely with developers.
           </p></p>
        </div>
        <div>
          <p className="service"style={{textAlign:"center",padding:"20px 40px"}}><h5>Web Developer</h5><p>{"</>"}</p><p>A Web Developer builds and maintains websites and web applications, focusing on functionality, performance, and user experience. They work with programming languages like HTML, CSS, JavaScript, and frameworks (React, Angular, Node.js) to create responsive, scalable, and visually appe
            to implement features, ensure cross-browser compatibility, optimize for speed, and integrate APIs. 
            </p></p>
        </div>
        <div>
          <p className="service"style={{textAlign:"center",padding:"20px 40px"}}><h5>Full stack developer</h5><p>{"</>"}</p><p>
          A Full Stack Developer specializes in both frontend and backend development, creating complete, scalable web applications. They work with frontend technologies like HTML, CSS, JavaScript, and frameworks (React, Angular) for user interfaces, and backend technologies like Node.js, Python, Java, or Ruby for server-side logic. 
         </p></p>
        </div>
      </div>
      
    )
}
export default Services;