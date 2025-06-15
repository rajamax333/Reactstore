import React from 'react';
import { TextField, Box } from '@mui/material';
import styles from '../MinMaxCompo/minmaxcomp.module.scss';
import useFilter from '../../hooks/useFilterHook/usefilter';

interface MinMaxInputProps {
  label: 'min' | 'max'; // only allow these keys
}

const MinMaxInput: React.FC<MinMaxInputProps> = ({ label }) => {
  const { updateRange, filter } = useFilter();
  const range = filter.range;

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    if (!isNaN(val) && val !== range[label]) {
      updateRange({ ...range, [label]: val });
    }
  };

  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      <TextField
        label={label}
        id={label}
        type="number"
        defaultValue={range[label]} // uncontrolled input
        onBlur={handleBlur} // update only on blur
        size="small"
        className={styles.inputField}
      />
    </Box>
  );
};

export default MinMaxInput;
