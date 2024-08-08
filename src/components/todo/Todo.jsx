import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, ListGroup, Row } from 'react-bootstrap'

function generateId(){
  return Math.floor(Math.random() * 10);
}

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

 console.log(todos);

  const handleSubmit = (e) => {
    setTodos( todos.concat({
      text : input,
      id: generateId()
    }));
    setInput("");
  };

  const removeTodo = (id) => setTodos((todos)=> todos.filter((t) => t.id !== id))
  
  return (
    <>
      <Container className='my-5'>
          <Row>
              <Col>
                  <h1 className="display-5 text-center bg-primary text-white p-3 border-radius rounded">TODO COMPONENT</h1>
              </Col>
          </Row>
      </Container>

      <Container className='my-5 '>
        <Row>
          <Col>
            <Card className="p-3">
              <Card.Body>
                <Form.Group as={Row}>
                  <Col xs={12} sm={12} md={12} lg={{span:6, offset:3}} xl={{span:6, offset:3}} xxl={{span:6, offset:3}} className='my-2'>
                    <Form.Control type="text" placeholder="Enter Some Data.." value={input} onChange={(e)=> setInput(e.target.value)}/>
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3} className='my-2'>
                    <Button onClick={handleSubmit}>Submit</Button>
                  </Col>
                </Form.Group>
              </Card.Body>

              <h3 className='text-primary text-center'>Entered Data</h3>
              <ListGroup as="ol" numbered>
                {todos.map(({text, id})=> (
                  <ListGroup.Item key={id}>
                    <span>{text}</span>
                    <Button className='float-end' variant='danger' onClick={()=> removeTodo(id)}>&times;</Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Todo;