import React, { Component } from 'react';

const Button = function({addRecipeItem}) {

	return(
		<button onClick={addRecipeItem}>
			Add Recipe
		</button>
	)
}

export default Button;