import React from 'react';
import styles from './trackspage.module.css';
import TracksCard from '../../components/trackspage/trackscard';
// import defense from '../../assets/trackspage/defense.gif'
// import sustainability from '../../assets/trackspage/sustainability.gif'
import hardware from '../../assets/trackspage/hardware.gif'
// import openinnovation from '../../assets/trackspage/openinnovation.gif'
// import tank from '../../assets/trackspage/tank.gif'
// import mountain from '../../assets/trackspage/mountain.gif'
import hack from '../../assets/trackspage/hack.gif'
import tech from '../../assets/trackspage/tech.gif'
// import peaceful from '../../assets/trackspage/peaceful.gif'
// import trees from '../../assets/trackspage/trees.gif'
import market from '../../assets/trackspage/market.gif';
import health from '../../assets/trackspage/nursejoy.gif';

const TracksList = [
    {
        id: 1,
		title: "Open Innovation",
        src: tech,
        alt: "retrograde",
        description:"Explore boundless creativity and collaboration in the Open Innovation track. Break down barriers and unlock new possibilities as you tackle real-world challenges with fellow participants. Harness the power of open-source technologies and interdisciplinary teamwork to craft innovative solutions that could shape the future. Let your imagination run wild and make a meaningful impact through open innovation."
    },
    {
        id: 2,
		title: "Cyber Sec & Finance",
		src: hack,
        alt: "coding",
        description:"In an era of rapid digital transformation, the imperative to secure financial systems and data is paramount, underlining the critical intersection of cybersecurity and finance. Dive deep into this, leveraging cutting-edge technologies and strategic approaches to safeguard financial transactions and fend off cyber threats. Shape the future of cybersecurity in finance and ensure the integrity of global financial systems."
    },
    {
        id: 3,
		title: "Hardware",
		src: hardware,
        alt: "robot",
        description:"From electronics to IoT devices and beyond,  creativity and innovation in Hardware lets you to push the boundaries of physical computing and realize your visions. Design and prototype innovative solutions that address real-world challenges and enhance user experiences. Whether you're an experienced hardware enthusiast or a curious beginner, this is a chance to explore, experiment, and create groundbreaking hardware innovations."

    },
    {
        id: 4,
		title: "Health",
		src: health,
        alt: "happi happi",
        description:"Are you passionate about making a difference in people's lives? Do you want to contribute to society and help the less fortunate? Join the HackOwasp 6.0 health track and work towards creating innovative projects that cater to the health needs of the marginalized and underprivileged. By leveraging technology, you can design solutions that increase accessibility to healthcare services, improve the quality of care, and reduce healthcare disparities. So, if you're looking for an opportunity to serve others and make a positive impact, HackOwasp 6.0 is the platform for you."

    },
    // {
    //     id: 5,
	// 	title: "Defense",
	// 	src: tank,
    //     alt: "fight.",
    //     description:"Explore boundless creativity and collaboration in the Open Innovation track. Break down barriers and unlock new possibilities as you tackle real-world challenges with fellow participants. Harness the power of open-source technologies and interdisciplinary teamwork to craft innovative solutions that could shape the future. Let your imagination run wild and make a meaningful impact through open innovation."
    // },
    {
        id: 6,
		title: "Sponsor Tracks",
		src: market,
        alt: "market",
        description:"Hackowasp 6.O, a global level hackathon, has attracted a range of sponsors such as NOT@MRP , Verbwire, Polygon. Each sponsor has its own track, offering participants an opportunity to work on specific challenges and win prizes. Participants can choose which track to participate in based on their interests and work alongside mentors and experts to develop their ideas. The prizes range from cash rewards to seed funding, making Hackowasp 6.O an exciting event for tech enthusiasts worldwide."
    }
];


const TracksPage = () => {
	return (
		<div className={styles.trackspage}>
			<div className={styles.tracks_heading}>Tracks</div>
			<div className={styles.trackscards}>
				<div className={styles.gridContainer}>
						{TracksList.map((track) => (
							<TracksCard key={track.id} src={track.src} title={track.title} alt={track.alt} popupcontent={track.description}/>
						))}
				</div>
			</div>
		</div>
	);
};

export default TracksPage;
