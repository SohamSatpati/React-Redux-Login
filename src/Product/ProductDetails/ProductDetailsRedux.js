import React, { useEffect, useState } from 'react';
import { getSingleProductDetails } from '../../action/product.action';
import { useDispatch, useSelector } from 'react-redux';
import { CardGroup, Card } from 'react-bootstrap';
import '../../Product/style.css';
import Store from '../../store/store';

export default function ProductDetailsRedux({ match }) {
  console.log(match);
  let productId = match.params.pId;

  const dispatchMethod = useDispatch();
  useEffect(() => {
    dispatchMethod(getSingleProductDetails(productId));
  }, []);
  const products = useSelector((state) => state.productData);
  console.log(products.productData);

  return (
    <>
      <CardGroup>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <img
              src={products.productData.image}
              alt={products.productData.title}
            />
            <Card.Title>{products.productData.title}</Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>
              ${products.productData.price}
            </Card.Subtitle>
            <Card.Text>{products.productData.description}</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
}
