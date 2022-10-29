import { useState } from "react";

 

function Input(props){
    const [entry, setEntry] = useState("");
    function handleInput(event){
        setEntry(event.target.value);
    }

    return( 
        <div>
            {/* <label>{props.labeling}</label><br/> */}
            <input 
                className="TextCenter"
                placeholder={props.labeling}
                type={ props.labeling === 'Price' ? "number": "text" } 
                step="0.01" onChange={handleInput} value={entry} 
                name={props.labeling} required 
            /><br/>
        </div>
    );
}

export default Input;