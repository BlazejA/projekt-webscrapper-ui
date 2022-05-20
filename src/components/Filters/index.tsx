import { Tune } from '@mui/icons-material';
import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';

import { useTypedDispatch, useTypedSelector } from '@/store';
import {
  updateCategoryFilter,
  updateNameQueryFilter,
  updatePricesFilter,
  updateShopNamesFilter,
} from '@/store/filters.slice';
import { shopNamesFilters } from '@/utils/filters';

import styles from './styles.module.scss';

const Filters = (): JSX.Element => {
  const dispatch = useTypedDispatch();
  const { shopNames, nameQuery, category, prices } = useTypedSelector(state => state.filters);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleShopNamesChange = (event: any): void => {
    dispatch(updateShopNamesFilter(event.target.value));
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleNameQueryChange = (event: any): void => {
    dispatch(updateNameQueryFilter(event.target.value));
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCategoryChange = (event: any): void => {
    dispatch(updateCategoryFilter(event.target.value));
  };

  const handlePricesChange = (event: Event, newValue: number | number[]): void => {
    dispatch(updatePricesFilter(newValue as number[]));
  };

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        <div className={styles.left}>
          <FormControl size="small">
            <InputLabel id="demo-select-small">Sklep</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              multiple
              value={shopNames}
              label="Sklep"
              onChange={handleShopNamesChange}
              sx={{ width: '300px' }}>
              {shopNamesFilters.map(shopNamesFilter => (
                <MenuItem key={shopNamesFilter.value} value={shopNamesFilter.value}>
                  {shopNamesFilter.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            value={nameQuery}
            placeholder="Wyszukaj po nazwie..."
            variant="outlined"
            size="small"
            sx={{ width: '400px' }}
            onChange={handleNameQueryChange}
          />
        </div>
        <IconButton
          color={showAdvancedFilters ? 'secondary' : 'primary'}
          onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}>
          <Tune />
        </IconButton>
      </div>
      {showAdvancedFilters && (
        <div className={styles.advancedFilters}>
          <div>
            <Slider
              getAriaLabel={() => 'Temperature range'}
              defaultValue={prices}
              onChange={handlePricesChange}
              valueLabelDisplay="auto"
              min={prices[0]}
              max={prices[1]}
              // getAriaValueText={valuetext}
            />
          </div>
          <FormControl size="small">
            <InputLabel id="demo-select-small">Kategoria</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={category}
              onChange={handleCategoryChange}
              label="Kategoria"
              sx={{ width: '300px' }}>
              <MenuItem value="">Brak</MenuItem>
              <MenuItem value="smartphone">Telefon</MenuItem>
              <MenuItem value="laptop">Laptop</MenuItem>
            </Select>
          </FormControl>
        </div>
      )}
    </div>
  );
};

export default Filters;
