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

//     <div class="container">
            //     <div class="front">
            //         <div class="inner">
            //             <p>Diligord</p>
            //     <span>Lorem ipsum</span>
            //         </div>
            //     </div>
            //     <div class="back">
            //         <div class="inner">
            //             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
            //         </div>
            //     </div>
            // </div>
                // <div class="popup">
                // <div class="win98popup shadow">
                // <div class="bar">
                //     <p>Paint</p>
                //     {TrackDescription.map((track) => (
				// 			track.heading
				// 		))}
                //     <button class="shadow">
                //         <svg xmlns="http://www.w3.org/2000/svg" width="8px" height="7px" viewBox="0 0 8 7" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path d="M1 6V5h1V4h1V3h2v1h1v1h1v1h1v1H6V6H5V5H3v1H2v1H0V6h1zm0-4V1H0V0h2v1h1v1h2V1h1V0h2v1H7v1H6v1H2V2H1z"/></svg>
                //         </button>
                //     </div>
                //     <section>
                //     <p>Save changes to untitled?</p>
                //     {TrackDescription.map((track) => (
				// 			track.description
				// 		))}
                //     </section>
                //     <div class="buttons">
                //     <button class="shadow" onClick={togglePopup}><img src="https://raw.githubusercontent.com/mbledkowski/win98popup/master/outline.svg" alt="" width="66.9" height="15"/><p><u>Y</u>es</p></button>
                //     <button class="shadow" onClick={togglePopup}><img src="https://raw.githubusercontent.com/mbledkowski/win98popup/master/outline.svg" alt="" width="66.9" height="15" onClick={togglePopup}/><p><u>N</u>o</p></button>
                //     <button class="shadow" onClick={togglePopup}><img src="https://raw.githubusercontent.com/mbledkowski/win98popup/master/outline.svg" alt="" width="66.9" height="15" onClick={togglePopup}/><p>Cancel</p></button>
                //     </div>
                // </div>
                // </div>
            //     <div className={classes.windowpopup}>
            //     <div class={classes.container}>            
            //     <div class={classes.row}>
            //         <div class={`${classes.TL} ${classes.box}`}></div>
            //         <div class={`${classes.TM} ${classes.box} ${classes.boxMiddle}`}>Heading</div>
            //         <div class={`${classes.TR} ${classes.box}`}></div>
            //         <div class={`${classes.LM} ${classes.box}`}></div>
            //     </div>
            //     <div>
            //         <div class={`${classes.content} ${classes.box}`}>HackOWASP is an annual national hackathon organized by the members of the OWASP Student Chapter, Thapar Institute of Engineering and Technology, Patiala. Continuing the legacy forward, the sixth edition of the event, HackOWASP gives a chance to all the ingenious developers to subsume creativity with ambition and give rise to innovation in the burgeoning world of technology. HackOWASP stands at a national level on the global scale and strives to motivate students to go beyond the possible.</div>
            //         <button onClick={togglePopup}>Close</button>
            //         <div class={`${classes.RM} ${classes.box}`}></div>
            //         <div class={classes.bottom}></div>   
            //     </div>
            //     </div>
            // </div>