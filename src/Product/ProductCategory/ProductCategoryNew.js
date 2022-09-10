import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { CardGroup, Card, Button, Form, FormControl } from 'react-bootstrap';
import axios from 'axios';
import '../../Product/style.css';

export default function ProductCategoryNew() {
	const [isLoading, setIsLoading] = useState(true);
	//	const [loadingTxt, setLoadingTxt] = useState('');
	const [productsData, setProductsData] = useState({ newproducts: [] });

	// useEffect is combination of componentDidMount, componentWillUnmount, componentDidUpdate

	useEffect(() => {
		axios
			.get('https://fakestoreapi.com/products')
			.then(response => {
				console.log(response);

				setIsLoading(false);
				setProductsData({ newproducts: response.data });
			})
			.catch(error => {
				console.log(error);
				alert(error);
			});
	}, [setProductsData]);
	if (isLoading) {
		return (
			<>
				<div></div>
				<h2>Loading...</h2>
			</>
		);
	} else {
		return (
			<>
				<div>
					{productsData.newproducts.map(items => (
						<Link to={`/ProductSubCategoryNew/${items.category}`}>
							<div className="item">
								<div>
									{<img src={items.image} alt="" height="150px" width="100px" />}
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
}
