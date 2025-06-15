import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';

interface CheckboxWithLabelProps {
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const CheckboxWithLabel: React.FC<CheckboxWithLabelProps> = ({
  label,
  checked,
  onChange,
  disabled = false,
}) => {
  return (
    <div>
      <FormControlLabel
      control={<Checkbox checked={checked} onChange={onChange} disabled={disabled} />}
      label={<span style={{fontSize:'0.9rem', textTransform:'capitalize'}}>{label}</span>}
    />
    </div>
  );
};

export default CheckboxWithLabel;
