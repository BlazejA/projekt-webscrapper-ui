import "@/App.scss";

import React from "react";

import ProductListView from "@/views/ProductListView";
import { ThemeProvider } from "@mui/material/styles";
import { customTheme } from "@/styles/globalStyles";

function App(): JSX.Element {
  return (
    <ThemeProvider theme={customTheme}>
      <ProductListView />
    </ThemeProvider>
  );
}

export default App;
