import React, { useState } from 'react';
import { CardGroup, Card } from 'react-bootstrap';
import ProductData from '../Product.json';

export default function ProductDetails({ match }) {
	console.log(match);
	let categoryName = match.params.pName;

	let subCatData = ProductData.Product.find(e => e.categoryName === categoryName);
	console.log(subCatData);
	let singleProduct;
	// let detailsData = a.find(e => e.SubCategory.SubCatId === match.params.pDetails);
	// console.log(detailsData);
	subCatData.SubCategory.filter(e => {
		if (e.SubCatId == match.params.pDetails) {
			console.log(e.SubCatName, e.price);
			singleProduct = e;
		}
	});
	console.log(singleProduct);

	return (
		<>
			<CardGroup>
				<Card style={{ width: '18rem' }}>
					<Card.Body>
						<img src={singleProduct.image} alt={singleProduct.SubCatName} />
						<Card.Title>{singleProduct.SubCatName}</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">{singleProduct.price}</Card.Subtitle>
						<Card.Text>{singleProduct.SubDescText}</Card.Text>
					</Card.Body>
				</Card>
			</CardGroup>
		</>
	);
}
