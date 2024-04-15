import React from 'react'
import styles from './titlesponsor.module.css';

const TitleSponsorCard = ({key, src, alt}) => {
    return (
    <div>
        <img 
            key={key}
            src={src}
            alt={alt}
            className={styles.titlecard}
        />
    </div>
    )
}

export default TitleSponsorCard