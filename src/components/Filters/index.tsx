import { useTypedDispatch, useTypedSelector } from "@/store";
import {
  updateNameQueryFilter,
  updateShopNamesFilter,
} from "@/store/filters.slice";
import { shopNamesFilters } from "@/utils/filters";
import { Tune } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

import styles from "./styles.module.scss";

const Filters = (): JSX.Element => {
  const dispatch = useTypedDispatch();
  const { shopNames, nameQuery } = useTypedSelector((state) => state.filters);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  const handleShopNamesChange = (event: any) => {
    dispatch(updateShopNamesFilter(event.target.value));
  };

  const handleNameQueryChange = (event: any) => {
    dispatch(updateNameQueryFilter(event.target.value));
  };

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        <div className={styles.left}>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Sklep</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              multiple
              value={shopNames}
              label="Sklep"
              onChange={handleShopNamesChange}
              size="small"
              sx={{ width: "300px" }}
            >
              {shopNamesFilters.map((shopNamesFilter) => (
                <MenuItem
                  key={shopNamesFilter.value}
                  value={shopNamesFilter.value}
                >
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
            sx={{ width: "400px" }}
            onChange={handleNameQueryChange}
          />
        </div>
        <IconButton
          color={showAdvancedFilters ? "secondary" : "primary"}
          onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
        >
          <Tune />
        </IconButton>
      </div>
      {showAdvancedFilters && (
        <div className={styles.advancedFilters}>
          <span>Tu będą filtry dodatkowe</span>
        </div>
      )}
    </div>
  );
};

export default Filters;
