import React from 'react'
import styles from './sponsorpage.module.css';
import starbucks from '../../assets/sponsorpage/starbucks.png';
import ETH from '../../assets/sponsorpage/ETH.png';
import reddragon from '../../assets/sponsorpage/reddragon.png';
import devfolio from '../../assets/sponsorpage/devfolio.png';
import polygon from '../../assets/sponsorpage/polygon.png';
import subway from '../../assets/sponsorpage/subway.png';
import TitleSponsorCard from '../../components/sponsorpage/titlesponsor';


const imagesList = [
    {
        id: 1,
        src: starbucks,
        alt: "starbucks",
    },
    {
        id: 2,
        src: ETH,
        alt: "ETH",
    },
    {
        id: 3,
        src: reddragon,
        alt: "reddragon",
    },
    {
        id: 4,
        src: devfolio,
        alt: "devfolio",
    },
    {
        id: 5,
        src: polygon,
        alt: "polygon",
    },
    {
        id: 6,
        src: subway,
        alt: "subway",
    }
];

const Sponsorpage = () => {
    return (
        <div className={styles.sponsorpage}>
            <div className={styles.sponsortitle}>
                <div className={styles.sponsorheading}>Sponsors</div>
                <div className={styles.sponsorbutton}><a href="mailto:owasptu@gmail.com" className={styles.email}><button>Sponsor us</button></a></div>
            </div> 
            <div className={styles.titlesponsors}>
                <div className={styles.titleheading}>Title</div>
                <div className={styles.gridContainer}>
                    {imagesList.map((image) => (
                        <TitleSponsorCard key={image.id} src={image.src} alt={image.alt} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sponsorpage