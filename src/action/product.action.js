import axios from 'axios';
import React from 'react';
import { ProductConstant } from './ActionConst';

export const ProductDetails = () => {
  return async (dispatch) => {
    dispatch({
      type: `${ProductConstant.PRODUCT}_REQUEST`,
    });
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        dispatch({
          type: `${ProductConstant.PRODUCT}_SUCCESS`,
          payload: {
            productData: res.data,
          },
        });
        console.log(res);
      })
      .catch((err) => {
        dispatch({
          type: `${ProductConstant.PRODUCT}_FAILURE`,
          payload: {
            error: 'Failed to fetch Product Data',
          },
        });
      });
  };
};

export const getSingleProductDetails = (productId) => {
  console.log('PID:', productId);
  return async (dispatch) => {
    dispatch({
      type: `${ProductConstant.PRODUCT_DETAILS}_REQUEST`,
    });
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        dispatch({
          type: `${ProductConstant.PRODUCT_DETAILS}_SUCCESS`,
          payload: {
            productData: res.data,
          },
        });
        //console.log(res);
      })
      .catch((err) => {
        dispatch({
          type: `${ProductConstant.PRODUCT_DETAILS}_FAILURE`,
          error: console.log(err),
        });
      });
  };
};
