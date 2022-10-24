import React from "react";

function Block(props){

    return( 
        <div className="Block">
            <h4>{props.Name}</h4>
            <img src={props.ImageSRC} alt="Something"/>
            <h6>{props.Price}</h6>
        </div>
    );
}

export default Block; 