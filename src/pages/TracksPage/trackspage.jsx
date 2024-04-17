import React from 'react';
import styles from './trackspage.module.css';
import TracksCard from '../../components/trackspage/trackscard';
// import defense from '../../assets/trackspage/defense.gif'
// import sustainability from '../../assets/trackspage/sustainability.gif'
import hardware from '../../assets/trackspage/hardware.gif'
// import openinnovation from '../../assets/trackspage/openinnovation.gif'
import tank from '../../assets/trackspage/tank.gif'
// import mountain from '../../assets/trackspage/mountain.gif'
import hack from '../../assets/trackspage/hack.gif'
import tech from '../../assets/trackspage/tech.gif'
// import peaceful from '../../assets/trackspage/peaceful.gif'
import trees from '../../assets/trackspage/trees.gif'
import market from '../../assets/trackspage/market.gif';

const TracksList = [
    {
        id: 1,
		title: "Open Innovation",
        src: tech,
        alt: "retrograde",
    },
    {
        id: 2,
		title: "Cyber Sec & Finance",
		src: hack,
        alt: "coding",
    },
    {
        id: 3,
		title: "Hardware",
		src: hardware,
        alt: "robot",
    },
    {
        id: 4,
		title: "Sustainability",
		src: trees,
        alt: "inner peace",
    },
    {
        id: 5,
		title: "Defense",
		src: tank,
        alt: "fight.",
    },
    {
        id: 6,
		title: "Sponsor Tracks",
		src: market,
        alt: "market",
    }
];

const TracksPage = () => {
	return (
		<div className={styles.trackspage}>
			<div className={styles.tracks_heading}>Tracks</div>
			<div className={styles.trackscards}>
				<div className={styles.gridContainer}>
						{TracksList.map((track) => (
							<TracksCard key={track.id} src={track.src} title={track.title} alt={track.alt} />
						))}
				</div>
			</div>
		</div>
	);
};

export default TracksPage;
