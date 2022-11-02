// import { useState } from "react";
import SingleNav from "./SingleNav";

function NavBar(props){
    // const [here, setOnClick] = useState({isDark=true, });

    // function handleClick(){
    //     setOnClick({false,<span style={{width:"80px", height:"8px",backgroundColor:"red"}}></span>});
    // }

    return(
        <div className="">
            <SingleNav fromTop="30px" Title="Home" SRC="/"></SingleNav>
            <SingleNav fromTop="100px" Title="Order" SRC="/order"></SingleNav>
            <SingleNav fromTop="170px" Title="Login" SRC="/login"></SingleNav>

            {/* <div className="SingleNav ToggleBtnBox" onClick={handleClick} style={{position:"absolute", top:"240px", left:"0"}}>
                {here}
                <p className="ToggleBtn"></p>
            </div> */}

            {/* <div className="SingleNav ToggleBtnBox" style={{position:"absolute", top:"240px", left:"0"}}>
            <button class="btn" id="btn">
                <div class="ripple ripple--dark"></div>
                <div class="ripple ripple--light"></div>
                
                <div class="toggle toggle--dark"></div>
                <div class="toggle toggle--light"></div>
            </button>
            </div> */}

        </div>
    );
}

export default NavBar;