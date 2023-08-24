import React from 'react';
import styles from './Loader.module.scss';
import { CircularProgress } from '@mui/material';

const Loader: React.FC = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <div>
        <CircularProgress />
      </div>
    </div>
  );
};
export default Loader;
