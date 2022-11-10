
import SingleNav from "./SingleNav";
import React, { useState, useEffect } from 'react';
// import { redirect } from "react-router-dom";
import Logout from "./Logout";
import DarkModeBtn from "./DarkModeBtn";

function NavBar(props) {

    const [TOKEN, setToken] = useState([]);

    function getToken() {
        setToken(JSON.parse(localStorage.getItem('TOKEN')));

        console.log('NAVBAR RECEIVES TOKEN');
        console.log(TOKEN)
    }

    useEffect(() => {
        getToken();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="">
            {
                TOKEN === null ?
                    <>
                        <SingleNav fromTop="30px" Title="Home" SRC="/"></SingleNav>
                        <SingleNav fromTop="100px" Title="Login" SRC="/login"></SingleNav>
                        <DarkModeBtn top="170px"/>
                    </>
                    :

                    TOKEN.isAdmin === true ?
                        <>
                            <SingleNav fromTop="30px" Title="Home" SRC="/"></SingleNav>
                            <SingleNav fromTop="100px" Title="Order" SRC="/order"></SingleNav>
                            <SingleNav fromTop="170px" Title="Users" SRC="/users"></SingleNav>
                            <Logout fromTop="240px" />
                            <DarkModeBtn top="310px" />
                        </>
                        :
                        <>
                            <SingleNav fromTop="30px" Title="Home" SRC="/"></SingleNav>
                            <SingleNav fromTop="100px" Title="Order" SRC="/order"></SingleNav>
                            <Logout fromTop="170px" />
                            <DarkModeBtn top="240px" />
                        </>
            }
            {/* <SingleNav fromTop="30px" Title="Home" SRC="/"></SingleNav>
            <SingleNav fromTop="100px" Title="Order" SRC="/order"></SingleNav>

            <SingleNav fromTop="170px" Title="Login" SRC="/login"></SingleNav>

            {
                TOKEN === null ?
                    null :
                    TOKEN.isAdmin === true ?
                        <SingleNav fromTop="170px" Title="Users" SRC="/users" />
                        : null
            }

            {
                TOKEN === null ?
                    <SingleNav fromTop="170px" Title="Login" SRC="/login"></SingleNav>
                    :
                    <Logout />
            } */}

            {/* <div className="SingleNav ToggleBtnBox" style={{ position: "absolute", top: "240px", left: "0" }}>
                <ToggleSlider
                    onToggle={changeTheme}
                    handleBackgroundColor={'rebeccapurple'}
                    handleBackgroundColorActive={'black'}
                    barBackgroundColor={'white'}
                    barBackgroundColorActive={'white'}
                    barHeight={40}
                    barWidth={80}
                    barStyles={{ opacity: '0' }}
                    handleSize={30}
                    transitionDuration={3000}
                    barTransitionType={'ease'}
                />
            </div> */}

        </div>
    );
}

export default NavBar;