import React from 'react';
import styles from '../footer/Footer.module.css';

const Footer = () =>{
    return <footer>
        <div className={styles.footercomp}>
            <div className={styles.social}>
                <h1>
                    OWASP
                </h1>
                <ul>

                </ul>
            </div>
            <div className={styles.contact}>
                <h1>
                    GET IN TOUCH
                </h1>
                <span></span>
            </div>
        </div>
    </footer>
}

export default Footer