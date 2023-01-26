import React from 'react';

import styles from './CurrentPlace.module.scss';
import rain from '../../assets/weather-icones/rein.png';

const CurrentPlace: React.FC = () => {
  //   const celsius = '&#x2103';

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.currentInfo}>
          <div className={styles.mainInfo}>
            <p className={styles.city}>London</p>
            <div className={styles.data}>
              <p>Sunday</p>
              <p>07:09</p>
            </div>
            <p className={styles.temp}>12 &#x2103; </p>
          </div>

          <div className={styles.timeInfo}>
            <div className={styles.timeInfoItem}>
              <p className={styles.time}>08:00</p>
              <img src={rain} alt='weather-icones' />
              <p className={styles.temp}>13 &#x2103;</p>
            </div>
            <div className={styles.timeInfoItem}>
              <p className={styles.time}>08:00</p>
              <img src={rain} alt='weather-icones' />
              <p className={styles.temp}>13 &#x2103;</p>
            </div>
            <div className={styles.timeInfoItem}>
              <p className={styles.time}>08:00</p>
              <img src={rain} alt='weather-icones' />
              <p className={styles.temp}>13 &#x2103;</p>
            </div>
            <div className={styles.timeInfoItem}>
              <p className={styles.time}>08:00</p>
              <img src={rain} alt='weather-icones' />
              <p className={styles.temp}>13 &#x2103;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentPlace;
