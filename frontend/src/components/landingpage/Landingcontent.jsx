import React from 'react'
import styles from './landingcontent.module.css';
import folderopen from '../../assets/landingpage/folderopen.png'
import floppy from '../../assets/landingpage/floppy.png'
import folder from '../../assets/landingpage/folder.png'
import sand from '../../assets/landingpage/sand.png'
import computer from '../../assets/landingpage/computer.png'


const Landingcontent = () => {
  return (
    <div className={styles.landingcontent}>
      <div className={styles.content}>
      <div className={styles.hackowasptitle}>HackOWASP<br />6.0</div>
      <div className={styles.animated_icons}>
        <div className={styles.icon1}>
          <img
            src={folderopen}
            alt="open folder"
          />
        </div>

        <div className={styles.icon2}>
          <img
            src={floppy}
            alt="open folder"
          />
        </div>

        <div className={styles.icon3}>
          <img
            src={sand}
            alt="open folder"
          />
        </div>

        <div className={styles.icon4}>
          <img
            src={computer}
            alt="open folder"
          />
        </div>

        <div className={styles.icon5}>
          <img
            src={folder}
            alt="open folder"
          />
        </div>
      </div>
      </div> 
    </div>
  )
}

export default Landingcontent