import React from 'react';
import styles from './trackspage.module.css';
import TracksCard from '../../components/trackspage/trackscard';

const TracksList = [
    {
        id: 1,
		title: "Open Innovation",
        // src: starbucks,
        alt: "starbucks",
    },
    {
        id: 2,
		title: "Cyber Sec & Finance",
		// src: ETH,
        alt: "ETH",
    },
    {
        id: 3,
		title: "Hardware",
		// src: reddragon,
        alt: "reddragon",
    },
    {
        id: 4,
		title: "Sustainability",
		// src: devfolio,
        alt: "devfolio",
    },
    {
        id: 5,
		title: "Defense",
		// src: polygon,
        alt: "polygon",
    },
    {
        id: 6,
		title: "Sponsor Tracks",
		// src: subway,
        alt: "subway",
    }
];

const TracksPage = () => {
	return (
		<div className={styles.trackspage}>
			<div className={styles.tracks_heading}>Tracks</div>
			<div className={styles.trackscards}>
				<div className={styles.gridContainer}>
						{TracksList.map((track) => (
							<TracksCard key={track.id} title={track.title} alt={track.alt} />
						))}
				</div>
			</div>
		</div>
	);
};

export default TracksPage;
