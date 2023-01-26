import React from 'react';

import styles from './Header.module.scss';
import sunrise from '../../assets/icons/sunrise.png';
import search from '../../assets/icons/search-icon.png';

const Header: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.content}>
          <div className={styles.logo}>
            <img src={sunrise} alt='logo' />
            <p>WeatherApp</p>
          </div>

          <div className={styles.input}>
            <input type='text' />
            <button className={styles.buttonInput}>
              <img src={search} alt='search' />
            </button>
          </div>

          <div className={styles.button}>
            <p>&#x2103;</p>
            <p>/</p>
            <p>&#xb0;F</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
