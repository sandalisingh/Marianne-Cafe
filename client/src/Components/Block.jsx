import React from "react";

function Block(props){

    return( 
        <div className="Center Block Relative">
            <h4 className="neonText FontCursive">{props.Name}</h4>
            <img src={props.ImageSRC} alt="Something"/>
            <h6 className="neonText">₹ {props.Price}</h6>
            <button className="CircularBtn TopRight">X</button>
        </div>
    );
}

export default Block; 