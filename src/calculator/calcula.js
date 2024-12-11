// import { useState } from "react";
// import { Button } from "bootstrap";
import React,{useState} from "react";

function Calculator(){
    const [count,setCount]=useState("")

    const handle=(a)=>{
        setCount(count+a)
    }

    // const adding=()=>{
    //        let x=eval(count) 
    //        setCount(x)
    // }

    const Delete=()=>{
        setCount(count.slice(0,count.length-1))
    }
    const equal=()=>{
        let x=eval(count) 
           setCount(x)
    }

    const clear=()=>{
        setCount("")
    }
    
    return(
        <div style={{padding:"20px 40px",border:"2px solid black", height:"460px",width:"340px",marginLeft:"120px",marginTop:"30px",backgroundColor:"black",borderRadius:"30px"}}>
        <h1 style={{border:"2px solid orange",width:"280px",height:"67px",color:"white",textAlign:"right",borderRadius:"30px",padding:"10px"}}>{count}</h1>
        <div style={{display:"flex",gap:"20px"}}>
        <button onClick={clear} style={{height:"50px",width:"50px",borderRadius:"50%"}}>AC</button>
        <button onClick={Delete} style={{height:"50px",width:"50px",borderRadius:"50%"}} ><img src="https://tse1.mm.bing.net/th?id=OIP.e14D_UxxMP-Ka0N2ll98RwHaHa&pid=Api&P=0&h=180" style={{width:"30px"}}/></button>
        <button onClick={()=>{handle("%")}} style={{height:"50px",width:"50px",borderRadius:"50%"}}>%</button>
        <button onClick={()=>{handle("/")}} style={{height:"50px",width:"50px",borderRadius:"50%"}}>/</button>
        </div>
       <br/> <div style={{display:"flex",gap:"20px"}}>

        <button onClick={()=>{handle(7)}} style={{height:"50px",width:"50px",borderRadius:"50%"}}>7</button>
        <button onClick={()=>{handle(8)}} style={{height:"50px",width:"50px",borderRadius:"50%"}}>8</button>
        <button onClick={()=>{handle(9)}} style={{height:"50px",width:"50px",borderRadius:"50%"}}>9</button>
        <button onClick={()=>{handle("*")}} style={{height:"50px",width:"50px",borderRadius:"50%"}}>X</button>


        </div>
       <br/> <div style={{display:"flex",gap:"20px"}}>

        <button onClick={()=>{handle(4)}} style={{height:"50px",width:"50px",borderRadius:"50%"}}>4</button>
        <button onClick={()=>{handle(5)}} style={{height:"50px",width:"50px",borderRadius:"50%"}}>5</button>
        <button onClick={()=>{handle(6)}} style={{height:"50px",width:"50px",borderRadius:"50%"}}>6</button>
        <button onClick={()=>{handle("-")}} style={{height:"50px",width:"50px",borderRadius:"50%"}}>-</button>

        </div>
        <br/><div style={{display:"flex",gap:"20px"}}>
        <button onClick={()=>{handle(1)}} style={{height:"50px",width:"50px",borderRadius:"50%"}}>1</button>
        <button onClick={()=>{handle(2)}} style={{height:"50px",width:"50px",borderRadius:"50%"}}>2</button>
        <button onClick={()=>{handle(3)}} style={{height:"50px",width:"50px",borderRadius:"50%"}}>3</button>
        <button onClick={()=>{handle("+")}} style={{height:"50px",width:"50px",borderRadius:"50%"}}>+</button>


        </div>
       <br/> <div style={{display:"flex",gap:"20px"}}>

        
        <button onClick={()=>{handle(0)}} style={{height:"50px",width:"50px",borderRadius:"50%"}}>0</button>
        
        <button onClick={()=>{handle(".")}} style={{height:"50px",width:"50px",borderRadius:"50%"}}>.</button>
        <button onClick={equal} style={{height:"50px",width:"120px",borderRadius:"30px",}}>=</button>
        

        </div>

        
      
       



        




        

        
        </div>
    )
}
export default Calculator;