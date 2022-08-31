import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = ({product}) => {
    return (
            <Card style={{ width: '18rem', backgroundColor: '#043d77', borderRadius: '5px'}}>
                <Card.Img variant='top' src={product.image} />
                <Card.Body>
                    <Card.Title style={{color: 'white'}}>{product.title}</Card.Title>
                    <Card.Text style={{color: 'white'}}>{product.tags}</Card.Text>
                    <Button style={{backgroundColor: '#023e61', border: '1px solid white'}} variant='primary'><a style={{textDecoration: 'none', color: 'white'}} href={product.id}>View Product</a></Button>
                </Card.Body>
            </Card>
    )
}

export default Product;