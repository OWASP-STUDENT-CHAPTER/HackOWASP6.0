import React from 'react';
import styles from './trackscard.module.css';

function TracksCard({id, title, alt, src}){
    return <div className={styles.track_card}>
        <div className={styles.track_img}>
            <img 
                src={src}
                alt={alt}
            />
        </div>
        <div className={styles.trackcontent}>
            <div className={styles.tracktitle}>{title}</div>
            <button>Details</button>
        </div>
    </div>
}

export default TracksCard;
