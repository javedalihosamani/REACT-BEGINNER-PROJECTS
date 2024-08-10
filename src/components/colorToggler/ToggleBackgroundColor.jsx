import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const ToggleBackgroundColor = () => {
    const [backgroundColor, setBackgroundColor] = useState("white");
    const [textColor, setTextColor] = useState("#1b1b1b");
    const [buttonStyle, setButtonStyle] = useState("white");

    function handleClick(){
        setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
        setTextColor(textColor === "#1b1b1b"? "white" : "#1b1b1b");
        setButtonStyle(buttonStyle === "white"? "#1b1b1b" : "white");
    }

  return (
    <>
        <Container className='my-5'>
            <Row>
                <Col>
                    <h1 className='display-5 text-center bg-primary text-white p-3 border-radius rounded'>TOGGLE BACKGROUND COLOR COMPONENT</h1>
                    <Button 
                    onClick={handleClick}
                    style={{
                        buttonStyle,
                        color: textColor,
                        border: `2px solid ${textColor}`,
                      }}
                    >Click</Button>
                </Col>
            </Row>
        </Container>
        <Container style={{backgroundColor, color:textColor}}>
            <Row>
                <Col>
                    <h1 className='display-5 text-center'>Welcome To A Real World..</h1>
                </Col>
            </Row>
    </Container>
    </>
  )
}

export default ToggleBackgroundColor