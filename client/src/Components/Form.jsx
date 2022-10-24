import React from "react";
import Button from "./Button";
import Input from "./Input";

function Form(props){

    return( 
        <form action="/" method="post" className="Form">
            { props.InputsList && props.InputsList.length>0 && props.InputsList.map((OneInput)=> (
                <Input labeling={OneInput} align="col-lg-2 col-md-8" />
            ))}
            <Button /> 
        </form>
    );
}

export default Form; 