import React, { Component, useState } from "react"; 

class SetState extends Component { 

    constructor() {
        super(); 
        this.state = { counter: 0 ,color:"red"}; 
    }

   handlerone=()=>{
    this.setState({counter:this.state.counter+1,color:"blue"})
   }
   handlerones=()=>{
    this.setState({counter:this.state.counter-1,color:"pink"})
   }
   handlertwo=()=>{
    this.setState({counter:this.state.counter+2,color:"red"})
   }
   handlertwos=()=>{
    this.setState({counter:this.state.counter-2,color:"green"})
   }
   handlerfive=()=>{
    this.setState({counter:this.state.counter+5,color:"yellow"})
   }
   handlerfives=()=>{
    this.setState({counter:this.state.counter-5,color:"brown"})
   }

    render() {
        return (
            <>
               <h1 style={{color:this.state.color}}>{this.state.counter}</h1>
                <button onClick={this.handlerone}>+1</button>
                <button onClick={this.handlerones}>-1</button>
                <button onClick={this.handlertwo}>+2</button>
                <button onClick={this.handlertwos}>-2</button>
                <button onClick={this.handlerfive}>+5</button>
                <button onClick={this.handlerfives}>-5</button>


                
            </>
        );
    }
}

export default SetState; 



