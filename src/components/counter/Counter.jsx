import React, { Fragment, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <Fragment>
      <Container className='my-5'>
          <Row>
              <Col>
                  <h1 className="display-5 text-center bg-primary text-white p-3 border-radius rounded">COUNTER COMPONENT</h1>
              </Col>
          </Row>
      </Container>

      <Container className='my-5'>
        <Row>
          <Col>
            <h1 className='text-center text-primary display-3'>{count}</h1>
          </Col>
        </Row>
        <Row>
          <Col>
          <Button variant='success rounded-circle' onClick={increment} >+</Button>
          <Button variant='danger float-end rounded-circle' onClick={decrement} disabled={count === 0}>-</Button>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default Counter;