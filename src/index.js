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
			recipes: ['Recipe 1', 'Recipe 2', 'Recipe 3']
		}
	}

	addRecipeItem = () => {
		let tempArr = this.state.recipes.slice();
		tempArr.push('test');
		this.setState({
			recipes: tempArr
		})
		console.log(tempArr)
	}

	render() {
		console.log('Index rendered')
		
		return (
			<div>
				<Container recipes={this.state.recipes}/>
				<Button addRecipeItem={this.addRecipeItem}/>
				<DetailWindow />
				<AddRecipe/>
			</div>
		)
	}

}

ReactDOM.render(<App />, document.querySelector('.container'))

