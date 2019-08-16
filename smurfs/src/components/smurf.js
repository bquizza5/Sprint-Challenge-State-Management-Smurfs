import React from "react";


const Smurf = (props) => {
    return (
        <>
        <h1>{props.details.name}</h1>
        <h2>{props.details.age}</h2>
        <h2>{props.details.height}</h2>
        </>
    )
} 

export default Smurf