import React from 'react';

class Button extends React.Component {
	render() {
		if (this.props.href) {
			return (
				<a
					className={`button ${this.props.fill === 'outline' ? 'outlined' : 'filled'}`}

					href={this.props.href}
					title={this.props.title}

					id={this.props.id}
				>
					{
						this.props.size === 'small' ?
							<h6>{this.props.children || this.props.title}</h6> :
							<h5>{this.props.children || this.props.title}</h5>
					}
				</a>
			)
		};
		return (
			<button
				className={`button ${this.props.fill === 'outline' ? 'outline' : 'fill'}`}

				id={this.props.id}
				onClick={this.props.onClick}
			>
				{
					this.props.size === 'small' ?
						<h6>{this.props.children || this.props.title}</h6> :
						<h5>{this.props.children || this.props.title}</h5>
				}
			</button>
		)
	};
};

export default Button;