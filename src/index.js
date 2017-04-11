import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Container from './components/container';
import Button from './components/button';
import DetailWindow from './components/detail-window';
import AddRecipe from './actions/add-recipe';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			recipes: []
		}
	}

	addRecipeItem = () => {
		this.state.recipes.push('test');
		console.log(this.state.recipes)
	}

	render() {
		console.log('Hello World')
		
		return (
			<div>
				<Container />
				<Button addRecipeItem={this.addRecipeItem}/>
				<DetailWindow />
				<AddRecipe recipes={this.state.recipes}/>
			</div>
		)
	}

}

ReactDOM.render(<App />, document.querySelector('.container'))