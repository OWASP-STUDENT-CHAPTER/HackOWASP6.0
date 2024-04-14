import React from 'react'
import styles from './aboutus.module.css';
import WindowPopup from '../../components/trackspage/windowpopup';
import AboutUsCard from '../../components/aboutuspage/aboutuscard';

const AboutUs = () => {
    return (
        <div className={styles.aboutus}>
            <div className={styles.aboutusheading}>About us</div>
            <div className={styles.card1}>
                <AboutUsCard heading="HackOWASP" content="HackOWASP is an annual national hackathon organized by the members of the OWASP Student Chapter, Thapar Institute of Engineering and Technology, Patiala. Continuing the legacy forward, the sixth edition of the event, HackOWASP gives a chance to all the ingenious developers to subsume creativity with ambition and give rise to innovation in the burgeoning world of technology. HackOWASP stands at a national level on the global scale and strives to motivate students to go beyond the possible."/>
            </div>
            <div className={styles.card2}>
                <AboutUsCard heading="OWASP" content="Thapar Institute of Engineering and Technology (TIET) has been a steady source of highly skilled talent to the nation as well as overseas. A pioneer in engineering education, research and innovation. The team of OWASP Student Chapter, one of the gilt-edged coding society, involves ingenious mind solvers who are eager to make the world a better place to live in with their innovative techniques and discoveries. By successfully organizing many hackathons, tech-talks, workshops and coding nights, we have always strived hard to maintain the coding culture throughout the campus."/>
            </div>
        </div>
    )
}

export default AboutUs