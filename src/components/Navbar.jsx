import React from 'react'
import styles from './Navbar.module.css';
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <div className={styles.navbarcomp}>
            <div className={styles.navbar}>
                <div>
                    <Link activeClass="active" smooth spy to="landingpage"><p className={styles.home}>Hackowasp 6</p></Link>
                </div>
                <div>
                    <Link activeClass="active" smooth spy to="aboutus"><p className={styles.aboutus}>About us</p></Link>
                </div>
                <div>
                    <p className={styles.tracks}>Tracks</p>
                </div>
                <div>
                    <p className={styles.timeline}>Timeline</p>
                </div>
                <div>
                    <p className={styles.sponsors}>Sponsors</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar