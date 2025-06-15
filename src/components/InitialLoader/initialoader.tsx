import styles from './initialloader.module.scss';

const InitialLoader = () => {
  return (
    <div className={styles.loaderOverlay}>
      <div className={styles.loaderContent}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="App Logo" className={styles.logo} />
        <p className={styles.loadingText}>Loading your experience...</p>
        <div className={styles.progressBar}>
          <div className={styles.progress} />
        </div>
      </div>
    </div>
  );
};

export default InitialLoader;
