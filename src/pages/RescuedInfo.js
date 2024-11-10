import React from 'react';
import Button from '../components/Button';



class RescuedInfo extends React.Component {
	render() {
		return (
			<>
				<form id='rescuedInfoMain'>
					<header id='header'>
						<h4>Pet Name</h4>
						<div>
							<Button
								title='Cancel'
								fill='outline'
								href='/adopt'
							/>
						</div>
					</header>

					<section id='basicInfo'>
						<div id='image'>
							<img id='img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuchwx463aPUR7DHmRAVg557aLqKiCFhjuOg&s' alt='shrek' />
						</div>
					</section>
				</form>
			</>
		)
	};
};

export default RescuedInfo;