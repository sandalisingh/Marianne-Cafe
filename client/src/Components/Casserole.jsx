import React from "react";
import Block from "./Block";
import Beverages from "./FoodList";
// import Popup from 'reactjs-popup';
import Form from "./Form";

function Casserole(props){

    return( 
        <div className=" TextCenter">
            <h1 className=" neonText LinedText FontThin FontCursive">Beverages</h1><br/>
            <div className="Casserole Flex">
                {/* <Popup trigger={} position="right center"> */}
                <div className="Center CircularBox" >
                    <Form className="" InputsList={props.InputsList} SubmitBtn="+"/>
                </div>
                {/* </Popup> */}
            
                { Beverages && Beverages.length>0 && Beverages.map((One)=> (
                    <Block Name={One.Name} Price={One.Price} ImageSRC={One.Image}/>
                ))}
            </div>
        </div>
    );
}

export default Casserole; 