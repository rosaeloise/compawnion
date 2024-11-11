import React, { useState } from 'react';

const ApplicationForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		address: '',
		resume: null,
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleFileChange = (e) => {
		setFormData({
			...formData,
			resume: e.target.files[0],
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission logic here
		console.log(formData);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>Name:</label>
				<input type="text" name="name" value={formData.name} onChange={handleChange} required />
			</div>
			<div>
				<label>Email:</label>
				<input type="email" name="email" value={formData.email} onChange={handleChange} required />
			</div>
			<div>
				<label>Phone:</label>
				<input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
			</div>
			<div>
				<label>Address:</label>
				<input type="text" name="address" value={formData.address} onChange={handleChange} required />
			</div>
			<div>
				<label>Resume:</label>
				<input type="file" name="resume" onChange={handleFileChange} required />
			</div>
			<button type="submit">Submit</button>
		</form>
	);
};

export default ApplicationForm;