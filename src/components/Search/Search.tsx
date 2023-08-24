import React, { ChangeEvent, useEffect, useState } from 'react';
import styles from './Search.module.scss';
import CloseIcon from '@mui/icons-material/Close';
import { useDebounce } from '../../utils/debounce';
import { useAppDispatch } from '../../store/hooks';
import { onChangeSearch } from '../../store/features/filterSlice';

interface SearchProps {}

const Search = ({}: SearchProps) => {
  const [value, setValue] = useState('');
  const debounced = useDebounce(value);
  const dispatch = useAppDispatch();

  const hadnleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    dispatch(onChangeSearch(debounced));
  }, [debounced]);

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Введите название фильма"
        value={value}
        onChange={hadnleOnChange}
      />
      {value && (
        <div className={styles.close} onClick={() => setValue('')}>
          <CloseIcon htmlColor="#909090" style={{ height: '100%' }} />
        </div>
      )}
    </div>
  );
};

export default Search;
