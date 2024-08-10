import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import "./Testimonials.css"
const Testimonials = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonials = [
        {
          quote: "This is the best product I've ever used!",
          author: "Jane Doe",
        },
        {
          quote: "I highly recommend this product to everyone!",
          author: "John Smith",
        },
        {
          quote: "This product has completely changed my life!",
          author: "Bob Johnson",
        },
    ];

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
    };

  return (
    <>
        <Container className='my-5'>
            <Row>
                <Col>
                    <h1 className="display-5 text-center bg-primary text-white p-3 border-radius rounded">TESTIMONIALS COMPONENT</h1>
                </Col>
            </Row>
        </Container>

        <Container>
            <Row>
                <Col>
                    <div className='testimonials'>
                        <div className="testimonials-quote">
                            {testimonials[currentIndex].quote}
                        </div>
                        <div className="testimonials-author">
                            {testimonials[currentIndex].author}
                        </div>
                        <div className="testimonials-nav">
                            <Button onClick={prevSlide}>Prev</Button>
                            <Button onClick={nextSlide}>Next</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Testimonials