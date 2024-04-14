import React from 'react'
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.navbarcomp}>
            <div className={styles.navbar}>
                <div>
                    <p className={styles.home}>Hackowasp 6</p>
                </div>
                <div>
                    <p className={styles.aboutus}>About Us</p>
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