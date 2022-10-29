// import { useState } from "react";
import SingleNav from "./SingleNav";

function NavBar(props){
    // const [here, setOnClick] = useState({isDark=true, });

    // function handleClick(){
    //     setOnClick({false,<span style={{width:"80px", height:"8px",backgroundColor:"red"}}></span>});
    // }

    return(
        <div className="">
            <SingleNav fromTop="30px" Title="Home" SRC=""></SingleNav>
            <SingleNav fromTop="100px" Title="Order" SRC=""></SingleNav>
            <SingleNav fromTop="170px" Title="Login" SRC=""></SingleNav>

            {/* <div className="SingleNav ToggleBtnBox" onClick={handleClick} style={{position:"absolute", top:"240px", left:"0"}}>
                {here}
                <p className="ToggleBtn"></p>
            </div> */}
        </div>
    );
}

export default NavBar;