import React from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import FilterComponent from '../../components/FilterComponent/filterComponent';
import styles from './filterDrawer.module.scss';

interface Props {
  draweropen: boolean,
  setDrawerOpen: (x: boolean) => void,
}

const FilterDrawer:React.FC<Props> = ({ draweropen, setDrawerOpen }) =>{
  return (

    <Drawer
      anchor="left"
      open={draweropen}
      onClose={() => setDrawerOpen(false)}
      PaperProps={{
        sx: {
          width: '300px',
          height: '100vh', // Full browser height
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      {/* Drawer Header */}
      <div className={styles.drawerHeader}>
        <h3>Filters</h3>
        <IconButton onClick={() => setDrawerOpen(false)}>
          <CloseIcon />
        </IconButton>
      </div>

      {/* Scrollable Content */}
      <div className={styles.drawerContent}>
        <FilterComponent />
      </div>
    </Drawer>
  )
}

export default FilterDrawer