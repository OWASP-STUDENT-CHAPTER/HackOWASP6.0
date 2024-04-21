import React, { useEffect, useState } from 'react';
import './hamburger.css';
import AboutUs from '../../pages/AboutusPage/aboutus';
import LandingPage from '../../pages/Landingpage/landingpage';
import Sponsorpage from '../../pages/SponsorPage/sponsorpage';
import TracksPage from '../../pages/TracksPage/trackspage';
import ham from './../../../src/assets/navbar/hamburger.png';
import FAQ from '../../pages/FAQPage/faq';
import '../../pages/FAQPage/styles.css';
import PrizesPage from '../../pages/PrizesPage/prizespage';

function ScrollSpyNavigation() {

	const [faqs, setFaqs] = useState([
		{
			question: "What is the team size for HackOwasp 6.0?",
			answer:
			"A Team can consist of 2-5 members.",
		open: false
		},
		{
			question: "What if I have no team?",
			answer: "We will club individual members and you may form a team in our discord server as well.",
			open: false
		},
		{
			question:
				"How long is the hackathon going to last?",
			answer: "Hackathon is going to last for 36 hours",
			open: false
		},
		{
			question:
				"Do I need experience?",
			answer: "No, you do not need any prior development experience. We will assign you mentors to assist you in figuring things out. Of course, willingness to think, learn, and cooperate is a cherry on the top.",
			open: false
		},
		{
			question:
				"Is a working prototype / website of our product required?",
			answer: "Yes, You will need a functioning prototype of how your product/idea works to pitch it to the judges in the final round.",
			open: false
		},
		// {
		// 	question:
		// 		"On what basis will the winners be selected?",
		// 	answer: "The winners of HackOwasp 6.0 will be selected based on Evaluation criteria which will include novelty of the idea, complexity, clarity, and details in the prescribed format, feasibility, practicability, sustainability, the scale of impact, user experience, and potential for prospects.",
		// 	open: false
		// },
		{
			question:
				"What is the cost of participation",
			answer: "HackOWASP 6.0 is completely free to participate for everyone.",
			open: false
		},
		{
			question:
				"What is the mode of Hackathon?",
			answer: "HackOWASP 6.0 is being conducted in HYBRID mode that is OFFLINE for Thapar University students only and ONLINE for all the other students pan India and worldwide",
			open: false
		},
		{
			question:
				"Will hardware be provided for the hardware track?",
			answer: "No. Any team choosing to work on the Hardware track will have to use their own equipment and team OWASP will NOT be providing any hardware accessories.",
			open: false
		},
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
						<a href="#prizes">Prizes</a>
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
						<a href="#tracks">Tracks</a>
					</div>
					<div className="ham-icons">
						{' '}
						<a href="#prizes">Prizes</a>
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
				<section id="prizes">
					<PrizesPage />
				</section>
				<section id="sponsors">
					<Sponsorpage />
				</section>
				<section>
					<div className="faqs">
						<div className="faqtitle">FAQs</div>
						{faqs.map((faq, index) => (
						<FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
						))}
				</div></section>
			</div>
		</div>
	);
}

export default ScrollSpyNavigation;
