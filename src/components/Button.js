import React from 'react';

class Button extends React.Component {

	render() {
		if (this.props.href) {
			return (
				<a
					className='button'

					href={this.props.href}
					title={this.props.title}
				>
					<h5>{this.props.children || this.props.title}</h5>
				</a>
			)
		};
		return (
			<button
				className='button'
			>
				<h5>{this.props.children}</h5>
			</button>
		)
	};
};

export default Button;