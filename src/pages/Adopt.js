import React from 'react';

import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import SectionName from '../components/SectionName';
import PetCard from '../components/PetCard';

import '../css/adopt.css';

class Adopt extends React.Component {
	constructor(props) {
		super(props);

	  this.state = {
		  pets: [],
		loaded: false,
	};
  }

	async componentDidMount() {
		const moveHeader = () => {
			try {
				const navigationBar = document.getElementById('navigationBar');
				const header = document.getElementById('header');
				header.style.top = `${navigationBar.clientHeight - 2}px`;
			} catch (error) {
			  // Handle the error if needed
		  }
	  };
	  moveHeader();
	  window.addEventListener('resize', moveHeader);

	  try {
		  const response = await fetch('http://localhost:3000/ra', {
			  method: 'GET',
			  headers: {
				  'Content-Type': 'application/json',
			  },
		  });
		const res = await response.json();

		const pets = res.map((item) => ({
			image: item.personal.picture,
			name: item.personal.name,
			description: item.background.rescueStory,
			href: '/rescues/' + item.petId,
			rfid: item.rfidTag,
			petId: item.id,
		}));

		console.log(pets);

		this.setState({
			pets: pets,
		  loaded: true,
	  });
		moveHeader();
		} catch (error) {
			console.error('Error fetching pets:', error);
		}
	}

	render() {
	  const { pets, loaded } = this.state;

	  if (!loaded) {
		  return (
			  <>
			  <NavigationBar active="adopt" />
			  <main id="loading">
				  <h2>Loading...</h2>
			  </main>
			  <Footer active="adopt" />
		  </>
		  );
	  }

	  return (
		  <>
			<NavigationBar active="adopt" />

			<header id="header">
				<div></div>
				<div>
					<SectionName underline="true">Meet Our Rescues!</SectionName>
				</div>
				<div>
					<div id="searchBar">
						<svg viewBox="0 0 15 14" id="searchIcon">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M14.2076 11.8605C14.6452 11.2109 14.4733 10.3296 13.8238 9.89208L9.26262 6.81942L7.66418 9.16228L12.2392 12.2443C12.8887 12.6818 13.77 12.51 14.2076 11.8605V11.8605Z"
								fill="var(--primary-complement)"
							/>
							<circle
								cx="5.5"
								cy="5.5"
								r="4.5"
								stroke="var(--primary-complement)"
								strokeWidth="2"
								fill="transparent"
							/>
						</svg>

						<input id="searchInput" type="text" placeholder="Search for a pet..." />

						<label htmlFor="filterToggle" id="filterIcon">
							<svg viewBox="0 0 19 16">
								<path
									d="M0 3.25C0 2.55964 0.531662 2 1.1875 2H17.8125C18.4683 2 19 2.55964 19 3.25C19 3.94036 18.4683 4.5 17.8125 4.5H1.1875C0.531662 4.5 0 3.94036 0 3.25Z"
									fill="var(--primary-complement)"
								/>
								<path
									d="M0 8.25C0 7.55964 0.531662 7 1.1875 7H17.8125C18.4683 7 19 7.55964 19 8.25C19 8.94036 18.4683 9.5 17.8125 9.5H1.1875C0.531662 9.5 0 8.94036 0 8.25Z"
									fill="var(--primary-complement)"
								/>
								<path
									d="M0 13.25C0 12.5596 0.531662 12 1.1875 12H17.8125C18.4683 12 19 12.5596 19 13.25C19 13.9404 18.4683 14.5 17.8125 14.5H1.1875C0.531662 14.5 0 13.9404 0 13.25Z"
									fill="var(--primary-complement)"
								/>
								<path
									d="M15.675 3C15.675 4.65685 14.399 6 12.825 6C11.251 6 9.975 4.65685 9.975 3C9.975 1.34315 11.251 0 12.825 0C14.399 0 15.675 1.34315 15.675 3Z"
									fill="var(--primary-complement)"
								/>
								<path
									d="M9.025 8C9.025 9.65685 7.74901 11 6.175 11C4.60099 11 3.325 9.65685 3.325 8C3.325 6.34315 4.60099 5 6.175 5C7.74901 5 9.025 6.34315 9.025 8Z"
									fill="var(--primary-complement)"
								/>
								<path
									d="M15.675 13C15.675 14.6569 14.399 16 12.825 16C11.251 16 9.975 14.6569 9.975 13C9.975 11.3431 11.251 10 12.825 10C14.399 10 15.675 11.3431 15.675 13Z"
									fill="var(--primary-complement)"
								/>
							</svg>
						</label>
					</div>

					<input type="checkbox" id="filterToggle" />
				</div>
			</header>

			<section id="rescuesPanel">
				<main id="rescuesGrid">
					{pets.map((pet) => (
						<PetCard
					key={pet.petId}
					image={pet.image}
					name={pet.name}
					description={pet.description}
					href={pet.href}
					dark="true"
				/>
			))}
				</main>
			</section>

			<svg id="pawBackground" viewBox="0 0 853 971">
				<path
					d="M6.27144 638.366C-15.4121 717.624 24.6163 823.403 76.4887 835.527C182.465 887.8 218.971 796.909 301.994 819.623C385.018 842.337 339.999 907.619 471.243 966.804C526.93 987.78 676.163 912.692 699.339 827.977C751.699 636.591 665.319 356.961 473.934 304.602C282.549 252.242 58.631 446.981 6.27144 638.366Z"
					fill="var(--primary-color)"
				/>
				{/* Other SVG paths */}
			</svg>

			<Footer active="adopt" />
		</>
		);
	}
}

export default Adopt;
