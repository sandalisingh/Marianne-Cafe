import { useEffect, useState } from "react";
import Greeting from "../Components/Greeting";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

function OrderStatus(props) {
    const navigate = useNavigate();

    // const [TOKEN, setToken] = useState([]);
    const [ORDER, setORDER] = useState([]);

    // function getToken() {
    //     setToken(JSON.parse(localStorage.getItem('TOKEN')));
    // }

    function getData() {
        let x = props.TOKEN === null ? "Shailesh" : props.TOKEN.User;

        fetch(`/getOrderbyUsername?Username=${encodeURIComponent(x)}`)
            .then(response =>
                response.json()
                // console.log("RESPONSE RECEIVED FROM THE DB");
                // console.log(response);
            )
            .then(state => {
                setORDER(state)
                console.log("ORDER STATUS RECEIVED FROM THE DB");
                console.log(state);
                // if (state === null) {
                //     navigate('/');
                // }
            })
            .catch(error => {
                //handle error
                console.log("ERROR");
                console.log(error);
            });
    }

    useEffect(() => {
        // getToken();
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function handleClick() {
        console.log('SENDING ORDER ID TO SERVER');
        console.log(ORDER._id)

        await fetch('http://localhost:3001/orders/deletion?'+ new URLSearchParams({
            delID: ORDER._id,
            username: ORDER.CustomerName,
        }))
            
        let iTOKEN = JSON.parse(localStorage.getItem('TOKEN'));
        if (iTOKEN === null) {

        } else {
            let fTOKEN = {
                isLoggedIn: iTOKEN.isLoggedIn,
                isAdmin: iTOKEN.isAdmin,
                User: iTOKEN.User,
                PhoneNo: iTOKEN.PhoneNo,
                placeOrder: false
            }
            localStorage.setItem('TOKEN',JSON.stringify(fTOKEN));
        }

        navigate('/');
        window.location.reload(false);      //to refresh the page
    }

    return (
        <div>
            <div className="Center">
                <Greeting Title="Order Status" />
            </div>
            <div className="Center">
                <div style={{
                    textAlign: "center",
                    width: '70%',
                    padding: '10px 30px'
                }}
                    className=""
                >
                    <Container>
                        <Row>
                            <Col style={{fontWeight:'bolder'}}>OrderID</Col>
                            <Col>{ORDER.OrderID}</Col>
                        </Row>
                        <Row>
                            <Col style={{fontWeight:'bolder'}}>Name </Col>
                            <Col>{ORDER.CustomerName}</Col>
                        </Row>
                        <Row>
                            <Col style={{fontWeight:'bolder'}}>Phone Number</Col>
                            <Col>{ORDER.PhoneNo}</Col>
                        </Row>
                        <Row><h2>ORDER</h2></Row>
                        <Row style={{
                            backgroundColor: '#D9BEF8'
                        }}>
                            <Col className="Center">ITEM</Col>
                            <Col xs={2} className="Center">PRICE</Col>
                            <Col xs={2} className="Center">QTY</Col>
                            <Col className="Center">AMT</Col>
                        </Row>
                        {
                            ORDER.List && ORDER.List.length > 0 && ORDER.List.map((ONE, i) => (
                                <Row key={i}>
                                    <Col className="Center">
                                        {ONE.Name}
                                    </Col>
                                    <Col xs={2} className="Center">
                                        {ONE.Price}
                                    </Col>
                                    <Col xs={2} className="Center">
                                        {ONE.Qty}
                                    </Col>
                                    <Col className="Center">
                                        {ONE.Amt}
                                    </Col>
                                </Row>
                            ))
                        }
                        <Row>
                            <Col></Col>
                            <Col xs={2}></Col>
                            <Col xs={2}>TOTAL</Col>
                            <Col >{ORDER.TotalAmt}</Col>
                        </Row>

                        {
                            ORDER.hasMessage === false ?
                                <h1 className="neonPurpleText LargeText FontThin FontCursive">Please wait...</h1>
                                :
                                <div>
                                    <h1>Order ready !</h1>
                                    <Button
                                        className="TransparentBtn neonPurpleText LargeText FontThin FontCursive"
                                        onClick={handleClick}
                                    >
                                        Ok
                                    </Button>
                                </div>
                        }

                    </Container>
                </div>
            </div>
        </div>
    );
}

export default OrderStatus;