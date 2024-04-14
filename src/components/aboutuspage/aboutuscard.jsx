import React from 'react'
import styles from './aboutuscard.module.css'

const AboutUsCard = ({content, heading}) => {
    return (
        <div className={styles.aboutuscard}>
            <div className={styles.aboutuscardheading}>
                {heading}
            </div>
            <div className={styles.aboutuscardcontent}>
                {content}  
            </div>
        </div>
    )
}

export default AboutUsCard