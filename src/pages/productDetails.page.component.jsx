import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Row, Col, Image, Button, ListGroup } from 'react-bootstrap';
import { RatingComponent } from '../components/rating.component';


export const ProductDetailsPage = ({ match }) => {
    const [ product, setProduct ] = useState([]);
    const history = useHistory();
    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`/api/products/${match.params.id}`);
            setProduct(data);
        };
        fetchProduct();
    },[match]);
    
    return (
        <div>
            <Button className='btn my-3' onClick={() => history.goBack()}>Go Back</Button>
            <h3 className='py-3'>Product Details</h3>
            <Row>
                <Col md={6}>                   
                    <Image src={product.image} alt={product.name} rounded fluid />                                                                             
                </Col>
                <Col md={6}>
                    <ListGroup variant='flush'>
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