import React from 'react';
import styles from './prizespage.module.css';
import PrizeCard from '../../components/prizespage/prizecard';
import MiniPrizeCard from '../../components/prizespage/miniprizecard';
import Arduino from '../../assets/prizespage/arduino.png';
import FirstYears from '../../assets/prizespage/firstyear.png';

function PrizesPage(){
    return <div className={styles.prizespage}>
        <div className={styles.prizes_heading}>Prizes</div>
        <div className={styles.prize_container1}>
            <PrizeCard 
                // padding = '110px'
                padding = '8.3rem'
            />
            <PrizeCard />
            <PrizeCard 
                // padding = '224px'
                padding = '13.4rem'
            /> 
        </div>
        <div className={styles.prize_container2}>
            <MiniPrizeCard 
                img = {Arduino}
            />
            <MiniPrizeCard 
                img = {FirstYears}
            />
        </div>
    </div>;
}

export default PrizesPage;