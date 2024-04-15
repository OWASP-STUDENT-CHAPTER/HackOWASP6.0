import React from 'react'
import styles from './sponsorpage.module.css';
import starbucks from '../../assets/sponsorpage/starbucks.png';
import ETH from '../../assets/sponsorpage/ETH.png';
import reddragon from '../../assets/sponsorpage/reddragon.png';
import starbucks from '../../assets/sponsorpage/starbucks.png';
import starbucks from '../../assets/sponsorpage/starbucks.png';
import starbucks from '../../assets/sponsorpage/starbucks.png';


const Sponsorpage = () => {
    return (
        <div className={styles.sponsorpage}>
            <div className={styles.sponsortitle}>
                <div className={styles.sponsorheading}>Sponsors</div>
                <div className={styles.sponsorbutton}><button>Sponsor us</button></div>
            </div> 
        </div>
    )
}

export default Sponsorpage