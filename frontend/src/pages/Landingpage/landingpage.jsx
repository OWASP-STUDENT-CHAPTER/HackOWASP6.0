import React from 'react'
import styles from './landingpage.module.css';
import Landingcontent from '../../components/landingpage/Landingcontent';

const LandingPage = () => {
    return (
    <div className={styles.landingpage}>
        <Landingcontent />
    </div>
    )
}

export default LandingPage