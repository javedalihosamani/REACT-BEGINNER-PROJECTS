import React, { useState } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import "./Accordion.css"

const Accordion = (props) => {
    const {accordion} = props;

    console.log(props); 

    const [isActive, setIsActive] = useState(false);

    return(
        <>
            <Container className='my-5'>
                <Row>
                    <Col>
                        <h1 className="display-5 text-center bg-primary text-white p-3 border-radius rounded">ACCORDION COMPONENT</h1>
                    </Col>
                </Row>
            </Container>
            <Container className='my-5'>
                <Row>
                    <Col>
                        {
                            accordion.map((item, index) => (
                                <div className="accordion-card" key={index}>
                                    <div className="header" onClick={()=> setIsActive(!isActive)}>
                                        <h3>{item.title}</h3>
                                        <p className="icon">{isActive ? "-" : "+"}</p>
                                    </div>
                                    <div className="content">
                                        {isActive && <p className="card-info">{item.content}</p>}
                                    </div>
                                </div>
                                
                            ))
                        }
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Accordion;