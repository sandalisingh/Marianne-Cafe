import React from "react";
import Button from "./Button";
import Input from "./Input";

function Form(props){

    let destination = "/" + props.Title;

    return( 
        <form action={destination} method="post" className="Form TextCenter">
            { props.InputsList && props.InputsList.length>0 && props.InputsList.map((OneInput)=> (
                <Input labeling={OneInput} align="col-lg-2 col-md-8" />
            ))}
            <Button Text={props.SubmitBtn}/> 
        </form>
    );
}

export default Form; 