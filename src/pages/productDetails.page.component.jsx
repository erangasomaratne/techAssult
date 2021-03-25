import React from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Image, Button, ListGroup } from 'react-bootstrap';
import { RatingComponent } from '../components/rating.component';
import products from '../products';

export const ProductDetailsPage = ({ match }) => {
    const history = useHistory();
    const product = products.find(p => p._id === match.params.id);
    return (
        <div>
            <Button className='btn my-3' onClick={() => history.goBack()}>Go Back</Button>
            <h3 className='py-3'>Product Details</h3>
            <Row>
                <Col md={6}>
                    <div style={{ width:'25rem', height:'10rem'}}>
                    <Image src={product.image} alt={product.name} rounded fluid />
                    </div>                    
                </Col>
                <Col md={6}>
                    <ListGroup>
                        <ListGroup.Item><h5>{product.name}</h5></ListGroup.Item>
                        <ListGroup.Item>{product.description}</ListGroup.Item>
                        <ListGroup.Item>
                            <RatingComponent value={product.rating} reviews={product.numReviews} rating={product.rating} />
                        </ListGroup.Item>
                        <ListGroup.Item>${product.price}</ListGroup.Item>
                        <ListGroup.Item>
                        {
                            product.countInStock > 0 ? 'In Stock' : 'Out of Stock'
                        }
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button className='btn-block' disabled={product.countInStock === 0}>add to cart</Button>
                        </ListGroup.Item>
                    </ListGroup>                    
                </Col>
               
            </Row>
        </div>
    );
};