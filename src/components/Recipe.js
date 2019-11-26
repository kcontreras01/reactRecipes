import React from 'react';
import Box from '@material-ui/core/Box';

const Recipe = ({title, calories, image, ingredients}) => {
	return (
			<Box m={1}>
				<h1>{title}</h1>
				<ol>
					{ingredients.map(i => (
						<li>{i.text}</li>
						))}
				</ol>
				<p>{calories}</p>
				<img src={image} alt="recipe"/>
			</Box>
		)
}

export default Recipe;