import React from 'react';
import styles from './miniprizecard.module.css';

function MiniPrizeCard(props){
    return <div className={styles.mini_card}>
        <img src={props.img} alt="" />
        <div className={styles.description}>{props.description}</div>
    </div>
}

export default MiniPrizeCard;