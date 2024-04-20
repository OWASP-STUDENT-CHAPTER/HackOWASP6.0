import React from 'react';
import styles from './prizecard.module.css';
// import prize from '../../assets/prizespage/prize&stand1.png';


function PrizeCard(props){
    const [showPopup,setShowPopup] = React.useState(false);
    function togglePopup(){
        setShowPopup(!showPopup);
    }
    return(
    <div className={styles.prizeContent}>
        {showPopup && (
            <div className={styles.popup}>
                <div className={styles.popup_inner}>
                    <div className={styles.popupcontent}>
                        <div className={styles.popupheading}>
                            {props.title}
                        </div>
                        <div className={styles.popupdescription}>
                            {props.popupcontent}
                        </div>
                    </div>
                    <button className={styles.popupbutton} onClick={togglePopup}>Close</button>
                </div>
            </div>
        )}
        <button className={styles.prizecard} onClick={togglePopup}>
            <div className={styles.heading}>{props.title}</div>
            <div className={styles.prize_img}><img src={props.img} alt={props.alt} /></div>
            {/* <div className={styles.prize_description}>{props.description}</div> */}
        </button>
    </div>
    ); 
}

export default PrizeCard;