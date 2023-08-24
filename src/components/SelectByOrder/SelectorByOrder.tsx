import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import React from 'react';
import { orderEnum } from '../../store/features/types';
import { useAppDispatch } from '../../store/hooks';
import { onChangeOrder } from '../../store/features/filterSlice';

const SelectorByOrder = () => {
  const [order, setOrder] = React.useState(orderEnum.RATING);
  const dipatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    setOrder(event.target.value as orderEnum);
    dipatch(onChangeOrder(event.target.value as orderEnum));
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Сортировка</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={order}
          label="Сортировка по:"
          onChange={handleChange}>
          <MenuItem value={orderEnum.RATING}>Рейтингу</MenuItem>
          <MenuItem value={orderEnum.NUM_VOTE}>Самые обсуждаемые</MenuItem>
          <MenuItem value={orderEnum.YEAR}>По дате</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectorByOrder;
