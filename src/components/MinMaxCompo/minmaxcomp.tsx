import React, { useEffect, useState } from 'react';
import { TextField, Box } from '@mui/material';
import styles from '../MinMaxCompo/minmaxcomp.module.scss';
import useFilter from '../../hooks/useFilterHook/usefilter';

interface MinMaxInputProps {
  label: 'min' | 'max';
}

const MinMaxInput: React.FC<MinMaxInputProps> = ({ label }) => {
  const { updateRange, filter } = useFilter();
  const range = filter.range;
  const [value, setValue] = useState<number | ''>(range[label] ?? '');

  useEffect(() => {
    setValue(range[label] ?? '');
  }, [range[label]]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue(val === '' ? '' : Number(val));
  };

  const handleBlur = () => {
    if (value !== '' && value !== range[label]) {
      updateRange({ ...range, [label]: value });
    }
  };

  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      <TextField
        label={label.toUpperCase()}
        id={label}
        value={value}
        type="number"
        onChange={handleChange}
        onBlur={handleBlur}
        size="small"
        className={styles.inputField}
      />
    </Box>
  );
};

export default MinMaxInput;
