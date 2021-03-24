import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { RatingComponent } from './rating.component';

export const ProductComponent = ({ product }) => {
    return (
        <Card style={{ width:'18rem'}} className='my-3 p-3 rounded'>
            <Link to={`/product/${product._id}`}>
            <Card.Img style={{ height:'10rem'}} variant="top" src={product.image} />           
            </Link>
            <Card.Body> 
            <Link to={`/product/${product._id}`}>          
                 <Card.Title as='div'><strong>{product.name}</strong></Card.Title>                 
                 </Link>
                 <Card.Text as='div'> <RatingComponent value={product.rating} reviews={product.numReviews} rating={product.rating} /></Card.Text>
                 <Card.Text className='mt-3' as='h3'>${product.price}</Card.Text>
             </Card.Body>
            
             
        </Card>
    );
};