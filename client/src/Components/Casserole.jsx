import React, {useState,useEffect} from 'react';
import Block from "./Block";
// import Beverages from "./FoodList";
// import Popup from 'reactjs-popup';
import Form from "./Form";

function Casserole(props){

    const [ data, setData] = useState([]);
    
    const getData = () => {
        let url = 'http://localhost:3001/'+props.Title; //URL of the resource we want to fetch
        fetch(url).then((response) => response.json()).then((receivedData) => setData(receivedData));
    }

    //Runs on the first render
    //And any time any dependency value changes
    useEffect( () => getData(), [] );

    return( 
        <div className="TextCenter">
            <h1 className=" neonPurpleText LinedText FontThin FontCursive">{props.Title}</h1><br/>
            <div className="Casserole Flex">
                
                { props.isAdmin===true?
                    <div className="neonBox Center CircularBox" >
                        <Form Title={props.Title} InputsList={props.InputsList} SubmitBtn="+"/>
                    </div>
                    : null
                }
            
                { data && data.length>0 && data.map((One)=> (
                    <Block key={One._id} id={One._id} isAdmin={props.isAdmin} Heading={props.Title} Name={One.Name} Price={One.Price} ImageSRC={One.Image}/>
                ))}
            </div>
        </div>
    );
}

export default Casserole; 