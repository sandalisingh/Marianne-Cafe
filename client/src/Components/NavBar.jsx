import { ToggleSlider }  from "react-toggle-slider";
import SingleNav from "./SingleNav";
import React, {useState,useEffect} from 'react';
// import { redirect } from "react-router-dom";
import Logout from "./Logout";

function NavBar(props){
    const [DARK, setDARK] = useState([]);
    
    function changeTheme(event) {
        console.log('DARK MODE BUTTON = '+event);

        if(event) {
            setDARK(true);
            // document.body.classList.add('DARKmode')
        }else{
            setDARK(false);
            // document.body.classList.remove('DARKmode');
        }
    }

    useEffect( () => {
        if(DARK) {
            document.body.classList.add('DARKmode')
        }else{
            document.body.classList.remove('DARKmode');
        }
    })

    const [TOKEN, setToken] = useState([]);

    function getToken() {
        setToken(localStorage.getItem('TOKEN'));
        console.log(TOKEN);
    }

    useEffect( () => getToken()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    , [] );

    return(
        <div className="">
            <SingleNav isLoggedOut={false} fromTop="30px" Title="Home" SRC="/"></SingleNav>
            <SingleNav isLoggedOut={false} fromTop="100px" Title="Order" SRC="/order"></SingleNav>
            
            <SingleNav isLoggedOut={false} fromTop="170px" Title="Login" SRC="/login"></SingleNav>

            {
                TOKEN === null ?
                <SingleNav isLoggedOut={false} fromTop="170px" Title="Login" SRC="/login"></SingleNav>
                : 
                <Logout/>
            }

            <div className="SingleNav ToggleBtnBox" style={{position:"absolute", top:"240px", left:"0"}}>
                <ToggleSlider
                    onToggle={changeTheme}
                    handleBackgroundColor={'rebeccapurple'}
                    handleBackgroundColorActive={'black'}
                    barBackgroundColor={'white'}
                    barBackgroundColorActive={'white'}
                    barHeight={40}
                    barWidth={80}
                    barStyles={{opacity:'0'}}
                    handleSize={30}
                    transitionDuration={3000}
                    barTransitionType={'ease'}
                />
            </div>

        </div>
    );
}

export default NavBar;