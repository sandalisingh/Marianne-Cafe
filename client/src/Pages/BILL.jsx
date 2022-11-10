import { useEffect, useState } from "react";
// import { Button, Container, Row, Col } from "react-bootstrap";
import Greeting from "../Components/Greeting";
import PaytmBtn from "../Components/PaytmBtn";

function BILL() {
    const [TOKEN, setToken] = useState([]);

    function getToken() {
        setToken(JSON.parse(localStorage.getItem('TOKEN')));

        console.log('NAVBAR RECEIVES TOKEN');
        console.log(TOKEN)
    }

    useEffect(() => getToken()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    , []);

    const [bill, setbill] = useState([]);

    useEffect(() => {
        setbill(JSON.parse(localStorage.getItem('ORDER')));

        console.log('BILL');
        console.log(bill);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='TextCenter'>
            <div className="Center">
                <Greeting Title="Bill" />
            </div>
            <h3>TOTAL AMOUNT =  ₹ {localStorage.getItem('TOTAL')}</h3>

            <PaytmBtn TOKEN={TOKEN}/>

        </div>
    );
}

export default BILL;

