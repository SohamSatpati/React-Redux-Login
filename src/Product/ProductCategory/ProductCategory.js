import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductData from '../Product.json';

export default function ProductCategory() {
	let productCategory = ProductData.Product;
	console.log(productCategory);

	return (
		<>
			<h1>Product Category Page</h1>
			<hr />
			<ul>
				{productCategory.map(item => (
					<li key={item.CatId}>
						<Link to={`/ProductSubCategory/${item.categoryName}`}>{item.categoryName}</Link>
					</li>
				))}
			</ul>
		</>
	);
}
