import React, { useState } from "react";



function Button(){

    const [isMouseOver, setMouseOver] = useState(false);

    function handleMouseOver(){ 
        setMouseOver(true);
    }

    function handleMouseOut(){
        setMouseOver(false);
    }

    return(
        <div className="col-lg-2 col-md-4">
            <button style={{ opacity : isMouseOver ? 0.8 : 1}}
                onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}
                type="submit"
            >
                <p>ADD ITEM</p>
            </button>
        </div>
    );
}

export default Button;