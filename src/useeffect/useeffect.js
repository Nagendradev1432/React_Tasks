import { useEffect, useState } from "react";
import Cards from "../portfoli/file9";
function Effect() {


    
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);
    console.log(data[count]);
    const handle = () => {
        setCount(c => c+1);
    };

    useEffect(() => {
        
        if(count!==0){
        fetch('https://fakestoreapi.com/products') 
        // Correct endpoint
            .then(res => res.json())
            .then(json => setData(json))
            .catch(err => console.error("Error fetching data:", err));
    }},[count]);

    return (
        <>
            <button onClick={handle}>Click button</button>
            <h1>{count}</h1>
    </>
     );
}

export default Effect;
