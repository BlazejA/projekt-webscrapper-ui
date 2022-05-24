import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import React from 'react';

import { useTypedDispatch, useTypedSelector } from '@/store';
import {
  updateCategoryFilter,
  updateDiscountOnlyFilter,
  updatePriceFilter,
} from '@/store/filters.slice';

import styles from './styles.module.scss';

const AdvancedFilters = (): JSX.Element => {
  const dispatch = useTypedDispatch();
  const { category, price, discountOnly } = useTypedSelector(state => state.filters);

  const clearAdvancedFilters = (): void => {
    dispatch(updateCategoryFilter(''));
    dispatch(updatePriceFilter({ min: '', max: '' }));
    dispatch(updateDiscountOnlyFilter(false));
  };

  return (
    <>
      <div className={styles.advancedFilters}>
        <FormControl size="small" sx={{ marginBottom: '20px' }}>
          <InputLabel id="demo-select-small">Kategoria</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={category}
            onChange={event => dispatch(updateCategoryFilter(event.target.value))}
            label="Kategoria"
            sx={{ width: '300px' }}>
            <MenuItem value="">Brak</MenuItem>
            <MenuItem value="smartphone">Telefon</MenuItem>
            <MenuItem value="laptop">Laptop</MenuItem>
          </Select>
        </FormControl>
        <p>Cena</p>
        <div className={styles.priceWrapper}>
          <TextField
            value={price.min}
            placeholder="od"
            variant="outlined"
            size="small"
            type="number"
            InputProps={{
              endAdornment: <InputAdornment position="end">zł</InputAdornment>,
            }}
            onChange={e => dispatch(updatePriceFilter({ ...price, min: e.target.value }))}
          />
          <span>-</span>
          <TextField
            value={price.max}
            placeholder="do"
            variant="outlined"
            type="number"
            size="small"
            InputProps={{
              endAdornment: <InputAdornment position="end">zł</InputAdornment>,
            }}
            onChange={e => dispatch(updatePriceFilter({ ...price, max: e.target.value }))}
          />
        </div>
        <FormGroup sx={{ width: 'fit-content' }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={discountOnly}
                onChange={e => dispatch(updateDiscountOnlyFilter(e.target.checked))}
              />
            }
            label="Wyświetl tylko produkty w promocji"
          />
        </FormGroup>
      </div>
      <div className={styles.footer}>
        <Button onClick={clearAdvancedFilters} variant="contained">
          <strong>Wyczyść</strong>
        </Button>
      </div>
    </>
  );
};

export default AdvancedFilters;
