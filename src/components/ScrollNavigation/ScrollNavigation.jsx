import React, { useEffect } from 'react';
import './hamburger.css'
import AboutUs from '../../pages/AboutusPage/aboutus';
import LandingPage from '../../pages/Landingpage/landingpage';
// import TracksPage from '../../pages/TracksPage/trackspage';

function ScrollSpyNavigation() {
    useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    function navHighlighter() {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.navigation a[href*=${sectionId}]`).classList.add("active");
        } else {
            document.querySelector(`.navigation a[href*=${sectionId}]`).classList.remove("active");
        }
    });
    }

    window.addEventListener("scroll", navHighlighter);
    
    return () => {
        window.removeEventListener("scroll", navHighlighter);
    };
}, []);

    return (
    <div>
        <div className="side-bar">
        <div className="navigation">
            <div className="home"><a href="#hackowasp6">HackOWASP 6</a></div>
            <div><a href="#about">About</a></div>
            <div><a href="#services">Tracks</a></div>
            <div><a href="#timeline">Timeline</a></div>
            <div><a href="#sponsors">Sponsors</a></div>
        </div>
        </div>
        <div className="main-content">
        <section id="hackowasp6">
            <LandingPage />
        </section>
        <section id="about">
            <AboutUs />
        </section>     
        <section id="services">
            {/* <TracksPage /> */}
        </section>
        <section id="timeline">
            {/* <h1>timeline</h1> */}
        </section>
        <section id="sponsors">
            {/* <h1>sponsors</h1> */}
        </section>
        </div>
    </div>
    );
}

export default ScrollSpyNavigation;
