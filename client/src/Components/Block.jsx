import { useState } from "react";

function Block(props){
    const [TextFontClass, setTextFont] = useState("neonGreenText");
    
    var addClass = "Relative "
    // if(props.isAdmin===true) {
    //     addClass += "BlockAdmin"
    // }else{
        addClass += "Block"
    // }

    function handleClick1(id, heading) {
        // fetch(`/menu/deletion?delID=${encodeURIComponent(event)}`)
        fetch(`/${encodeURIComponent(heading)}/deletion?delID=${encodeURIComponent(id)}`)
          .then(response => response.json())
          .then(state => this.setState(state));
        window.location.reload(false);      //to refresh the page
    }

    function handleClick2(id, heading) {
        console.log("CLICKED PLUS")
    }

    function mouseEnter(){
        setTextFont("neonPurpleText");
    }

    function mouseLeave() {
        setTextFont("neonGreenText");
    }

    return( 
        <div 
            onMouseEnter={mouseEnter} 
            onMouseLeave={mouseLeave} 
            className={addClass}
        >
            <h4 
                className={TextFontClass+" SmallText FontCursive"}
            >
                {props.Name}
            </h4>
            <h6 
                className={TextFontClass+" VSmallText"}
            >
            ₹ {props.Price}
            </h6>
            
            <img  
                src={props.ImageSRC} 
                alt="Something"
            />
            
            {props.isAdmin===true? 
                <button 
                    onClick={() => handleClick1(props.id, props.Heading)} 
                    className="CircularBtn TopRight"
                >
                X
                </button>
                : 
                <button 
                    onClick={() => handleClick2(props.id, props.Heading)} 
                    className="CircularBtn TopRight"
                >
                +
                </button>
                
            }

        </div>
    );
}

export default Block; 