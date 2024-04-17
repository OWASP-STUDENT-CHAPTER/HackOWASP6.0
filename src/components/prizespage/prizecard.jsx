import React from 'react';
import styles from './prizecard.module.css';
import prize from '../../assets/prizespage/prize&stand.png';


function PrizeCard(props){
    return <div className={styles.prizecard} style={{paddingTop:props.padding}}>
        <div className={styles.prize_img}><img src={prize} alt="" /></div>
        <div className={styles.prize_description}></div>
    </div>
}

export default PrizeCard;