import React from 'react';
import styles from './NowInfo.module.scss';

const NowInfo: React.FC = () => {
  return (
    <div className={styles.root}>
      <p className={styles.title}>Now</p>
      <div className='container'>
        <div className={styles.items}>
          {' '}
          <div className={styles.item}>
            <p className={styles.weather}>Chance of Rain</p>
            <p className={styles.value}>12 %</p>
          </div>
          <div className={styles.item}>
            <p className={styles.weather}>Chance of Rain</p>
            <p className={styles.value}>12 %</p>
          </div>
          <div className={styles.item}>
            <p className={styles.weather}>Chance of Rain</p>
            <p className={styles.value}>12 %</p>
          </div>
          <div className={styles.item}>
            <p className={styles.weather}>Chance of Rain</p>
            <p className={styles.value}>12 %</p>
          </div>
          <div className={styles.item}>
            <p className={styles.weather}>Chance of Rain</p>
            <p className={styles.value}>12 %</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NowInfo;
