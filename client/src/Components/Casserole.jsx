import React from "react";
import Block from "./Block";
import Beverages from "./FoodList";
import Popup from 'reactjs-popup';
import Form from "./Form";

function Casserole(props){

    return( 
        <div className="Casserole">
            <h1>BEVERAGES</h1><br/>
            <div>
                { Beverages && Beverages.length>0 && Beverages.map((One)=> (
                    <Block Name={One.Name} Price={One.Price} ImageSRC={One.Image}/>
                ))}
            </div>
            <Popup trigger={<button> + </button>} position="right center">
                <Form InputsList={props.InputsList}/>
            </Popup>
        </div>
    );
}

export default Casserole; 