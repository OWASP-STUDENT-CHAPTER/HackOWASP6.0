import React, { useEffect, useState } from 'react';
import './hamburger.css';
import AboutUs from '../../pages/AboutusPage/aboutus';
import LandingPage from '../../pages/Landingpage/landingpage';
import Sponsorpage from '../../pages/SponsorPage/sponsorpage';
import TracksPage from '../../pages/TracksPage/trackspage';
import ham from './../../../src/assets/navbar/hamburger.png';
import FAQ from '../../pages/FAQPage/faq';
import '../../pages/FAQPage/styles.css';

function ScrollSpyNavigation() {

	const [faqs, setFaqs] = useState([
		{
			question: "How many programmers does it take to screw a lightbulb?",
			answer:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
		open: true
		},
		{
			question: "Who is the most awesome person?",
			answer: "You! The viewer!",
			open: false
		},
		{
			question:
				"How many questions does it take to makes a succesful FAQ Page?",
			answer: "This many!",
			open: false
		}
	]);
	
		const toggleFAQ = index => {
			setFaqs(
			faqs.map((faq, i) => {
				if (i === index) {
				faq.open = !faq.open;
				} else {
				faq.open = false;
				}
				return faq;
			})
			);
		};
	
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
		<div>
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
						<a href="#faqs">faqs</a>
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
				<section id="faqs">
					<div className="faqs">
						{faqs.map((faq, index) => (
						<FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
						))}
					</div></section>
				<section id="sponsors">
					<Sponsorpage />
				</section>
			</div>
		</div>
	);
}

export default ScrollSpyNavigation;
