import React, { useEffect } from 'react';
import './hamburger.css';
import AboutUs from '../../pages/AboutusPage/aboutus';
import LandingPage from '../../pages/Landingpage/landingpage';
import Sponsorpage from '../../pages/SponsorPage/sponsorpage';
import TracksPage from '../../pages/TracksPage/trackspage';
import ham from './../../../src/assets/navbar/hamburger.png';
import styles from './styles.module.css';

function ScrollSpyNavigation() {
	useEffect(() => {
		const sections = document.querySelectorAll('section[id]');

		function navHighlighter() {
			let scrollY = window.pageYOffset;

			sections.forEach((current) => {
				const sectionHeight = current.offsetHeight;
				const sectionTop = current.offsetTop - 50;
				const sectionId = current.getAttribute('id');

				if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
					document
						.querySelector(`.navigation a[href*=${sectionId}]`)
						.classList.add('active');
				} else {
					document
						.querySelector(`.navigation a[href*=${sectionId}]`)
						.classList.remove('active');
				}
			});
		}

		window.addEventListener('scroll', navHighlighter);

		return () => {
			window.removeEventListener('scroll', navHighlighter);
		};
	}, []);

	const hamburgerHanlder = () => {
		const hamPopup = document.querySelector('.ham-popup');
		hamPopup.style.display =
			hamPopup.style.display === 'none' ? 'flex' : 'none';
	};
	return (
		<div className={styles.main}>
			<div className="side-bar">
				<div className="navigation">
					<div className="home">
						<a href="#hackowasp6">HackOWASP 6</a>
					</div>
					<div className="linksOnNavbar">
						<a href="#about">About</a>
					</div>
					<div className="linksOnNavbar">
						<a href="#tracks">Tracks</a>
					</div>
					<div className="linksOnNavbar">
						{' '}
						<a href="#timeline">Timeline</a>
					</div>
					<div className="linksOnNavbar">
						<a href="#sponsors">Sponsors</a>
					</div>
					<div className="ham">
						<img
							src={ham}
							alt="hamburger"
							height={40}
							onClick={hamburgerHanlder}
						/>
					</div>
				</div>
				<div className="ham-popup navigation">
					<div className="ham-icons">
						<a href="#about">About</a>
					</div>
					<div className="ham-icons">
						<a href="#services">Tracks</a>
					</div>
					<div className="ham-icons">
						{' '}
						<a href="#timeline">Timeline</a>
					</div>
					<div className="ham-icons">
						<a href="#sponsors">Sponsors</a>
					</div>
				</div>
			</div>
			<div className="main-content">
				<section id="hackowasp6">
					<LandingPage />
				</section>
				<section id="about">
					<AboutUs />
				</section>
				<section id="tracks">
					<TracksPage />
				</section>
				<section id="timeline">{/* <h1>timeline</h1> */}</section>
				<section id="sponsors">
					<Sponsorpage />
				</section>
			</div>
		</div>
	);
}

export default ScrollSpyNavigation;
