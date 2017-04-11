import React, { Component } from 'react';
import AddRecipe from '../actions/add-recipe';

class Container extends Component {
	constructor(props) {
		super(props)
	}
	

	render() {
		const recipeItems = this.props.recipes.map(function(item, idx) {
			return <li key={idx}> {item} </li>
		})
		console.log('Container rendered')
		return(
			<div className='recipe-container'>
				Hello from recipe container
				<ul className='recipe-list'>
					{recipeItems}
				</ul>
			</div>
		)
	}
}

export default Container
