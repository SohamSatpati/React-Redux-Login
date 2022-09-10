import React, { useState, useParams } from 'react';
import { useHistory } from 'react-router-dom';
import { CardGroup, Card, Button, Form, FormControl } from 'react-bootstrap';
import ProductData from '../Product.json';

export default function ProductSubCategory({ match }) {
	console.log(match);
	//const params = useParams();
	const history = useHistory();
	//console.log(params);
	let value = '';

	const [searchItem, setSearchItem] = useState('');
	const [isSearchClicked, setIsSearchClicked] = useState(false);
	let [loadData, setLoadData] = useState([]);
	let allCategories = [];

	let categoryName = match.params.pName;
	let subCatData = ProductData.Product.find(e => e.categoryName === categoryName);
	console.log(subCatData);

	allCategories = [...subCatData.SubCategory];
	console.log(allCategories);

	const handleSearch = e => {
		e.preventDefault();
		value = searchItem.toLowerCase().trim();
		console.log('value clicked=' + value);
		setIsSearchClicked(true);
		setSearchItem('');
		loadData = [];
		companyWiseDataFetch();
	};

	const companyWiseDataFetch = () => {
		subCatData.SubCategory.filter(items => {
			if (items.SubCatDesciption === value) {
				// companyWiseData.push(items);
				loadData.push(items);
			}

			//return items;
		});
		setLoadData(loadData);
	};

	return (
		<>
			<Form className="d-flex">
				<FormControl
					type="search"
					value={searchItem}
					onChange={e => setSearchItem(e.target.value)}
					placeholder="Search"
					className="mr-2"
					aria-label="Search"
				/>
				<Button variant="outline-success" onClick={handleSearch}>
					Search
				</Button>
			</Form>
			<CardGroup>
				{!isSearchClicked &&
					allCategories.map(items => (
						<Card style={{ width: '18rem' }} key={items.SubCatId}>
							<Card.Body>
								<img src={items.image} alt={items.SubCatName} />
								<Card.Title>{items.SubCatName}</Card.Title>
								<Card.Subtitle className="mb-2 text-muted">{items.SubCatDesciption}</Card.Subtitle>
								<Card.Text>{items.price}</Card.Text>
								<button onClick={() => history.push(`/ProductDetails/${categoryName}/${items.SubCatId}`)}>Details</button>
							</Card.Body>
						</Card>
					))}
			</CardGroup>
			{/* when search is clicked */}
			<CardGroup>
				{isSearchClicked &&
					loadData.map(items => (
						<Card style={{ width: '18rem' }} key={items.SubCatId}>
							<Card.Body>
								<img src={items.image} alt={items.SubCatName} />
								<Card.Title>{items.SubCatName}</Card.Title>
								<Card.Subtitle className="mb-2 text-muted">{items.SubCatDesciption}</Card.Subtitle>
								<Card.Text>{items.price}</Card.Text>
								<button onClick={() => history.push(`/ProductDetails/${categoryName}/${items.SubCatId}`)}>Details</button>
							</Card.Body>
						</Card>
					))}
			</CardGroup>
		</>
	);
}
