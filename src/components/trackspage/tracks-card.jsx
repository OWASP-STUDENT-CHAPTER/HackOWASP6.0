import React from 'react';
import styles from './tracks-card.module.css';

function TracksCard(props){
    return <div className={styles.track_card}>
        <div className={styles.track_img}>

        </div>
        <div className={styles.track_content}>
            <div>{props.title}</div>
            <button>Details <span style={{marginLeft:"2rem"}}>&gt;</span></button>
        </div>
    </div>
}

export default TracksCard;
