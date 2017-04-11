import React, { Component } from 'react';
import { Button } from 'react-bootstrap';


const ButtonAddRecipeMain = function({addRecipeItem}) {

	return(
		<Button onClick={addRecipeItem}>Add Recipe</Button>
	)
}

export default ButtonAddRecipeMain;