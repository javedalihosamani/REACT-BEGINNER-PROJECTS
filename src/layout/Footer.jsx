import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <Fragment>
        <Container fluid className='shadow'>
            <Row>
                <Col className='bg-primary p-5 text-center'>
                    <p className='text-white'>Copyright © 2024 Javed Ali.</p>
                </Col>
            </Row>
        </Container>
    </Fragment>
  )
}

export default Footer