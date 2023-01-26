import React from 'react';
import styles from './WeekInfo.module.scss';

const WeekInfo: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.content}>
          <div className={styles.titles}>
            <p>DAY</p>
            <p>CHANCE OF RAIN</p>
            <p>HUMIDITY</p>
            <p>WIND</p>
            <p>TEMPERATURE</p>
          </div>

          <div className={styles.info}>
            <p>Monday</p>
            <p>9 %</p>
            <p>57 %</p>
            <p>10 km/h</p>
            <p>19°</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeekInfo;
