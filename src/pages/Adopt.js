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
		  const response = await fetch('https://compawnion-backend.onrender.com/ra', {
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
				  <path d='M893.103 639.366C914.786 718.624 874.758 824.403 822.885 836.527C716.909 888.8 680.404 797.909 597.38 820.623C514.356 843.337 559.375 908.619 428.131 967.804C372.444 988.78 223.212 913.692 200.035 828.977C147.675 637.591 234.055 357.961 425.44 305.602C616.825 253.242 840.743 447.981 893.103 639.366Z' fill='var(--primary-color)' />
				  <path d='M212.248 300.347C245.283 357.083 233.558 418.318 203.437 435.856C167.714 456.656 105.466 439.196 72.4316 382.459C39.3968 325.722 37.5602 236.19 73.2832 215.39C115.617 218.762 179.214 243.61 212.248 300.347Z' fill='var(--primary-color)' />
				  <path d='M377.297 130.53C401.745 191.461 407.77 254.64 369.406 270.034C331.041 285.427 280.122 248.512 255.673 187.581C231.225 126.649 249.609 88.8832 287.973 73.4896C326.337 58.0961 352.848 69.5992 377.297 130.53Z' fill='var(--primary-color)' />
				  <path d='M610.869 122.03C609.38 187.666 574.672 240.115 533.345 239.177C492.018 238.24 468.553 203.425 470.042 137.789C470.661 110.499 488.162 88.2832 496.571 64.5729C508.386 31.2571 514.593 0.939698 538.737 1.48738C580.063 2.42485 612.358 56.3935 610.869 122.03Z' fill='var(--primary-color)' />
				  <path d='M807.779 219.876C804.353 250.847 793.517 265.429 772.199 286.781C756.03 308.602 741.901 332.19 720.315 329.802C679.228 325.257 651.773 268.673 658.991 203.418C666.209 138.163 705.368 88.9472 746.455 93.492C787.541 98.0369 814.997 154.621 807.779 219.876Z' fill='var(--primary-color)' />
			</svg>

			<Footer active="adopt" />
		</>
		);
	}
}

export default Adopt;
