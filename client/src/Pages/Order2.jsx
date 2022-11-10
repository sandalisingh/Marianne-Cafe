import Greeting from "../Components/Greeting"

import { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

import { useNavigate } from 'react-router-dom';

import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

function Order2() {
  const navigate = useNavigate();

  const [bill, setbill] = useState([]);
  const [TotalAmt, setTotalAmt] = useState([]);

  function handleClick() {
    localStorage.setItem('TOTAL', getTotalAmt());
    navigate('/bill');
  }

  function getTotalAmt() {
    let SUM = 0;

    for (let i = 0; i < bill.length; i++) {
      SUM += (bill[i].Price * bill[i].Qty);
    }

    // setTotalAmt(SUM);

    return SUM;
  }

  function getbill() {
    let x = JSON.parse(localStorage.getItem('ORDER'));
    setbill(x);
  }

  useEffect(() => getbill()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  , []);

  useEffect(() => setTotalAmt(getTotalAmt())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  , []);

  return (
    <div className="">
      <div className="Center">
        <Greeting Title="My Order" />
      </div>
      <br />

      <div className="Center">
        <Container className="MyOrder" >
          <Row
            style={{ backgroundColor: "#D9BEF8", height: '50px' }}
            className=" FontThin"
          >
            <Col className="Center">ITEM</Col>
            <Col className="Center" xs={2}>PRICE</Col>
            <Col className="Center" xs={2}>QTY</Col>
            <Col className="Center" xs={3}>AMT</Col>
          </Row>

          {
            bill && bill.length > 0 && bill.map((ONE, i) => (
              <Row key={i}>
                <Col className="Center">
                  {ONE.Name}
                </Col>
                <Col xs={2} className="Center">
                  {ONE.Price}
                </Col>
                <Col xs={2} className="Center">
                  {ONE.Qty}
                  <AiFillCaretUp
                    style={{
                      cursor: 'pointer',
                      margin: '5%'
                    }}
                    onClick={() => {
                      console.log("CLICKED PLUS")
                      let list = JSON.parse(localStorage.getItem('ORDER'));

                      if (list === null) {

                      } else {
                        for (var i = 0; i < list.length; i++) {
                          if (list[i].Name === ONE.Name) {
                            list[i].Qty = list[i].Qty + 1;

                            localStorage.removeItem('ORDER');
                            localStorage.setItem('ORDER', JSON.stringify(list));
                            setbill(list);

                            let SUM = 0;
                            for (let i = 0; i < list.length; i++) {
                              SUM += list[i].Price * list[i].Qty;
                            }

                            setTotalAmt(SUM);
                            break;
                          }
                        }
                      }
                    }} />
                  <AiFillCaretDown
                    style={{
                      cursor: 'pointer'
                    }}
                    onClick={() => {
                      console.log("CLICKED MINUS")
                      let list = JSON.parse(localStorage.getItem('ORDER'));

                      if (list === null) {

                      } else {
                        for (var i = 0; i < list.length; i++) {
                          if (list[i].Name === ONE.Name) {
                            list[i].Qty = list[i].Qty - 1;

                            if (list[i].Qty === 0) {
                              list.splice(i, 1);
                            }

                            localStorage.removeItem('ORDER');
                            localStorage.setItem('ORDER', JSON.stringify(list));
                            setbill(list);

                            let SUM = 0;
                            for (let i = 0; i < list.length; i++) {
                              SUM += list[i].Price * list[i].Qty;
                            }

                            setTotalAmt(SUM);
                            break;
                          }
                        }
                      }

                    }} />
                </Col>
                <Col xs={3} className="Center">
                  {ONE.Price * ONE.Qty}
                </Col>
              </Row>
            ))
          }

          <Row>
            <Col className="Center"></Col>
            <Col xs={2} className="Center">TOTAL</Col>
            <Col xs={3} className="Center">₹ {TotalAmt}</Col>
          </Row>
        </Container>
      </div>

      <br />
      <div className="Center">
        {
          bill === null || bill.length === 0 ?
            null :
            <Button
              className="TransparentBtn neonPurpleText LargeText FontThin FontCursive"
              onClick={handleClick}
            >
              Place order
            </Button>
        }

      </div>
    </div>
  );

}

export default Order2;