import React from 'react';
import styles from './header.module.scss';
import FilterListIcon from '@mui/icons-material/FilterList';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface Props {
  onFilterClick: () => void;
}

const Header: React.FC<Props> = ({ onFilterClick }) => {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.brand}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Store" className={styles.logo} />
        <h1>React Store</h1>
      </div>
      <div className={styles.actions}>
        <button className={styles.filterIcon} onClick={onFilterClick} title="Filter Products">
          <FilterListIcon />
        </button>
        {/* <button className={styles.iconButton} title="Cart">
          <ShoppingCartIcon />
        </button> */}
        <button className={styles.iconButton} title="Raj Login">
          <AccountCircleIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;
