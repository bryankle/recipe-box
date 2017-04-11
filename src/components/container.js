import React, { Component } from 'react';
import { Accordion, Panel } from 'react-bootstrap';
import AddRecipe from '../actions/add-recipe';
import ContainerRecipe from './container-recipe';


class Container extends Component {
	constructor(props) {
		super(props)
	}
	

	render() {
		const recipeItems = this.props.recipes.map(function(item, idx) {
			return <Panel header={item} eventKey={idx}> Content goes here </Panel>
		})
		console.log('Container rendered')
		return(
			<div className='recipe-container'>
				Hello from recipe container
				<Accordion className='recipe-list'>
					{recipeItems}
				</Accordion>
				<ContainerRecipe />
			</div>
		)
	}
}

export default Container
