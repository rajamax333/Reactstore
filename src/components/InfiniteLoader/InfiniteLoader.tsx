import React from 'react';
import styles from './Infinite.module.scss';

const Loader = () => (
  <div className={styles.loaderWrapper}>
    <div className={styles.spinner}></div>
    <span>Loading more products...</span>
  </div>
);

export default Loader;
