import React,{useState} from "react";
// import React from "react";

function Counter(){
    const[count,setcount]=useState(0)
    const [color,setcolor]=useState("black")

        const handleCount1=()=>{
            setcount(count+1)
            setcolor("pink")
        }

        const handleCount2=()=>{
            setcount(count+2)
            setcolor("blue")
        }

        const handleCount3=()=>{
            setcount(count+3)
            setcolor("red")
        }

    return(
        <>
        <button onClick={handleCount1}>+1</button>
        <button onClick={handleCount2}>+2</button>
        <button onClick={handleCount3}>+3</button>
        <h1 style={{color:color}}>{count}</h1>
        </>
    )

    
}
export default Counter;