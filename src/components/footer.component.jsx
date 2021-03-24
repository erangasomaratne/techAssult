import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const FooterComponent = () => {
    return (
        <footer className='py-3'>
            <Container>
                <Row>
                    <Col className='text-center'>
                        <h6>Tech Assault &copy; {new Date().getFullYear()}</h6>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}