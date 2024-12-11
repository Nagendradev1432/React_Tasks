import React, { Component } from "react";

class Formss extends Component {
    constructor() {
        super();
        this.state = { username: "" ,sname:"",fname:"",password:""};
    }

    handonchange=((event)=>{
        
        const value=event.target.value
      
        if(event.target.name=="sname"){
          this.setState({sname:value})  
        }
        
        else if(event.target.name=="fname"){
            this.setState({fname:value})
        }
        else if(event.target.name=="password"){
            this.setState({password:value})
        }
    })

    handsubmit=((event)=>{
        event.preventDefault()
        this.setState({username:`firstname:${this.state.sname}`+" "+" "+`secondname: ${this.state.fname}`+" "+" "+`password:${this.state.password}`})
    })

    render() {
         document.body.style.backgroundColor="black"
        return (
           
            <div style={{marginTop:"90px",marginLeft:"560px"}}>

                <form onSubmit={this.handsubmit}>
                    <input type="text" name="sname" onChange={this.handonchange} placeholder="firstname"/>
                     <br/><input type="text" name="fname" onChange={this.handonchange} style={{marginTop:"29px"}} placeholder="second name"/>
                     <br/><br/><input type="text" name="password" onChange={this.handonchange} placeholder="enterpassword"/>
                    <br/><br/><input type="submit" style={{marginLeft:"50px"}}/>
                </form>
                {/* <button style={{marginLeft:"50px",marginTop:"30px"}}>Login</button> */}
                <h5 style={{ display: "flex", flexDirection: "column" ,color:"orange"}}>
    {this.state.username}</h5>
      
 </div>
        );
    }
}

export default Formss;
