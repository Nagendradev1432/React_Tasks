
// const isLogged=true


function Conditional(props){
    // if(isLogged){
    //     return(
    //         <h1>Is true</h1>
    //     )
    // }
    // else{
    //     return(
    //         <>
    //         <h1>
    //             if false
    //         </h1>
    //         </>
    //     )
    // }

    return props.isLogged?<h1>is true</h1>:<h1>is false</h1>;
}

export default Conditional;