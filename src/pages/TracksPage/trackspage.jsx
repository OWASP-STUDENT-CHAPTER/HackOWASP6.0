import React from 'react';
import styles from './trackspage.module.css';
import TracksCard from '../../components/trackspage/tracks-card';

const TracksPage = () => {
	return (
		<div className={styles.trackspage}>
			<div className={styles.tracks_heading}>Tracks</div>
			<div className={styles.tracks}>
        <TracksCard 
          title = 'Open innovation'
        />
        <TracksCard 
          title = 'Cyber sec & Finance'
        />
        <TracksCard 
          title='Hardware'
        />
        <TracksCard 
          title = 'Sustainability'
        />
        <TracksCard 
          title = 'Defence'
        />
        <TracksCard 
          title='Sposor tracks'
        />
      </div>
		</div>
	);
};

export default TracksPage;
