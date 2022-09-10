import React from 'react';
import { ProductConstant } from '../action/ActionConst';

const initialState = {
  productData: [],
  message: '',
  error: '',
};

const ProductReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case `${ProductConstant.PRODUCT}_REQUEST`:
      return {
        ...state,
      };
    case `${ProductConstant.PRODUCT}_SUCCESS`:
      return (state = {
        ...state,
        message: action.payload.message,
        productData: action.payload.productData,
      });
    case `${ProductConstant.PRODUCT}_FAILURE`:
      return (state = {
        ...state,
        error: action.payload.error,
      });
    case `${ProductConstant.PRODUCT_DETAILS}_REQUEST`:
      return {
        ...state,
      };

    case `${ProductConstant.PRODUCT_DETAILS}_SUCCESS`:
      return (state = {
        ...state,
        message: action.payload.message,
        productData: action.payload.productData,
      });

    case `${ProductConstant.PRODUCT_DETAILS}_FAILURE`:
      return (state = {
        ...state,
        error: action.payload.error,
      });
    default:
      return state;
  }
};

export default ProductReducer;
