import createTheme from "@mui/material/styles/createTheme";

import { colors } from "./colors";

export const customTheme = createTheme({
  palette: {
    primary: {
      main: colors.black,
      contrastText: "white",
    },
    secondary: {
      main: colors.lightGray,
      contrastText: "white",
    },
  },
});
