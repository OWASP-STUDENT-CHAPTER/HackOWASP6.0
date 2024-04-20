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
import Sponsors from '../../assets/prizespage/sponsors.png';

const PrizeList = [
    {
        id: 1,
		title: "FIRST PRIZE",
        src: FirstPrize,
        alt: "first prize",
        // description:"Amazon gift voucher worth 10000\n100% off on choice course from Technook\n1 month free access to echo 3d pro tier\n100% off on interview buddy\nFree domains from .xyz\nGoodies from coding ninjas\nFree giveaway books from rosenfeld\nInterviewCake full access licenses\nFueler premium\n1-year subscription licenses of Axure RP Team Edition\nAoPS coupons"
        description: ["Amazon gift voucher worth 10000","100% off on choice course from Technook","1 month free access to echo 3d pro tier","100% off on interview buddy\nFree domains from .xyz","Goodies from coding ninjas","Free giveaway books from rosenfeld","InterviewCake full access licenses","Fueler premium","1-year subscription licenses of Axure RP Team Edition","AoPS coupons"]
    },
    {
        id: 2,
		title: "SECOND PRIZE",
		src: SecondPrize,
        alt: "Second prize",
        // description:"In an era of rapid digital transformation, the imperative to secure financial systems and data is paramount, underlining the critical intersection of cybersecurity and finance. Dive deep into this, leveraging cutting-edge technologies and strategic approaches to safeguard financial transactions and fend off cyber threats. Shape the future of cybersecurity in finance and ensure the integrity of global financial systems."
        description:["Amazon gift voucher worth 7000","100% off on choice course from Technook","1 month free access to echo 3d pro tier","100% off on interview buddy","free domains from .xyz","Free giveaway books from rosenfeld","InterviewCake full access licenses","Fueler premium"]
    },
    {
        id: 3,
		title: "THIRD PRIZE",
		src: ThirdPrize,
        alt: "third prize",
        // description:"From electronics to IoT devices and beyond,  creativity and innovation in Hardware lets you to push the boundaries of physical computing and realize your visions. Design and prototype innovative solutions that address real-world challenges and enhance user experiences. Whether you're an experienced hardware enthusiast or a curious beginner, this is a chance to explore, experiment, and create groundbreaking hardware innovations."
        description:["Amazon gift voucher worth 3000","100% off on choice course from Technook","1 month free access to echo 3d pro tier","100% off on interview buddy","Free domains from .xyz","Free giveaway books from rosenfeld","InterviewCake full access licenses","Fueler premium"]
    },
    {
        id: 4,
		title: "BEST FIRST YEAR",
		src: FirstYears,
        alt: "First years",
        // description:"Are you passionate about making a difference in people's lives? Do you want to contribute to society and help the less fortunate? Join the HackOwasp 6.0 health track and work towards creating innovative projects that cater to the health needs of the marginalized and underprivileged. By leveraging technology, you can design solutions that increase accessibility to healthcare services, improve the quality of care, and reduce healthcare disparities. So, if you're looking for an opportunity to serve others and make a positive impact, HackOwasp 6.0 is the platform for you."
        description:["Amazon gift voucher worth 2000","100% off on choice course from Technook","1 month free access to echo 3d pro tier","100% off on interview buddy","free domains from .xyz","InterviewCake full access licenses","20% off rosenfield"]
    },
    {
        id: 5,
		title: "BEST HARDWARE",
		src: Hardware,
        alt: "hardware prize",
        // description:"Explore boundless creativity and collaboration in the Open Innovation track. Break down barriers and unlock new possibilities as you tackle real-world challenges with fellow participants. Harness the power of open-source technologies and interdisciplinary teamwork to craft innovative solutions that could shape the future. Let your imagination run wild and make a meaningful impact through open innovation."
        description:["Amazon gift voucher worth 2000","100% off on choice course from Technook","1 month free access to echo 3d pro tier","100% off on interview buddy","free domains from .xyz","InterviewCake full access licenses","20% off rosenfield"]
    },
    {
        id: 6,
		title: "SPONSORS",
		src: Sponsors,
        alt: "sponsors",
        // description:"Hackowasp 6.O, a global level hackathon, has attracted a range of sponsors such as NOT@MRP , Verbwire, Polygon. Each sponsor has its own track, offering participants an opportunity to work on specific challenges and win prizes. Participants can choose which track to participate in based on their interests and work alongside mentors and experts to develop their ideas. The prizes range from cash rewards to seed funding, making Hackowasp 6.O an exciting event for tech enthusiasts worldwide."
        description:["verbwire: 1) Best Use of AI & Verbwire API - Up to $4,000 in Premium API Credits, across up to 15 teams {$45 credit per team member}  2) Most Innovative Use Of Verbwire API - Up to $1,000 in Premium API Credits, across up to 5 teams {$45 credit per team member}","polygon: best hack gets 200 usd","not@mrp brand discount coupons, internship opportunity to winners, subscription to winners, goodies to intern after internship(agar idhar mili), early access to application,beta features-- for more details contact eshitva"]
    }
];

function PrizesPage(){
    return <div className={styles.prizespage}>
        <div className={styles.prizes_heading}>Prizes</div>
        <div className={styles.prize_container1}>
            {PrizeList.map((prize)=>(
                <PrizeCard 
                    title = {prize.title}
                    img = {prize.src}
                    alt = {prize.alt}
                    popupcontent = {prize.description}
                />
            ))}
            {/* <div className={styles.second}>
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
            /> */}
        </div>
        {/* <div className={styles.prize_container2}>
        </div> */}
    </div>;
}

export default PrizesPage;