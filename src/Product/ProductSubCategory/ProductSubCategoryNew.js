import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { CardGroup, Card, Button, Form, FormControl } from 'react-bootstrap';
import axios from 'axios';

export default function ProductSubCategoryNew({ match }) {
	const history = useHistory();
	let categoryName = match.params.pName;
	console.log(match);
	const [category, setCategory] = useState({ categoryDetails: [] });

	useEffect(() => {
		axios
			.get(`https://fakestoreapi.com/products/category/${categoryName}`)
			.then(res => {
				console.log(res);
				setCategory({ categoryDetails: res.data });
			})
			.catch(error => {
				console.log(error);
			});
	}, [setCategory]);

	return (
		<>
			<CardGroup>
				{category.categoryDetails.map(items => (
					<Card style={{ width: '18rem' }}>
						<Card.Body>
							{<img src={items.image} alt="" height="150px" width="100px" />}
							<Card.Title>{items.category}</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">{items.description}</Card.Subtitle>
							<Card.Text>{items.price}</Card.Text>
							<button onClick={() => history.push(`/ProductDetailsNew/${items.id}`)}>Details</button>
						</Card.Body>
					</Card>
				))}
			</CardGroup>
		</>
	);
}
