import Childtwo from "../child2/childtwo";

function ChildOne(props){
    return(
        <>
        <h1>{props.c1}</h1>
        <Childtwo Nagendra={props.c2}/>
        </>
    )
}

export default ChildOne;