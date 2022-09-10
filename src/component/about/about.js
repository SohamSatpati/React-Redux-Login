import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

export default function About({ match }) {
	console.log(match);
	const history = useHistory();
	const params = useParams();
	//console.log(history);
	console.log(params);
	return (
		<div>
			<h1>About Page</h1>
			<p>Hello, {match.params.myName}</p>
			<p>Say my Name:{params.myName}</p>
			<button onClick={() => history.push('/')}>Back To Home</button>
		</div>
	);
}
