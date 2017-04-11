import React, { Component } from 'react';
import AddRecipe from '../actions/add-recipe';

const Container = function(props) { // Container for recipe list
	console.log(props.recipes)
	const recipeItems = props.recipes.map(function(item, idx) {
		return <li key={idx}> {item} </li>
	})

	return(
		<div className='recipe-container'>
			Hello from recipe container
			<ul className='recipe-list'>
				{recipeItems}
			</ul>
		</div>
	)
}

export default Container