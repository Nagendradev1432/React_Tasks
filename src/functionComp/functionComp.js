import React, { useState } from "react";

function FunctionComp() {
    const [Count, setCount] = useState(0);

    const handler = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <>
            <h1>Increment: {Count}</h1>
            <button onClick={handler}>Click Me</button>
        </>
    );
}

export default FunctionComp;
