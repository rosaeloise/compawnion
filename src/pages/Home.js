import React from 'react';

import NavigationBar from '../components/NavigationBar';
import Button from '../components/Button';

import HomepageHero from '../assets/Homepage Hero.png';
import SectionName from '../components/SectionName';

import '../css/home.css';

class Home extends React.Component {
	render() {
		return (
			<>
				<NavigationBar active='home' />
				<main id='hero'>
					<div>
						<h1>
							<span style={{
								color: 'var(--primary-color)'
							}}>Fur-ever</span><br />
							homes<br />
							for the best<br />
							companions.</h1>
						<Button href='adopt' title='adopt'>Adopt Now!</Button>
					</div>
					<img src={HomepageHero} alt='Homepage Hero' />
				</main>
				<section id='aboutUs'>
					<SectionName>About Us</SectionName>
					<div>
						<h2>We are BARKCODE</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae venenatis elit. Mauris eu porta diam. Cras congue tempus tempor. Donec aliquet turpis ac arcu efficitur, ut dictum sem rhoncus. Nunc velit turpis, tincidunt eu posuere vel, blandit id magna. Maecenas vulputate molestie eros, nec pulvinar justo eleifend vel. Vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae venenatis elit. Mauris eu porta diam. Cras congue tempus tempor. Donec aliquet turpis ac arcu efficitur, ut dictum sem rhoncus. Nunc velit turpis, tincidunt eu posuere vel, blandit id magna. Maecenas vulputate molestie eros, nec pulvinar justo eleifend vel. Vestibulum.</p>
					</div>
					<svg viewBox="0 0 945 1017">
						<path d="M893.103 639.366C914.786 718.624 874.758 824.403 822.885 836.527C716.909 888.8 680.404 797.909 597.38 820.623C514.356 843.337 559.375 908.619 428.131 967.804C372.444 988.78 223.212 913.692 200.035 828.977C147.675 637.591 234.055 357.961 425.44 305.602C616.825 253.242 840.743 447.981 893.103 639.366Z" fill="var(--primary-color)" />
						<path d="M212.248 300.347C245.283 357.083 233.558 418.318 203.437 435.856C167.714 456.656 105.466 439.196 72.4316 382.459C39.3968 325.722 37.5602 236.19 73.2832 215.39C115.617 218.762 179.214 243.61 212.248 300.347Z" fill="var(--primary-color)" />
						<path d="M377.297 130.53C401.745 191.461 407.77 254.64 369.406 270.034C331.041 285.427 280.122 248.512 255.673 187.581C231.225 126.649 249.609 88.8832 287.973 73.4896C326.337 58.0961 352.848 69.5992 377.297 130.53Z" fill="var(--primary-color)" />
						<path d="M610.869 122.03C609.38 187.666 574.672 240.115 533.345 239.177C492.018 238.24 468.553 203.425 470.042 137.789C470.661 110.499 488.162 88.2832 496.571 64.5729C508.386 31.2571 514.593 0.939698 538.737 1.48738C580.063 2.42485 612.358 56.3935 610.869 122.03Z" fill="var(--primary-color)" />
						<path d="M807.779 219.876C804.353 250.847 793.517 265.429 772.199 286.781C756.03 308.602 741.901 332.19 720.315 329.802C679.228 325.257 651.773 268.673 658.991 203.418C666.209 138.163 705.368 88.9472 746.455 93.492C787.541 98.0369 814.997 154.621 807.779 219.876Z" fill="var(--primary-color)" />
					</svg>
				</section>
			</>
		)
	};
};

export default Home;