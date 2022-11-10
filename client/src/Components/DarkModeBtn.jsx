import { ToggleSlider } from "react-toggle-slider";
import React, { useState, useEffect } from 'react';

export default function DarkModeBtn(props) {
    let iDARK = JSON.parse(localStorage.getItem('DARK'));

    const [DARK, setDARK] = useState(iDARK);

    function changeTheme(event) {
        console.log('DARK MODE BUTTON = ' + event);

        localStorage.setItem('DARK', JSON.stringify(event));

        getDARK();
        setTheme();

        window.location.reload();
    }

    function getDARK() {
        let x = JSON.parse(localStorage.getItem('DARK'));
        console.log('DARK MODE BUTTON in getdark() = ' + x);
        setDARK(x);
    }

    function setTheme() {
        if(DARK === true) {
            document.body.classList.add('DARKmode');
        }else{
            document.body.classList.remove('DARKmode');
        }
    }

    useEffect(() => {
        setTheme();
        getDARK();    
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="SingleNav ToggleBtnBox" style={{ position: "absolute", top: props.top, left: "0" }}>
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
                active={DARK}
            />
        </div>
    );
}