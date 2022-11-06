import { Col, Container, Row } from "react-bootstrap";
import {useState} from 'react';

function SingleOrder(props){

    const [ PlusBtnState, setState] = useState(false);

    function expand(){
        setState(true);
    }

    function compress(){
        setState(false);
    }
    

    return(
        <div 
            className="SingleOrderBox neonBox " 
            onMouseLeave={compress}
            style={{height:'100%', width:'100%', padding:'20px 70px'}}
        >
            <h5>Order No  : {props.OrderNo}</h5> <br/>
            <h5>Name      : {props.Name}</h5>
            <h5>Mobile No : {props.MobileNo}</h5> <br/>
            <h2>ORDER</h2>

            { PlusBtnState===false ?
                <button 
                    style={{width:'50px',height:'50px', marginBottom:'100px !important'}} 
                    onClick={expand} 
                    className="LargeBtn CircularBtn"
                > + </button> : 
                <div>
                <Container>
                    <Row>
                        <Col>
                            Item
                        </Col>
                        <Col>
                            Price
                        </Col>
                        <Col>
                            Qty
                        </Col>
                        <Col>
                            Amount
                        </Col>
                    </Row>
                    { props.OrderList && props.OrderList.length>0 && props.OrderList.map((One)=> (
                        <Row>
                            <Col>
                                {One.ItemName}
                            </Col>
                            <Col>
                                {One.Price}
                            </Col>
                            <Col>
                                {One.Qty}
                            </Col>
                            <Col>
                                {One.Price * One.Qty}
                            </Col>
                        </Row>
                    ))}

                    <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col>TOTAL : </Col>
                        <Col>{props.TotalAmt}</Col>
                    </Row>
                </Container>

                <h5>Mode Of Payment : {props.ModeOfPayment}</h5> <br/>
                <h5>Payment Status  : {props.PaymentStatus}</h5> <br/>
            </div>
            }

            

        </div>
    );
}

export default SingleOrder;