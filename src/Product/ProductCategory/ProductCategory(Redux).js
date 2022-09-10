import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { ProductDetails } from '../../action/product.action';
import { useDispatch, useSelector } from 'react-redux';
import '../../Product/style.css';
import Store from '../../store/store';

export default function ProductCategoryRedux() {
  const [isLoading, setIsLoading] = useState(true);
  const [allProducts, setAllProducts] = useState([]);
  let products = undefined;
  const dispatchMethod = useDispatch();
  useEffect(() => {
    dispatchMethod(ProductDetails());
  }, []);
  // dispatchMethod(ProductDetails());
  products = useSelector((state) => state.productData.productData);
  console.log(products);
  console.log(isLoading);
  useEffect(() => {
    setIsLoading(false);
    setAllProducts(products);
  }, [products, setAllProducts]);

  console.log(allProducts);
  console.log(isLoading);
  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
  return (
    <>
      <div>
        {/* products.productData */}
        {allProducts.map((items) => (
          <Link to={`/ProductDetailsRedux/${items.id}`}>
            <div className='item' key={items.id}>
              <div>
                {<img src={items.image} alt='' height='150px' width='100px' />}
                <h3>{items.title}</h3>

                <p>${items.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
