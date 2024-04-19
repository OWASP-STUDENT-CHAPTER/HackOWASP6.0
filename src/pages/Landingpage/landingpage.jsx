import React from 'react'
import styles from './landingpage.module.css';
import Landingcontent from '../../components/landingpage/Landingcontent';
// import Background from '../../components/landingpage/starfieldbg';
// import StarrySky from '../../components/landingpage/starfieldbg';

const LandingPage = () => {
    return (
    <div className={styles.landingpage}>
        <Landingcontent />
    </div>
    )
}

export default LandingPage