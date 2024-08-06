import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Counter = () => {
  return (
    <Container className='my-5'>
        <Row>
            <Col>
                <h1 className="display-5 text-center bg-primary text-white p-3 border-radius rounded">COUNTER COMPONENT</h1>
            </Col>
        </Row>
    </Container>
  )
}

export default Counter;