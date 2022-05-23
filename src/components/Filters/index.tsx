import { Close, Tune } from '@mui/icons-material';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';

import { ShopNameModel } from '@/models/shopNameModel';
import { useTypedDispatch, useTypedSelector } from '@/store';
import {
  updateNameQueryFilter,
  updateShopNamesFilter,
  updateSortingType,
} from '@/store/filters.slice';
import { shopNamesFilters } from '@/utils/filters';

import AdvancedFilters from './components/AdvancedFilters';
import styles from './styles.module.scss';

const Filters = (): JSX.Element => {
  const dispatch = useTypedDispatch();
  const { shopNames, nameQuery, sortingType } = useTypedSelector(state => state.filters);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

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
              onChange={event =>
                dispatch(updateShopNamesFilter(event.target.value as ShopNameModel[]))
              }
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
            onChange={event => dispatch(updateNameQueryFilter(event.target.value))}
          />
        </div>
        <div className={styles.right}>
          <FormControl size="small">
            <InputLabel id="demo-select-small">Sortuj</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={sortingType}
              label="Sortuj"
              onChange={event => dispatch(updateSortingType(event.target.value))}
              sx={{ width: '150px' }}>
              <MenuItem value="">Brak</MenuItem>
              <MenuItem value="asc">Cena rosnąco</MenuItem>
              <MenuItem value="desc">Cena malejąco</MenuItem>
            </Select>
          </FormControl>
          <IconButton
            color={showAdvancedFilters ? 'secondary' : 'primary'}
            onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}>
            <Tune />
          </IconButton>
        </div>
      </div>

      <Dialog
        open={showAdvancedFilters}
        onClose={() => setShowAdvancedFilters(false)}
        maxWidth="xl"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">
          <div className={styles.dialogTitleWrapper}>
            <span>Zaawansowane filtry</span>
            <IconButton color="primary" onClick={() => setShowAdvancedFilters(false)}>
              <Close />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent sx={{ paddingBottom: 'unset' }}>
          <AdvancedFilters />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Filters;
