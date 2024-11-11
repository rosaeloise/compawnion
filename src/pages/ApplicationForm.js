import React from 'react';
import Button from '../components/Button';
import FormInput from '../components/FormInput';
import '../css/applicationForm.css';

class ApplicationForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			vaccinationCount: 1,
			vaccination: [
				{
					name: null,
					date: null,
					expiry: null
				}
			],
			medicalHistoryCount: 1,
			medicalHistory: [
				{
					date: null,
					procedure: null,
					notes: null
				}
			],
			petID: 0
		};
	}

	componentDidMount() {
		const petIDFromURL = window.location.href.split('/').pop();
		if (petIDFromURL) {
			fetch(`http://localhost:3000/ra/${petIDFromURL}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			}).then(res => res.json()).then(res => {
				const personal = res.personal;
				const background = res.background;

				this.setState({ petID: res.petId });

				document.getElementById('petID').value = res.petId;
				document.getElementById('name').value = personal.name;
				document.getElementById('type').value = personal.type;
				document.getElementById('breed').value = personal.breed;
				document.getElementById('gender').value = personal.gender;
				document.getElementById('ageYear').value = personal.age.year;
				document.getElementById('ageMonth').value = personal.age.month;
				document.getElementById('img').style.backgroundImage = `url(${personal.picture})`;

				document.getElementById('personality').value = background.attributes;
				document.getElementById('backgroundStory').value = background.rescueStory;
				document.getElementById('rescueDate').value = background.rescueDate;
				document.getElementById('weight').value = background.weight;
				document.getElementById('size').value = background.size;

				this.setState({
					vaccinationCount: background.vaccination.length,
					vaccination: background.vaccination,
					medicalHistoryCount: background.medicalHistory.length,
					medicalHistory: background.medicalHistory
				});

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
	}

	render() {
		return (
			<>
				<form id='rescuedInfoMain'>
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
						<h6>Application Form Agreement</h6>
						<p>Application form agreement example here. Do you agree with conditions?</p>
						<div className='formCheckbox'>
							<FormInput
								label='I agree to the terms and conditions'
								type='checkbox'
								id='agreement'
								name='agreement'
							/>
						</div>

						<h6>Adoption Fee Payment Agreement</h6>
						<p>Adoption fee payment agreement example here. Do you agree with conditions?</p>
						<div className='formCheckbox'>
							<FormInput
								label='I agree to the terms and conditions'
								type='checkbox'
								id='paymentAgreement'
								name='paymentAgreement'
							/>
						</div>

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
								id='applicationAppId'
								name='applicationAppId'
							/>

						</div>

					</section>

					<section id='basicInfo'>
						<h6>Pet Information</h6>
						<div id='image'>
							<div id='img' />
						</div>
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

					<section id='backgroundInfo'>
						<h6>Background</h6>
						<div>
							<FormInput
								label='Attributes/Personality'
								type='textarea'
								id='personality'
								name='personality'
								disabled={true}
							/>
							<FormInput
								label='Rescue Story'
								type='textarea'
								id='backgroundStory'
								name='backgroundStory'
								disabled={true}
							/>
							<FormInput
								label='Rescue Date'
								type='date'
								id='rescueDate'
								name='rescueDate'
								disabled={true}
							/>
						</div>

						<h6>Medical Information</h6>
						<div>
							<FormInput
								label='Weight'
								type='number'
								id='weight'
								name='weight'
								disabled={true}
							/>
							<h6>Kg</h6>
							<FormInput
								label='Size'
								type='text'
								id='size'
								name='size'
								disabled={true}
							/>
						</div>

						<h6>Vaccination</h6>
						<div id='vaccination'>
							{this.state.vaccination.map((vaccination, index) => (
								<div key={index}>
									<FormInput
										label='Name'
										type='text'
										id='vaccinationName'
										name='vaccinationName'
										placeholder='No Vaccination Available'
										value={vaccination.name}
										disabled={true}
									/>
									<FormInput
										label='Date'
										type='text'
										id='vaccinationDate'
										name='vaccinationDate'
										placeholder='No Available Date'
										value={vaccination.date}
										disabled={true}
									/>
									<FormInput
										label='Expiry'
										type='text'
										id='vaccinationExpiry'
										name='vaccinationExpiry'
										placeholder='No Available Expiry'
										value={vaccination.expiry}
										disabled={true}
									/>
								</div>
							))}
						</div>

						<h6>Medical History</h6>
						<div id='medicalHistory'>
							{this.state.medicalHistory.map((medicalHistory, index) => (
								<div key={index}>
									<FormInput
										label='Procedure'
										type='text'
										id='medicalHistoryProcedure'
										name='medicalHistoryProcedure'
										placeholder='No Available Procedure'
										value={medicalHistory.procedure}
										disabled={true}
									/>
									<FormInput
										label='Date'
										type='text'
										id='medicalHistoryDate'
										name='medicalHistoryDate'
										placeholder='No Available Date'
										value={medicalHistory.date}
										disabled={true}
									/>
									<span>
										<FormInput
											label='Notes'
											type='textarea'
											id='medicalHistoryNotes'
											name='medicalHistoryNotes'
											placeholder='No Available Notes'
											value={medicalHistory.notes}
											disabled={true}
										/>
									</span>
								</div>
							))}
						</div>
					</section>

					<section id='action'>
						<Button
							title='Adopt'
							theme='light'
							href={`/application/${this.state.petID}`}
						/>
					</section>
				</form>
			</>
		);
	}
}

export default ApplicationForm;
