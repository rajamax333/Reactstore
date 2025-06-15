import React from 'react';
import { Box, Skeleton } from '@mui/material';

interface SkimmerProps {
  width?: number | string;
  height?: number | string;
  variant?: 'text' | 'rectangular' | 'circular';
}

const Skimmer: React.FC<SkimmerProps> = ({
  width = '100%',
  height = 40,
  variant = 'rectangular',
}) => {
  return (
    <Box sx={{ marginBottom: 1 }}>
      <Skeleton variant={variant} width={width} height={height} />
    </Box>
  );
};

export default Skimmer;
