import React, { useState } from "react";

 

function Greeting(props){
    return( 
        <div>
            <img style={{height:'300px', width:'400px'}} className="FitInSizedBox" src="chef2.gif" alt="Master Chef"/>
            <h1 className="FitInSizedBox neonPurpleText FontCursive VLargeText">Menu</h1>
        </div>
    );
}

export default Greeting;