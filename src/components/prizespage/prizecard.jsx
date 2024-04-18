import React from 'react';
import styles from './prizecard.module.css';
// import prize from '../../assets/prizespage/prize&stand1.png';


function PrizeCard(props){
    return <div className={styles.prizecard}>
        <div className={styles.prize_img}><img src={props.img} alt="" /></div>
        <div className={styles.prize_description}>{props.description}</div>
    </div>
}

export default PrizeCard;