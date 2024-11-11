import React from 'react';

import Button from '../components/Button';
import FormInput from '../components/FormInput';

import '../css/rescuedInfo.css';

class RescuedInfo extends React.Component {
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
	};

	componentDidMount() {
		// Get pet ID from URL
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

				document.getElementById('petID').value = res.petId;
				document.getElementById('name').value = personal.name;
				document.getElementById('type').value = personal.type;
				document.getElementById('breed').value = personal.breed;
				document.getElementById('ageYear').value = personal.age.year;
				document.getElementById('ageMonth').value = personal.age.month;
				document.getElementById('img').style.backgroundImage = `url(${personal.picture})`;

				document.getElementById('personality').value = background.attributes;
				document.getElementById('backgroundStory').value = background.rescueStory;
				document.getElementById('rescueDate').value = background.rescueDate;
				document.getElementById('weight').value = background.weight;
				document.getElementById('size').value = background.size;

				const vaccination = background.vaccination;
				this.setState({
					vaccinationCount: vaccination.length,
					vaccination: vaccination
				});

				const medicalHistory = background.medicalHistory;
				this.setState({
					medicalHistoryCount: medicalHistory.length,
					medicalHistory: medicalHistory
				});

				document.getElementById('rfidTag').value = res.rfidTag;

				// Update breed options based on type
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
		};
	};
	render() {
		return (
			<>
				<form id='rescuedInfoMain'>
					<header id='header'>
						<h4>Rescued Pet Infotmation</h4>
						<div>
							<Button
								title='Back'
								theme='dark'
								href='/adopt'
							/>
						</div>
					</header>

					<section id='basicInfo'>
						<div id='image'>
							<div id='img' />
						</div>

						<div>
							<FormInput
								label='Name'
								type='text'
								id='name'
								name='name'
								placeholder='Enter pet name'
							/>
							<FormInput
								label='Type'
								type='dropdown'
								id='type'
								name='type'
								placeholder='Select type'

								options={[
									{
										value: 'cat',
										label: 'Cat'
									},
									{
										value: 'dog',
										label: 'Dog'
									}
								]}
							/>
							<span>
								<FormInput
									label='Age'
									type='number'
									id='ageYear'
									name='ageYear'
								/>
								<h6>Yr.</h6>

								<FormInput
									type='number'
									id='ageMonth'
									name='ageMonth'
								/>
								<h6>Months</h6>
							</span>
						</div>
						<div>
							<FormInput
								label='Pet ID'
								type='text'
								id='petID'
								name='petID'
								disabled={true}
							/>
							<FormInput
								label='Breed'
								type='dropdown'
								id='breed'
								name='breed'
								placeholder='Select breed'

								options={(() => {
									const cats = [
										{
											value: 'siamese',
											label: 'Siamese'
										},
										{
											value: 'persian',
											label: 'Persian'
										},
										{
											value: 'ragdoll',
											label: 'Ragdoll'
										}
									];
									const dogs = [
										{
											value: 'beagle',
											label: 'Beagle'
										},
										{
											value: 'bulldog',
											label: 'Bulldog'
										},
										{
											value: 'poodle',
											label: 'Poodle'
										}
									];

									const type = document.getElementById('type');
									if (!type) return [];

									type.addEventListener('change', () => {
										const breed = document.getElementById('breed');
										breed.value = '';

										const options = breed.querySelectorAll('option');
										for (const option of options) {
											option.remove();
										};

										const cats = [
											{
												value: 'siamese',
												label: 'Siamese'
											},
											{
												value: 'persian',
												label: 'Persian'
											},
											{
												value: 'ragdoll',
												label: 'Ragdoll'
											}
										];
										const dogs = [
											{
												value: 'beagle',
												label: 'Beagle'
											},
											{
												value: 'bulldog',
												label: 'Bulldog'
											},
											{
												value: 'poodle',
												label: 'Poodle'
											}
										];

										const type = document.getElementById('type');
										if (!type) return [];
										if (type.value === 'cat') {
											for (const cat of cats) {
												const option = document.createElement('option');
												option.value = cat.value;
												option.innerHTML = cat.label;
												breed.appendChild(option);
											};
										};
										if (type.value === 'dog') {
											for (const dog of dogs) {
												const option = document.createElement('option');
												option.value = dog.value;
												option.innerHTML = dog.label;
												breed.appendChild(option);
											};
										};
									});

									if (type.value === 'cat') return cats;
									if (type.value === 'dog') return dogs;
									return [];
								})()}
							/>
							<FormInput
								label='Gender'
								type='dropdown'
								id='gender'
								name='gender'
								placeholder='Select gender'

								options={[
									{
										value: 'male',
										label: 'Male'
									},
									{
										value: 'female',
										label: 'Female'
									}
								]}
							/>
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
								placeholder='Enter attributes or description'
							/>
							<FormInput
								label='Rescue Story'
								type='textarea'
								id='backgroundStory'
								name='backgroundStory'
								placeholder='Enter rescue story'
							/>
							<FormInput
								label='Rescue Date'
								type='date'
								id='rescueDate'
								name='rescueDate'
							/>
						</div>

						<h6>Medical Information</h6>
						<div>
							<FormInput
								label='Weight'
								type='number'
								id='weight'
								name='weight'
							/>
							<h6>Kg</h6>
							<FormInput
								label='Size'
								type='dropdown'
								id='size'
								name='size'

								options={[
									{
										value: 'small',
										label: 'Small'
									},
									{
										value: 'medium',
										label: 'Medium'
									},
									{
										value: 'large',
										label: 'Large'
									}
								]}
							/>
						</div>

						<h6>Vaccination</h6>
						<div id='vaccination'>
							{this.state.vaccination.map((vaccination, index) => {
								return (
									<div key={index}>
										<FormInput
											label='Name'
											type='dropdown'
											id='vaccinationName'
											name='vaccinationName'
											placeholder='Enter vaccination name'
											value={vaccination.name}

											options={[
												{
													value: '',
													label: ''
												},
												{
													value: 'antiRabies',
													label: 'Anti-Rabies'
												},
												{
													value: 'da2ppVaccine',
													label: 'DA2PP'
												},
												{
													value: 'leptospiraVaccine',
													label: 'Leptospira Vaccine  (Leptospirosis)'
												}
											]}
										/>
										<FormInput
											label='Date'
											type='date'
											id='vaccinationDate'
											name='vaccinationDate'
											placeholder='Enter vaccination date'
											value={vaccination.date}
										/>
										<FormInput
											label='Expiry'
											type='date'
											id='vaccinationExpiry'
											name='vaccinationExpiry'
											placeholder='Enter vaccination expiry'
											value={vaccination.expiry}
										/>

										{this.state.vaccinationCount > 1 && (
											<Button
												title='-'
												theme='dark'

												onClick={() => {
													this.setState({
														vaccinationCount: this.state.vaccinationCount - 1,
														vaccination: this.state.vaccination.filter((_, i) => i !== index)
													});
												}}
											/>
										)}
									</div>
								);
							})}
							<Button
								title='Add Vaccination'

								onClick={() => {
									this.setState({
										vaccinationCount: this.state.vaccinationCount + 1,
										vaccination: this.state.vaccination.concat([
											{
												name: null,
												date: null,
												expiry: null
											}
										])
									});
								}}
							/>
						</div>

						<h6>Medical History</h6>
						<div id='medicalHistory'>
							{this.state.medicalHistory.map((medicalHistory, index) => {
								return (
									<div key={index}>
										<FormInput
											label='Procedure'
											type='text'
											id='medicalHistoryProcedure'
											name='medicalHistoryProcedure'
											placeholder='Enter procedure'
											value={medicalHistory.procedure}
										/>
										<FormInput
											label='Date'
											type='date'
											id='medicalHistoryDate'
											name='medicalHistoryDate'
											placeholder='Enter date'
											value={medicalHistory.date}
										/>
										<span>
											<FormInput
												label='Notes'
												type='textarea'
												id='medicalHistoryNotes'
												name='medicalHistoryNotes'
												placeholder='Enter notes'
												value={medicalHistory.notes}
											/>

											{this.state.medicalHistoryCount > 1 && (
												<Button
													title='-'
													theme='dark'

													onClick={() => {
														this.setState({
															medicalHistoryCount: this.state.medicalHistoryCount - 1,
															medicalHistory: this.state.medicalHistory.filter((_, i) => i !== index)
														});
													}}
												/>
											)}
										</span>
									</div>
								);
							})}
							<Button
								title='Add Medical History'

								onClick={() => {
									this.setState({
										medicalHistoryCount: this.state.medicalHistoryCount + 1,
										medicalHistory: this.state.medicalHistory.concat([
											{
												date: null,
												procedure: null,
												vet: null,
												notes: null
											}
										])
									});
								}}
							/>
						</div>
					</section>

					<section id='rfid'>
						<h6>RFID</h6>
						<div>
							<FormInput
								label='Radio-frequency Identification Tag'
								type='password'
								id='rfidTag'
								name='rfidTag'
								placeholder='Enter RFID'
								disabled={true}

								onEnter={() => {
									const rfidTag = document.getElementById('rfidTag');
									rfidTag.disabled = true;
								}}
							/>
							<Button
								title='Scan RFID'

								onClick={() => {
									const rfidTag = document.getElementById('rfidTag');
									rfidTag.disabled = false;
									console.log(rfidTag);

									rfidTag.focus();
									console.log('Scanning RFID...');

								}}
							/>
						</div>
					</section>
				</form>
			</>
		)
	};
};

export default RescuedInfo;