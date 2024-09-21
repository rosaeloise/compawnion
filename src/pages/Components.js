import React from 'react';
import Button from '../components/Button';
import NavigationBar from '../components/NavigationBar';

class Components extends React.Component {
	render() {
		return (
			<div>
				<Button>
					Adopt Now
				</Button>

				<NavigationBar active='home' />

				<h6>h6</h6>
				<h5>h5</h5>
				<h4>h4</h4>
				<h3>h3</h3>
				<h2>h2</h2>
				<h1>h1</h1>
			</div>
		)
	};
};

export default Components;