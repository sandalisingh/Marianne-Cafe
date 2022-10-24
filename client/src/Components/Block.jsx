import React from "react";

function Block(props){

    return( 
        <div className="Center Block Relative">
            <h4 className="SmallText neonGreenText FontCursive">{props.Name}</h4>
            <h6 className="VSmallText neonGreenText">₹ {props.Price}</h6>
            
            <img src={props.ImageSRC} alt="Something"/>
            
            <button className="CircularBtn TopRight">X</button>
        </div>
    );
}

export default Block; 