import { Col, Container, Row } from "react-bootstrap";
import { useState } from 'react';

function SingleOrder(props) {

    const [PlusBtnState, setState] = useState(false);

    function expand() {
        setState(true);
    }

    function compress() {
        setState(false);
    }

    async function handleClick() {

        await fetch(`http://localhost:3001/sendMessage?OrderID=${encodeURIComponent(props.OrderNo)}`)

        window.location.reload();
    }


    return (
        <div className="SingleOrder">
            <div
                className="SingleOrderBox neonBox "
                onMouseLeave={compress}
                style={{ height: '100%', width: '100%', padding: '20px 70px' }}
            >
                <h5><span><small style={{ color: 'black' }}>{props.OrderNo}</small></span></h5> <br />

                <div style={{
                    border: '2px solid white',
                    padding: '3% 7%'
                }}>

                    <h5><Row>
                        <Col xs={4}><small>Name</small></Col>
                        <Col><span style={{ color: 'rebeccapurple' }}>{props.Name}</span></Col>
                    </Row></h5>
                    <h5><Row>
                        <Col xs={4}><small>MobileNo</small></Col>
                        <Col><span style={{ color: 'rebeccapurple' }}>{props.MobileNo}</span></Col>
                    </Row>
                    </h5>

                </div><br />

                <h2>ORDER</h2>

                {PlusBtnState === false ?
                    <div className="Center">
                        <button
                            style={{ width: '100px', height: '100px', marginBottom: '100px !important' }}
                            onClick={expand}
                            className="LargeBtn CircularBtn"
                        > + </button>
                    </div>
                    :
                    <div>
                        <Container>
                            <Row style={{ backgroundColor: "white", color: 'black' }}>
                                <Col>
                                    Item
                                </Col>
                                <Col xs={2}>
                                    Price
                                </Col>
                                <Col xs={2}>
                                    Qty
                                </Col>
                                <Col xs={1}>
                                    ₹
                                </Col>
                            </Row>
                            {props.OrderList && props.OrderList.length > 0 && props.OrderList.map((One, i) => (
                                <Row key={i} style={{ color: 'black' }}>
                                    <Col key={i + '1'}>
                                        <small>
                                            {One.Name}
                                        </small>
                                    </Col>
                                    <Col key={i + '2'} xs={1}>
                                        <small>
                                            {One.Price}
                                        </small>
                                    </Col>
                                    <Col key={i + '3'} xs={1}>
                                        <small>
                                            {One.Qty}
                                        </small>
                                    </Col>
                                    <Col key={i + '4'} xs={2}>
                                        <small>
                                            {One.Price * One.Qty}
                                        </small>
                                    </Col>
                                </Row>
                            ))}

                            <Row>
                                <Col></Col>
                                <Col></Col>
                                <Col>TOTAL</Col>
                                <Col>{props.TotalAmt}</Col>
                            </Row>

                            <Row>
                                <Col></Col>
                                <Col></Col>
                                <Col></Col>
                                <Col>
                                    <button
                                        className="TransparentBtn neonPurpleText SmallText FontThin FontCursive"
                                        onClick={handleClick} type="submit"
                                        style={{ width: '400px' }}
                                    >
                                        Order ready!
                                    </button>
                                </Col>
                            </Row>
                        </Container>

                        {/* <h5>Mode Of Payment : {props.ModeOfPayment}</h5> <br/>
                <h5>Payment Status  : {props.PaymentStatus}</h5> <br/> */}
                    </div>
                }



            </div>
        </div>
    );
}

export default SingleOrder;