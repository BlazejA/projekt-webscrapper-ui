import { useTypedDispatch, useTypedSelector } from "@/store";
import { updateShopNamesFilter } from "@/store/filters.slice";
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
import React from "react";

import styles from "./styles.module.scss";

const Filters = (): JSX.Element => {
  const dispatch = useTypedDispatch();
  const { shopNames } = useTypedSelector((state) => state.filters);

  const handleChange = (event: any) => {
    dispatch(updateShopNamesFilter(event.target.value));
  };

  return (
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
            onChange={handleChange}
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
          placeholder="Wyszukaj po nazwie..."
          variant="outlined"
          size="small"
          sx={{ width: "400px" }}
        />
      </div>
      <IconButton>
        <Tune />
      </IconButton>
    </div>
  );
};

export default Filters;
