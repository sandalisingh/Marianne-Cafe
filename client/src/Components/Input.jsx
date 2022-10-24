import React, { useState } from "react";

 

function Input(props){
    const [entry, setEntry] = useState("");
    function handleInput(event){
        setEntry(event.target.value);
    }

    return( 
        <div>
            <label>{props.labeling}</label><br/>
            <input 
                type={ props.labeling === 'Price' ? "number": "text" } 
                step="0.01" onChange={handleInput} value={entry} 
                name={props.labeling} required 
            />
        </div>
    );
}

export default Input;