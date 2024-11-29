import React from 'react';

import Button from '../components/Button';
import FormInput from '../components/FormInput';

import '../css/applicationForm.css';

class ApplicationForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			petID: 0
		};
	}

	componentDidMount() {
		//Get Rescue Animal Information
		const petIDFromURL = window.location.href.split('/').pop();
		if (petIDFromURL) {
			fetch(`https://compawnion-backend.onrender.com/ra/${petIDFromURL}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			})
				.then(res => res.json())
				.then(res => {
				const personal = res.personal;
				const background = res.background;

				this.setState({ petID: petIDFromURL });

				document.getElementById('petID').value = petIDFromURL;
				document.getElementById('name').value = personal.name;
				document.getElementById('type').value = personal.type;
				document.getElementById('breed').value = personal.breed;
				document.getElementById('gender').value = personal.gender;
				document.getElementById('ageYear').value = personal.age.year;
				document.getElementById('ageMonth').value = personal.age.month;

				document.getElementById('rescueDate').value = background.rescueDate;
				document.getElementById('weight').value = background.weight;
				document.getElementById('size').value = background.size;

				const typeElement = document.getElementById('type');
				const breedElement = document.getElementById('breed');
				const breedOptions = {
					cat: [
						{ value: 'siamese', label: 'Siamese' },
						{ value: 'persian', label: 'Persian' },
						{ value: 'ragdoll', label: 'Ragdoll' }
					],
					dog: [
						{ value: 'beagle', label: 'Beagle' },
						{ value: 'bulldog', label: 'Bulldog' },
						{ value: 'poodle', label: 'Poodle' }
					]
				};

				const updateBreedOptions = () => {
					const selectedType = typeElement.value;
					const options = breedOptions[selectedType] || [];
					breedElement.innerHTML = '';
					options.forEach(option => {
						const opt = document.createElement('option');
						opt.value = option.value;
						opt.textContent = option.label;
						breedElement.appendChild(opt);
					});
					breedElement.value = personal.breed;
				};

				typeElement.addEventListener('change', updateBreedOptions);
				updateBreedOptions();
			});
		}

		const submitButton = document.getElementById('submit');
		submitButton.onclick = () => {
			const data = {
				termsAndCondission: '',
				paymentAgreement: '',
				applicationType: '',
				appPetID: '',
				petId: '',
				applicant: {
					name: {
						firstName: '',
						middleName: '',
						lastName: ''
					},
					birthdate: '',
					occupation: '',
					address: {
						country: '',
						province: '',
						cityOrMunicipality: '',
						baranggay: '',
						street: '',
						lot: ''
					},
					contact: {
						email: '',
						phoneNumber: '',
						facebook: ''
					}
				},
				dwelling: {
					type: '',
					ownership: '',
					numberOfHouseMembers: '',
					numberOfPets: '',
					petsAllowedInHouse: '',
					planningToMoveOut: ''
				},
				petCare: {
					petOwnershipExperience: '',
					veterinarian: ''
				}
			};

			data.termsAndCondission = document.getElementById('agreement').checked;
			data.paymentAgreement = document.getElementById('paymentAgreement').checked;
			data.applicationType = document.getElementById('applicationType').value;
			data.appPetID = document.getElementById('appPetID').value;
			data.petId = document.getElementById('petID').value;

			data.applicant.name.firstName = document.getElementById('fistName').value;
			data.applicant.name.middleName = document.getElementById('middleName').value;
			data.applicant.name.lastName = document.getElementById('lastName').value;
			data.applicant.birthdate = document.getElementById('birthdate').value;
			data.applicant.occupation = document.getElementById('occupation').value;
			data.applicant.address.country = document.getElementById('country').value;
			data.applicant.address.province = document.getElementById('province').value;
			data.applicant.address.cityOrMunicipality = document.getElementById('municipality').value;
			data.applicant.address.baranggay = document.getElementById('Barangay').value;
			data.applicant.address.street = document.getElementById('street').value;
			data.applicant.address.lot = document.getElementById('lot').value;
			data.applicant.contact.email = document.getElementById('email').value;
			data.applicant.contact.phoneNumber = document.getElementById('phoneNum').value;
			data.applicant.contact.facebook = document.getElementById('facebook').value;

			data.dwelling.type = document.getElementById('dwellingType').value;
			data.dwelling.ownership = document.getElementById('ownership').value;
			data.dwelling.numberOfHouseMembers = document.getElementById('numberOfHouseMembers').value;
			data.dwelling.numberOfPets = document.getElementById('numberOfPets').value;
			data.dwelling.petsAllowedInHouse = document.getElementById('petsAllowedInHouse').value;
			data.dwelling.planningToMoveOut = document.getElementById('planningToMoveOut').value;

			data.petCare.petOwnershipExperience = document.getElementById('petOwnershipExperience').value;
			data.petCare.veterinarian = document.getElementById('veterinaryClinicName').value;

			fetch('https://compawnion-backend.onrender.com/application', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			}).then(res => res.json())
				.then(response => {
					if (response.message) {
						window.location.href = '/adopt';
					};
				})
				.catch(thisSem => console.log);
		};
	}

	render() {
		return (
			<>
				<div id='applicationInfoMain'>
					<header id='headerForm'>
						<h4>Application Form</h4>
						<div>
							<Button
								title='Cancel'
								fill='outline'
								href={`/rescues/${this.state.petID}`}
							/>
						</div>
					</header>

					<section id='applicationInfo'>
						<h5>Application Form Agreement</h5>
						<p>Application form agreement example here. Do you agree with conditions?</p>
						<div className='formCheckbox'>
							<FormInput
								label='I agree to the terms and conditions'
								type='checkbox'
								id='agreement'
								name='agreement'
							/>
						</div>

						<h5>Adoption Fee Payment Agreement</h5>
						<p>Adoption fee payment agreement example here. Do you agree with conditions?</p>
						<div className='formCheckbox'>
							<FormInput
								label='I agree to the terms and conditions'
								type='checkbox'
								id='paymentAgreement'
								name='paymentAgreement'
							/>
						</div>

						{/* <h5>Compawnion App Agreement</h5>
						<p>Application form agreement example here. Do you agree with conditions?</p>
						<div className='formCheckbox'>
							<FormInput
								label='I agree to the terms and conditions'
								type='checkbox'
								id='compawnionagreement'
								name='compawnionagreement'
							/>
						</div> */}

						<div>
							<FormInput
								label='Application Type'
								type='dropdown'
								id='applicationType'
								name='applicationType'

								options={[
									{
										value: 'Online Application',
										label: 'Online Application'
									},
									{
										value: 'Onsite Application',
										label: 'Onsite Application',
									}
								]}
							/>
							<div>
							</div>
							<FormInput
								label='App Pet ID (For existing Compawnion users only)'
								type='text'
								id='appPetID'
								name='appPetID'
							/>

						</div>

					</section>

					<section id='basicInfo'>
						<h5>Pet Information</h5>
						<div className='petForm'>
							<FormInput
								label='Pet ID'
								type='text'
								id='petID'
								name='petID'
								disabled={true}
							/>
							<FormInput
								label='Type'
								type='text'
								id='type'
								name='type'
								disabled={true}
							/>
							<span>
								<FormInput
									label='Breed'
									type='text'
									id='breed'
									name='breed'
									placeholder='Select breed'
									disabled={true}
								/>
							</span>
						</div>
						<div className='petForm'>
							<FormInput
								label='Name'
								type='text'
								id='name'
								name='name'
								disabled={true}
							/>
							<FormInput
								label='Gender'
								type='text'
								id='gender'
								name='gender'
								disabled={true}
							/>
							<span>
								<FormInput
									label='Age'
									type='number'
									id='ageYear'
									name='ageYear'
									disabled={true}
								/>
								<h6>Yr.</h6>

								<FormInput
									type='number'
									id='ageMonth'
									name='ageMonth'
									disabled={true}
								/>
								<h6>Months</h6>
							</span>
						</div>
						<div className='petForm'>
							<FormInput
								label='Weight'
								type='text'
								id='weight'
								name='weight'
								disabled={true}
							/>
							<FormInput
								label='Size'
								type='text'
								id='size'
								name='size'
								placeholder='Select breed'
								disabled={true}
							/>
							<span>
							<FormInput
									label='Rescue Date'
									type='text'
									id='rescueDate'
									name='rescueDate'
									disabled={true}
								/>
							</span>
						</div>
					</section>

					<section className='backgroundInfo'>
						<h5>Basic Information</h5 >
						<div>
							<FormInput
								label='First Name'
								type='text'
								id='fistName'
								name='firstName'
							/>
							<FormInput
								label='Middle Name'
								type='text'
								id='middleName'
								name='middleName'
							/>
							<FormInput
								label='Last Name'
								type='text'
								id='lastName'
								name='lastName'
							/>
						</div>

						<div>
							<FormInput
								label='Birthdate'
								type='date'
								id='birthdate'
								name='birthdate'
							/>
							<FormInput
								label='Occupation'
								type='text'
								id='occupation'
								name='occupation'
							/>
						</div>

						<h5 > Address Information</h5 >
						<div>
							<FormInput
								label='Country'
								type='dropdown'
								id='country'
								name='country'

								options={[
									{
										value: 'Philippines',
										label: 'Philippines'
									},
								]}
							/>
							<FormInput
								label='Province'
								type='dropdown'
								id='province'
								name='province'
								options={[
									{
										value: 'Rizal',
										label: 'Rizal'
									},
								]}
							/>
							<FormInput
								label='City/Municipality'
								type='dropdown'
								id='municipality'
								name='municipality'
								options={[
									{
										value: 'Rodriguez',
										label: 'Rodriguez',
									},
								]}
							/>
							<FormInput
								label='Barangay'
								type='dropdown'
								id='Barangay'
								name='Barangay'
								options={[
									{
										value: 'San Jose',
										label: 'San Jose',
									},
									{
										value: 'San Rafael',
										label: 'San Rafael',
									},
									{
										value: 'San Isidro',
										label: 'San Isidro',
									},
									{
										value: 'San Juan',
										label: 'San Juan',
									},
									{
										value: 'San Luis',
										label: 'San Luis',
									},
									{
										value: 'San Roque',
										label: 'San Roque',
									}
								]}
							/>
						</div>

						<div>
							<FormInput
								label='Street/Block/Building'
								type='text'
								id='street'
								name='street'
							/>
							<FormInput
								label='Lot/Floor/Unit'
								type='text'
								id='lot'
								name='lot'
							/>
						</div>

						<h5 > Contact Information</h5 >
						<div>
							<FormInput
								label='Email Address'
								type='text'
								id='email'
								name='email'
							/>
							<FormInput
								label='Phone Number'
								type='number'
								id='phoneNum'
								name='phoneNum'
							/>
							<FormInput
								label='Facebook Account (Link)'
								type='text'
								id='facebook'
								name='facebook'
							/>
						</div>
					</section>

					<section className='backgroundInfo'>
						<h5>Dwelling Information</h5 >
						<div>
							<FormInput
								label='Type of Dwelling'
								type='dropdown'
								id='dwellingType'
								name='dwellingType'

								options={[
									{
										value: 'Single-Storey House/Bungalow',
										label: 'Single-Storey House/Bungalow'
									},
									{
										value: 'Apartment',
										label: 'Apartment',
									},
									{
										value: 'Condominium',
										label: 'Condominium',
									},
									{
										value: 'Townhouse',
										label: 'Townhouse',
									},
									{
										value: 'Multi-Storey House',
										label: 'Multi-Storey House',
									},
								]}
							/>
							<FormInput
								label='Ownership'
								type='dropdown'
								id='ownership'
								name='ownership'

								options={[
									{
										value: 'Owned',
										label: 'Owned'
									},
									{
										value: 'Rented',
										label: 'Rented',
									},
									{
										value: 'Living with Relatives',
										label: 'Living with Relatives',
									},
								]}
							/>
							<FormInput
								label='No. of House Members'
								type='number'
								id='numberOfHouseMembers'
								name='numberOfHouseMembers'
							/>
						</div>

						<div>
							<FormInput
								label='No. of Pets in the Household (If any)'
								type='dropdown'
								id='numberOfPets'
								name='numberOfPets'

								options={[
									{
										value: 'None',
										label: 'None'
									},
									{
										value: '1-2',
										label: '1-2',
									},
									{
										value: '3-4',
										label: '3-4',
									},
									{
										value: '5 or more',
										label: '5 or more',
									},
								]}
							/>
							<FormInput
								label='Have you confirmed that you are allowed to have pets in the house?'
								type='dropdown'
								id='planningToMoveOut'
								name='planningToMoveOut'

								options={[
									{
										value: 'Yes',
										label: 'Yes'
									},
									{
										value: 'No',
										label: 'No',
									},
								]}
							/>
							<FormInput
								label='Are you planning to move out in the next 6 months?'
								type='dropdown'
								id='petsAllowedInHouse'
								name='petsAllowedInHouse'

								options={[
									{
										value: 'Yes',
										label: 'Yes'
									},
									{
										value: 'No',
										label: 'No',
									},
								]}
							/>
						</div>
					</section>

					<section className='backgroundInfo'>
						<h5>Pet Care</h5 >
						<div>
							<FormInput
								label='Pet Ownership Experience'
								type='dropdown'
								id='petOwnershipExperience'
								name='petOwnershipExperience'

								options={[
									{
										value: 'First Time/New pet-owner',
										label: 'First Time/New pet-owner'
									},
									{
										value: 'Recent pet-owner (Owned a pet 3 years or less)',
										label: 'Recent pet-owner (Owned a pet 3 years or less)',
									},
									{
										value: 'Experienced (Owned a pet more than 3 years)',
										label: 'Experienced (Owned a pet more than 3 years)',
									},
								]}
							/>
							<FormInput
								label='Input a Veterinarian Clinic for your pet'
								type='textbox'
								id='veterinaryClinicName'
								name='veterinaryClinicName'
							/>
						</div>
					</section>

					<section id='action'>
						<Button
							title='Submit'
							theme='light'
							id='submit'
						/>
					</section>
				</div>
			</>
		);
	}
}

export default ApplicationForm;
