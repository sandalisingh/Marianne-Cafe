import { useEffect, useState } from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function USERS() {

    const [list, setlist] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/users')
        .then(response => response.json())
        .then(data => setlist(data))
    }, [] );

    function handleClick(username) {
        fetch(`/users/deletion?username=${encodeURIComponent(username)}`)
          .then(response => response.json())
          .then(state => this.setState(state));
        window.location.reload(false);      //to refresh the page
    }

    return(
        <div>
            <h1 className="Center">USERS</h1>

            <Container className="ul">
                {
                    list && list.length>0 && list.map((ONE,i) => (
                        <Row 
                        key={i} className="li neonBox Center"
                        style={{
                            backgroundColor: '#D9BEF8'
                        }}
                        >
                            <Col key={i+'1'}><span style={{color:'white'}}>USERNAME :</span>  {ONE.Username} </Col>
                            <Col key={i+'2'}><span style={{color:'white'}}>PHONE NO :</span>  {ONE.PhoneNo}  </Col>
                            <Col key={i+'3'}><span style={{color:'white'}}>EMAIL    :</span>  {ONE.Email}    </Col>

                            <Col key={i+'4'} xs={1}>
                            <button  key={i+'5'}
                                onClick={() => handleClick(ONE.Username)} 
                                className="CircularBtn "
                            >
                            X
                            </button>
                            </Col>
                        </Row>
                    ))
                }
            </Container>
        </div>
    );
}

