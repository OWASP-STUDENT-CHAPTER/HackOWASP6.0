import React, { useState } from 'react';
import styles from './trackscard.module.css';

const TrackDescription = [
    {
        heading:"Open Innovation",
        description:"Explore boundless creativity and collaboration in the Open Innovation track. Break down barriers and unlock new possibilities as you tackle real-world challenges with fellow participants. Harness the power of open-source technologies and interdisciplinary teamwork to craft innovative solutions that could shape the future. Let your imagination run wild and make a meaningful impact through open innovation."
    },
    {
        heading:"Open Innovation",
        description:"Explore boundless creativity and collaboration in the Open Innovation track. Break down barriers and unlock new possibilities as you tackle real-world challenges with fellow participants. Harness the power of open-source technologies and interdisciplinary teamwork to craft innovative solutions that could shape the future. Let your imagination run wild and make a meaningful impact through open innovation."
    },
    {
        heading:"Open Innovation",
        description:"Explore boundless creativity and collaboration in the Open Innovation track. Break down barriers and unlock new possibilities as you tackle real-world challenges with fellow participants. Harness the power of open-source technologies and interdisciplinary teamwork to craft innovative solutions that could shape the future. Let your imagination run wild and make a meaningful impact through open innovation."
    },
    {
        heading:"Open Innovation",
        description:"Explore boundless creativity and collaboration in the Open Innovation track. Break down barriers and unlock new possibilities as you tackle real-world challenges with fellow participants. Harness the power of open-source technologies and interdisciplinary teamwork to craft innovative solutions that could shape the future. Let your imagination run wild and make a meaningful impact through open innovation."
    },
    {
        heading:"Open Innovation",
        description:"Explore boundless creativity and collaboration in the Open Innovation track. Break down barriers and unlock new possibilities as you tackle real-world challenges with fellow participants. Harness the power of open-source technologies and interdisciplinary teamwork to craft innovative solutions that could shape the future. Let your imagination run wild and make a meaningful impact through open innovation."
    },
    {
        heading:"Open Innovation",
        description:"Explore boundless creativity and collaboration in the Open Innovation track. Break down barriers and unlock new possibilities as you tackle real-world challenges with fellow participants. Harness the power of open-source technologies and interdisciplinary teamwork to craft innovative solutions that could shape the future. Let your imagination run wild and make a meaningful impact through open innovation."
    },
]

function TracksCard({ id, title, alt, src }) {
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
                {TrackDescription.map((track) => (
					<div className={styles.popupcontent}>
                        <div className={styles.popupheading}>
                            {track.heading}
                        </div>
                        <div className={styles.popupdescription}>
                            {track.description}
                        </div>
                    </div>
				))}
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
