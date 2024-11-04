import React from 'react';

import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import SectionName from '../components/SectionName';
import PetCard from '../components/PetCard';

import HomepageHero from '../assets/Homepage Hero.png';

import '../css/home.css';

class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			pets: [],
			loaded: false,
		};
	}

	async componentDidMount() {
		try {
			const response = await fetch('http://localhost:3000/ra', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const res = await response.json();

			const shuffledPets = res.sort(() => 0.5 - Math.random());
			const pets = shuffledPets.slice(0, 5).map((item) => ({
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
		} catch (error) {
			console.error('Error fetching pets:', error);
		};

		const hero = document.getElementById('hero');
		const navigationBar = document.getElementById('navigationBar');

		const changeHeroHeight = () => {
			hero.style.minHeight = `calc(100vh - ${navigationBar.clientHeight}px - 16rem)`;
		};

		window.addEventListener('resize', changeHeroHeight);
		changeHeroHeight();
	}

	render() {
		return (
			<>
				<NavigationBar active='home' />
				<main id='hero'>
					<div>
						<h1>
							<span style={{
								color: 'var(--primary-color)'
							}}>Fur-ever</span> homes for the best companions.</h1>
						<Button href='adopt' title='adopt'>Adopt Now!</Button>
					</div>
					<img src={HomepageHero} alt='Homepage Hero' />
				</main>



				<section id='aboutUs'>
					<SectionName underline='true'>About Us</SectionName>
					<div>
						<h2>We are BARKCODE</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae venenatis elit. Mauris eu porta diam. Cras congue tempus tempor. Donec aliquet turpis ac arcu efficitur, ut dictum sem rhoncus. Nunc velit turpis, tincidunt eu posuere vel, blandit id magna. Maecenas vulputate molestie eros, nec pulvinar justo eleifend vel. Vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae venenatis elit. Mauris eu porta diam. Cras congue tempus tempor. Donec aliquet turpis ac arcu efficitur, ut dictum sem rhoncus. Nunc velit turpis, tincidunt eu posuere vel, blandit id magna. Maecenas vulputate molestie eros, nec pulvinar justo eleifend vel. Vestibulum.</p>
					</div>
					<svg viewBox='0 0 945 1017'>
						<path d='M893.103 639.366C914.786 718.624 874.758 824.403 822.885 836.527C716.909 888.8 680.404 797.909 597.38 820.623C514.356 843.337 559.375 908.619 428.131 967.804C372.444 988.78 223.212 913.692 200.035 828.977C147.675 637.591 234.055 357.961 425.44 305.602C616.825 253.242 840.743 447.981 893.103 639.366Z' fill='var(--primary-color)' />
						<path d='M212.248 300.347C245.283 357.083 233.558 418.318 203.437 435.856C167.714 456.656 105.466 439.196 72.4316 382.459C39.3968 325.722 37.5602 236.19 73.2832 215.39C115.617 218.762 179.214 243.61 212.248 300.347Z' fill='var(--primary-color)' />
						<path d='M377.297 130.53C401.745 191.461 407.77 254.64 369.406 270.034C331.041 285.427 280.122 248.512 255.673 187.581C231.225 126.649 249.609 88.8832 287.973 73.4896C326.337 58.0961 352.848 69.5992 377.297 130.53Z' fill='var(--primary-color)' />
						<path d='M610.869 122.03C609.38 187.666 574.672 240.115 533.345 239.177C492.018 238.24 468.553 203.425 470.042 137.789C470.661 110.499 488.162 88.2832 496.571 64.5729C508.386 31.2571 514.593 0.939698 538.737 1.48738C580.063 2.42485 612.358 56.3935 610.869 122.03Z' fill='var(--primary-color)' />
						<path d='M807.779 219.876C804.353 250.847 793.517 265.429 772.199 286.781C756.03 308.602 741.901 332.19 720.315 329.802C679.228 325.257 651.773 268.673 658.991 203.418C666.209 138.163 705.368 88.9472 746.455 93.492C787.541 98.0369 814.997 154.621 807.779 219.876Z' fill='var(--primary-color)' />
					</svg>
				</section>



				<section id='compawnion'>
					<SectionName>Introducing<br />The <span style={{
						color: 'var(--primary-color)'
					}}>Compawnion App</span></SectionName>
					<div>
						<div id='features'>
							<div className='featureCard'>
								<svg viewBox='0 0 201 200'>
									<path d='M58.8337 66.6666H42.167V83.3333H58.8337V66.6666Z' fill='var(--primary-complement)' />
									<path d='M92.1667 66.6666H75.5V83.3333H92.1667V66.6666Z' fill='var(--primary-complement)' />
									<path d='M125.5 66.6666H108.833V83.3333H125.5V66.6666Z' fill='var(--primary-complement)' />
									<path d='M158.834 66.6666H142.167V83.3333H158.834V66.6666Z' fill='var(--primary-complement)' />
									<path d='M58.8337 91.6666H42.167V108.333H58.8337V91.6666Z' fill='var(--primary-complement)' />
									<path d='M92.1667 91.6666H75.5V108.333H92.1667V91.6666Z' fill='var(--primary-complement)' />
									<path d='M125.5 91.6666H108.833V108.333H125.5V91.6666Z' fill='var(--primary-color' />
									<path d='M158.834 91.6666H142.167V108.333H158.834V91.6666Z' fill='var(--primary-complement)' />
									<path d='M58.8337 116.667H42.167V133.333H58.8337V116.667Z' fill='var(--primary-complement)' />
									<path d='M92.1667 116.667H75.5V133.333H92.1667V116.667Z' fill='var(--primary-color' />
									<path d='M125.5 116.667H108.833V133.333H125.5V116.667Z' fill='var(--primary-complement)' />
									<path d='M158.834 116.667H142.167V133.333H158.834V116.667Z' fill='var(--primary-complement)' />
									<path d='M58.8337 141.667H42.167V158.333H58.8337V141.667Z' fill='var(--primary-complement)' />
									<path d='M92.1667 141.667H75.5V158.333H92.1667V141.667Z' fill='var(--primary-complement)' />
									<path d='M125.5 141.667H108.833V158.333H125.5V141.667Z' fill='var(--primary-complement)' />
									<path d='M167.166 8.33337H133.833V33.3334H117.166V28.0834C117.166 25.0555 115.964 22.1516 113.822 20.0106C111.681 17.8695 108.778 16.6667 105.75 16.6667H95.2497C92.2218 16.6667 89.3179 17.8695 87.1769 20.0106C85.0358 22.1516 83.833 25.0555 83.833 28.0834V33.3334H67.1663V8.33337H33.833C27.2026 8.33337 20.8437 10.9673 16.1553 15.6557C11.4669 20.3441 8.83301 26.703 8.83301 33.3334V166.667C8.83301 173.297 11.4669 179.656 16.1553 184.344C20.8437 189.033 27.2026 191.667 33.833 191.667H167.166C173.797 191.667 180.156 189.033 184.844 184.344C189.532 179.656 192.166 173.297 192.166 166.667V33.3334C192.166 26.703 189.532 20.3441 184.844 15.6557C180.156 10.9673 173.797 8.33337 167.166 8.33337ZM175.5 166.667C175.5 168.877 174.622 170.996 173.059 172.559C171.496 174.122 169.376 175 167.166 175H33.833C31.6229 175 29.5033 174.122 27.9405 172.559C26.3776 170.996 25.4997 168.877 25.4997 166.667V33.3334C25.4997 31.1232 26.3776 29.0036 27.9405 27.4408C29.5033 25.878 31.6229 25 33.833 25H50.4997V50H150.5V25H167.166C169.376 25 171.496 25.878 173.059 27.4408C174.622 29.0036 175.5 31.1232 175.5 33.3334V166.667Z' fill='var(--primary-complement)' />
								</svg>
								<h5>Schedule Notifications</h5>
							</div>

							<div className='featureCard'>
								<svg width='200' height='200' viewBox='0 0 200 200' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<g clipPath='url(#clip0_61_182)'>
										<path d='M93.1641 0.234375C69.6484 2.69531 49.4531 14.0234 35.6641 32.5391L32.7734 36.4453L37.5 39.4922C40.1172 41.2109 42.3828 42.5781 42.5391 42.5781C42.7344 42.5781 43.9844 41.0547 45.3516 39.1797C51.4844 30.7031 60.7031 23.2031 70.8984 18.3203C99.8438 4.41406 135.234 13.1641 154.453 38.9453C155.938 40.9375 157.305 42.5781 157.5 42.5781C157.656 42.5781 159.922 41.2109 162.5 39.5312L167.227 36.4844L164.219 32.4609C151.602 15.5469 133.359 4.45312 112.5 0.976562C108.945 0.390625 96.4062 -0.117188 93.1641 0.234375Z' fill='var(--primary-complement)' />
										<path d='M94.5312 27.5781C82.7343 29.0625 71.9531 34.0625 63.7109 41.9922C60.1953 45.3906 55.6249 51.1328 56.1328 51.5234C57.1874 52.3828 65.1562 57.4219 65.4687 57.4219C65.664 57.4219 66.7968 56.1719 67.9296 54.6484C73.1249 47.8516 81.4062 42.5391 90.4296 40.1953C95.5078 38.9062 104.531 38.9062 109.531 40.1953C118.633 42.5781 126.328 47.4609 131.758 54.2969C133.047 55.8984 134.219 57.3047 134.414 57.3438C134.609 57.4219 136.875 56.1328 139.453 54.4531L144.141 51.4453L143.516 50.4297C141.914 47.9688 138.828 44.375 135.898 41.6406C128.828 35 119.609 30.2344 110.156 28.3203C107.266 27.7344 97.1484 27.2656 94.5312 27.5781Z' fill='var(--primary-complement)' />
										<path d='M94.2187 55.4688C89.9609 56.6016 86.914 58.3594 83.4765 61.7578C78.5156 66.6797 76.25 72.5781 76.6406 79.6094C77.2265 89.8047 84.375 98.4375 94.3359 100.977C97.3047 101.719 102.695 101.719 105.664 100.977C115.586 98.4766 122.773 89.8047 123.359 79.6094C123.594 75.1953 122.969 72.0703 121.016 67.9688C119.062 63.9062 114.844 59.4922 111.055 57.5C105.898 54.8047 99.6875 54.0625 94.2187 55.4688ZM104.023 67.1875C110 69.4141 113.125 76.0156 111.133 82.0703C110.195 84.8828 106.836 88.2812 104.141 89.1797C99.5703 90.7422 95.1172 89.7266 91.7578 86.3672C89.0234 83.5938 88.0859 81.1719 88.3594 77.3438C88.9453 69.5312 96.7578 64.4531 104.023 67.1875Z' fill='var(--primary-complement)' />
										<path d='M22.0703 77.7344C18.8281 78.2422 16.7578 78.9062 13.6718 80.5078C6.83589 84.0234 2.18745 90.2344 0.624952 97.7734C-0.273485 102.07 -0.312548 175.664 0.58589 179.883C2.53901 189.258 10.7421 197.461 20.1171 199.414C24.2187 200.273 175.781 200.273 179.883 199.414C187.07 197.93 193.984 192.539 197.227 185.938C200.117 180 200.039 181.719 199.922 137.578L199.805 98.2422L198.75 95.0781C195.937 86.8359 189.609 80.8203 181.055 78.2812C178.984 77.6953 176.406 77.5781 158.125 77.4609L137.5 77.3047V83.1641V89.0234L157.539 89.1406L177.539 89.2578L180.078 90.4688C183.125 91.9141 185.586 94.3359 187.031 97.2656L188.086 99.4141V138.672V177.93L186.797 180.547C185.312 183.555 183.203 185.625 180.117 187.07L177.93 188.086H100H22.0703L19.9218 187.07C16.7187 185.547 14.6484 183.555 13.2031 180.547L11.914 177.93V138.672V99.4141L13.0078 97.1875C14.4531 94.2578 16.8359 91.9531 19.9218 90.4688L22.4609 89.2578L42.5 89.1406L62.5 89.0234V83.1641V77.3438L43.2812 77.3828C32.6953 77.4219 23.164 77.5781 22.0703 77.7344Z' fill='var(--primary-complement)' />
										<path d='M30.4688 141.016V168.359H36.3281H42.1875V158.008V147.656H44.4531H46.7188L50.0391 157.891L53.3594 168.164L59.5312 168.281C64.4141 168.359 65.6641 168.281 65.5469 167.891C65.4688 167.617 63.75 162.266 61.7578 156.016L58.0859 144.688L60.0391 142.734C65.625 137.148 66.7969 129.492 63.0859 122.695C60.8203 118.594 55.7422 115 50.8203 114.062C49.6484 113.867 44.6094 113.672 39.6094 113.672H30.4688V141.016ZM50.2734 126.172C54.4922 128.047 54.4922 133.203 50.3125 135.391C49.6484 135.742 48.0078 135.938 45.7031 135.938H42.1875V130.664V125.391H45.4297C47.7344 125.391 49.1016 125.625 50.2734 126.172Z' fill='var(--primary-complement)' />
										<path d='M76.1719 141.016V168.359H82.0312H87.8906V157.422V146.484H92.9688H98.0469V140.625V134.766H92.9688H87.8906V130.078V125.391H95.5078H103.125V119.531V113.672H89.6484H76.1719V141.016Z' fill='var(--primary-complement)' />
										<path d='M112.891 141.016V168.359H118.75H124.609V141.016V113.672H118.75H112.891V141.016Z' fill='var(--primary-complement)' />
										<path d='M134.766 141.016V168.438L144.453 168.281C153.672 168.125 154.219 168.086 156.719 167.109C162.344 164.961 166.758 160.898 169.453 155.352C171.484 151.211 172.266 148.047 172.539 142.93C173.281 129.18 167.422 118.672 156.875 114.883C154.258 113.945 153.594 113.906 144.453 113.75L134.766 113.594V141.016ZM154.141 126.523C156.094 127.539 156.641 128.008 157.93 129.727C159.609 131.953 160.586 135.273 160.82 139.648C161.406 150.156 156.719 156.641 148.555 156.641H146.484V140.977V125.273L149.531 125.508C151.562 125.625 153.125 125.977 154.141 126.523Z' fill='var(--primary-complement)' />
									</g>
									<defs>
										<clipPath id='clip0_61_182'>
											<rect width='200' height='200' />
										</clipPath>
									</defs>
								</svg>
								<h5>RFID Pet Identification</h5>
							</div>

							<div className='featureCard'>
								<svg viewBox='0 0 200 200'>
									<path d='M139.465 13H65.9646C65.9646 13 58.9047 13.4796 55.4646 16C52.0571 18.4965 49.4646 25 49.4646 25V175.5C49.4646 175.5 51.5493 180.585 53.9646 183C56.3799 185.415 61.4646 187.5 61.4646 187.5H140.465C140.465 187.5 145.699 185.557 147.965 183C150.108 180.581 151.465 175.5 151.465 175.5V25C151.465 25 149.759 19.8993 147.465 17.5C144.987 14.9091 139.465 13 139.465 13Z' stroke='var(--primary-complement)' strokeWidth='8' fill='none' />
									<circle cx='100.465' cy='167.5' r='9' fill='var(--primary-complement)' />
									<rect x='94.4646' y='23.5' width='27' height='10' rx='5' fill='var(--primary-color)' />
									<rect x='78.4646' y='23.5' width='10' height='10' rx='5' fill='var(--primary-color)' />
								</svg>
								<h5>Access through mobile phone</h5>
							</div>
						</div>
					</div>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae venenatis elit. Mauris eu porta diam. Cras congue tempus tempor. Donec aliquet turpis ac arcu efficitur, ut dictum sem rhoncus. Nunc velit turpis, tincidunt eu posuere vel, blandit id magna. Maecenas vulputate molestie eros, nec pulvinar justo eleifend vel. Vestibulum. </p>
					<Button href='compawnion' title='compawnion' fill='outline'>Learn More</Button>
				</section>



				<section id='rescues'>
					<SectionName underline='true'>Meet our Recues!</SectionName>
					<div id='dogs'>
						{this.state.loaded ? this.state.pets.map((pet) => (
							<PetCard
								image={pet.image}
								name={pet.name}
								description={pet.description}
							/>
						)) : <p>Loading...</p>}
					</div>
					<Button href='adopt' title='viewAll'>View All</Button>
				</section>



				<section id='help'>
					<SectionName underline='true'>How You Can Help</SectionName>
					<div>
						<div>
							<h1>Adopt</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae venenatis elit. Mauris eu porta diam. Cras congue tempus tempor. Donec aliquet turpis ac arcu efficitur, ut dictum sem rhoncus. Nunc velit turpis, tincidunt eu posuere vel, blandit id magna. Maecenas vulputate molestie eros, nec pulvinar justo eleifend vel. Vestibulum.</p>
							<Button href='adopt' title='adopt'>Adopt</Button>
						</div>
						<div>
							<h1>Donate</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae venenatis elit. Mauris eu porta diam. Cras congue tempus tempor. Donec aliquet turpis ac arcu efficitur, ut dictum sem rhoncus. Nunc velit turpis, tincidunt eu posuere vel, blandit id magna. Maecenas vulputate molestie eros, nec pulvinar justo eleifend vel. Vestibulum.</p>
							<Button href='donate' title='donate'>Donate</Button>
						</div>
					</div>
				</section>



				<Footer active='home' />
			</>
		)
	};
};

export default Home;