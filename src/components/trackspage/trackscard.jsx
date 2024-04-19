import React, { useState } from 'react';
import styles from './trackscard.module.css';


function TracksCard({ id, title, alt, src, popupheading, popupcontent }) {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
        // Toggle body overflow style
        document.body.style.overflow = showPopup ? 'auto' : 'hidden';
    };

    return (
        <div className={styles.track_card}>
        <div className={styles.track_img}>
            <img src={src} alt={alt} />
        </div>
        <div className={styles.trackcontent}>
            <div className={styles.tracktitle}>{title}</div>
            {showPopup && (
            <div className={styles.popup}>
                <div className={styles.popup_inner}>					
                    <div className={styles.popupcontent}>
                        <div className={styles.popupheading}>
                            {title}
                        </div>
                        <div className={styles.popupdescription}>
                            {popupcontent}
                        </div>
                    </div>
                <button className={styles.popupbutton} onClick={togglePopup}>Close</button>
                </div>
            </div>
            )}
            <button onClick={togglePopup}>Details</button>
        </div>
        </div>
    );
}

export default TracksCard
