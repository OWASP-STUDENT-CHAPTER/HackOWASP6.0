import React from 'react'
import styles from './trackspage.module.css';
import TracksCard from '../../components/trackspage/tracks-card';

const TracksPage = () => {
  return (
    <div className={styles.trackspage}>
      <div className={styles.tracks_heading}>Tracks</div>
      <div>
        <TracksCard />
      </div>
    </div>
  )
}

export default TracksPage