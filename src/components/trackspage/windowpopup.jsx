import React from 'react'
import styles from './windowpopup.module.css'

const WindowPopup = () => {
    return (
        <div className={styles.windowpopup}>
            <div class={styles.container}>            
            <div class={styles.row}>
                <div class={`${styles.TL} ${styles.box}`}></div>
                <div class={`${styles.TM} ${styles.box} ${styles.boxMiddle}`}>Heading</div>
                <div class={`${styles.TR} ${styles.box}`}></div>
                <div class={`${styles.LM} ${styles.box}`}></div>
            </div>
            <div>
                <div class={`${styles.content} ${styles.box}`}>HackOWASP is an annual national hackathon organized by the members of the OWASP Student Chapter, Thapar Institute of Engineering and Technology, Patiala. Continuing the legacy forward, the sixth edition of the event, HackOWASP gives a chance to all the ingenious developers to subsume creativity with ambition and give rise to innovation in the burgeoning world of technology. HackOWASP stands at a national level on the global scale and strives to motivate students to go beyond the possible.</div>
                <div class={`${styles.RM} ${styles.box}`}></div>
                <div class={styles.bottom}></div>   
            </div>
            </div>
        </div>
    )
}

export default WindowPopup