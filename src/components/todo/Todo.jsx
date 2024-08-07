import React from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'

const Todo = () => {
  return (
    <>
      <Container className='my-5'>
          <Row>
              <Col>
                  <h1 className="display-5 text-center bg-primary text-white p-3 border-radius rounded">TODO COMPONENT</h1>
              </Col>
          </Row>
      </Container>

      <Container className='my-5'>
        <Row>
          <Col>
            <Card className="p-3">
              <Card.Body>
                <Form.Group as={Row}>
                  <Col xs={12} sm={12} md={12} lg={10} xl={10} xxl={10} className='my-2'>
                    <Form.Control type="text" placeholder="Enter Some Data.."  />
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2} className='my-2'>
                    <Button>Submit</Button>
                  </Col>
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Todo