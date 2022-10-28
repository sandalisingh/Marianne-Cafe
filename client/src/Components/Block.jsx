import React from "react";

function Block(props){

    function handleClick(id, heading) {
        // fetch(`/menu/deletion?delID=${encodeURIComponent(event)}`)
        fetch(`/${encodeURIComponent(heading)}/deletion?delID=${encodeURIComponent(id)}`)
          .then(response => response.json())
          .then(state => this.setState(state));
        window.location.reload(false);      //to refresh the page
    }

    return( 
        <div key={props.key} className="Block  Relative">
            <h4 className="SmallText neonGreenText FontCursive">{props.Name}</h4>
            <h6 className="VSmallText neonGreenText">₹ {props.Price}</h6>
            
            <img src={props.ImageSRC} alt="Something"/>
            
            {props.isAdmin===true? 
                <button onClick={() => handleClick(props.id, props.Heading)} className="CircularBtn TopRight">X</button>
                : null
            }
            {/* <i onClick={() => handleClick(props.id)} className="CircularBtn TopRight fal fa-times"></i> */}
        </div>
    );
}

export default Block; 