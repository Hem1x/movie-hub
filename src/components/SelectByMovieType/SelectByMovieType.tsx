import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import React from 'react';
import { movieTypeEnum } from '../../store/features/types';
import { useAppDispatch } from '../../store/hooks';
import { onChangeMovieType } from '../../store/features/filterSlice';

const SelectByMovieType = () => {
  const [order, setOrder] = React.useState(movieTypeEnum.ALL);
  const dipatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    setOrder(event.target.value as movieTypeEnum);
    dipatch(onChangeMovieType(event.target.value as movieTypeEnum));
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Тип</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={order}
          label="Тип"
          onChange={handleChange}>
          <MenuItem value={movieTypeEnum.ALL}>Все</MenuItem>
          <MenuItem value={movieTypeEnum.FILM}>Фильмы</MenuItem>
          <MenuItem value={movieTypeEnum.TV_SERIES}>Телесериалы</MenuItem>
          <MenuItem value={movieTypeEnum.TV_SHOW}>ТВ-шоу</MenuItem>
          <MenuItem value={movieTypeEnum.MINI_SERIES}>Мини-сериалы</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectByMovieType;
