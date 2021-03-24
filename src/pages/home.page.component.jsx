import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { ProductComponent } from '../components/product.component';
import products from '../products';

export const HomePage = () => {
    return (
        <>
            <h1>Featured Products</h1>
            <Row>
                {
                    products.map(product => <Col sm={12} md={6} lg={4} xl={3} key={product._id}><ProductComponent product={product} /></Col>)
                }
            </Row>
        </>
    )
}