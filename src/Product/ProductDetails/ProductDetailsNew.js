import React, { useState, useEffect } from 'react';
import { CardGroup, Card } from 'react-bootstrap';

import axios from 'axios';

export default function ProductDetailsNew({ match }) {
  console.log(match);
  let categoryId = match.params.pName;
  const [product, setProduct] = useState({ singleProduct: {} });
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${categoryId}`)
      .then((res) => {
        console.log(res);
        setProduct({ singleProduct: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <CardGroup>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <img
              src={product.singleProduct.image}
              alt={product.singleProduct.category}
              height='150px'
              width='100px'
            />
            <Card.Title>{product.singleProduct.category}</Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>
              {product.singleProduct.price}
            </Card.Subtitle>
            <Card.Text>{product.singleProduct.description}</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
}
