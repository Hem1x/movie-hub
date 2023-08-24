import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import React from 'react';
import { useAppDispatch } from '../../store/hooks';
import { onChangeGenresId } from '../../store/features/filterSlice';
import { useGetGenresQuery } from '../../store/moviesApi/moviesApi';

const SelectByGenre = () => {
  const dipatch = useAppDispatch();
  const { data } = useGetGenresQuery(null);

  const [genre, setGenre] = React.useState(1);

  const handleChange = (event: SelectChangeEvent) => {
    setGenre(+event.target.value);
    dipatch(onChangeGenresId(+event.target.value));
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Жанр</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={genre.toString()}
          label="Жанр"
          onChange={handleChange}>
          {data?.genres.map((genre) => (
            <MenuItem key={genre.id} value={genre.id}>
              {genre.genre}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectByGenre;
