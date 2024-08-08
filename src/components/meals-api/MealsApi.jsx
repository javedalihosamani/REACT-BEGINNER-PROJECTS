import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';

const MealsApi = () => {
    
    const [items, setItem] = useState([]);
    console.log("State : ", items);

    // fetch().then().then().catch();
    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then((res)=>{
           /*  console.log(res) 
            console.log(res.data.meals) */
            setItem(res.data.meals);
            
        })
        .catch((err) => {console.log(err)})
    }, []);

  return (
    <>
        <Container className='my-5'>
            <Row>
                <Col>
                    <h1 className="display-5 text-center bg-primary text-white p-3 border-radius rounded">MEALSAPI COMPONENT</h1>
                </Col>
            </Row>
        </Container>

        <Container className='my-5'>
            <Row>
                {items.map((item, index) => (
                    <Col key={index} xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className='my-3'>
                        <Card className='shadow'>
                            <Card.Header>
                                <Image src={item.strMealThumb} alt={item.strMeal} fluid />
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>{item.strMeal}</Card.Title>
                                <Card.Text>#{item.idMeal}</Card.Text>
                            </Card.Body>
                            
                            <Card.Footer>
                                <Button variant='primary' className="float-end">Order</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    </>
  )
}

export default MealsApi