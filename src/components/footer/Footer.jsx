import React from 'react';
import styles from '../footer/Footer.module.css';
import email from '../../assets/footer/mailicon.png';
import instagram from '../../assets/footer/instagram.png';
import linkedin from '../../assets/footer/linkedin.png';
import discord from '../../assets/footer/discord.png';
import twitter from '../../assets/footer/twitter.png';

const Footer = () =>{
    return <footer>
        <div className={styles.footercomp}>
            <div className={styles.social}>
                <h1>
                    OWASP
                </h1>
                <div className={styles.links}>
                    <li><a href={"https://www.instagram.com/owasp_tiet/"}><img src={instagram} alt="instagram" /></a></li>
                    <li><a href="https://www.linkedin.com/company/owasp-tiet/mycompany/"><img src={linkedin} alt="linkedin" /></a></li>
                    <li><a href="https://discord.gg/evPUZ45CMy"><img src={discord} alt="" /></a></li>
                    <li><a href="https://twitter.com/owasp_tiet"><img src={twitter} alt="" /></a></li>
                </div>
            </div>
            <div className={styles.contact}>
                <h1>
                    GET IN TOUCH
                </h1>
                <a href="mailto:owasptu@gmail.com" className={styles.email}>
                    <img src={email} alt="" height="40px"/>
                    owasptu@gmail.com
                </a>
            </div>
        </div>
    </footer>
}

export default Footer
