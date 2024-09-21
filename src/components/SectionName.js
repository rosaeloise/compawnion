import React from 'react';

class SectionName extends React.Component {
	render() {
		return (
			<h2
				className='sectionName'
			>
				{this.props.children}
			</h2>
		)
	};
};

export default SectionName;