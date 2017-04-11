import React, { Component } from 'react';

const Container = function() {
	return(
		<div className='recipe-container'>
			Hello from recipe container
			<ul className='recipe-list'>
				<li>Recipe Item 1</li>
				<li>Recipe Item 2</li>
				<li>Recipe Item 3</li>
			</ul>
		</div>
	)
}

export default Container