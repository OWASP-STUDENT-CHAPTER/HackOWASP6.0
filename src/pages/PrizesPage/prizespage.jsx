import React from 'react';
import styles from './prizespage.module.css';
import PrizeCard from '../../components/prizespage/prizecard';
// import MiniPrizeCard from '../../components/prizespage/miniprizecard';
// import Arduino from '../../assets/prizespage/arduino.png';
import Hardware from '../../assets/prizespage/hardware.png';
import FirstYears from '../../assets/prizespage/firstyear.png';
import FirstPrize from '../../assets/prizespage/first_prize.png';
import SecondPrize from '../../assets/prizespage/second_prize.png';
import ThirdPrize from '../../assets/prizespage/thrid_prize.png';

function PrizesPage(){
    return <div className={styles.prizespage}>
        <div className={styles.prizes_heading}>Prizes</div>
        <div className={styles.prize_container1}>
            <div className={styles.second}>
            <PrizeCard 
                // padding = '110px'
                // padding = '8.3rem'
                img = {SecondPrize}
                description = 'second'
            />
            </div>
            <div className={styles.first}>
            <PrizeCard 
                img = {FirstPrize}
                description = 'first'
            />
            </div>
            <div className={styles.third}>
            <PrizeCard 
                // padding = '224px'
                // padding = '13.4rem'
                img = {ThirdPrize}
                description = 'third'
            /> 
            </div>
            <PrizeCard 
                img = {FirstYears}
            />
            <PrizeCard 
                img = {Hardware}
            />
        </div>
        {/* <div className={styles.prize_container2}>
        </div> */}
    </div>;
}

export default PrizesPage;