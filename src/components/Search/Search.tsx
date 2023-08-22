import React, { useState } from 'react';
import styles from './Search.module.scss';
import CloseIcon from '@mui/icons-material/Close';

interface SearchProps {}

const Search = ({}: SearchProps) => {
  const [value, setValue] = useState('');
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Введите название фильма"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {value && (
        <div className={styles.close} onClick={() => setValue('')}>
          <CloseIcon htmlColor="#909090" />
        </div>
      )}
    </div>
  );
};

export default Search;
