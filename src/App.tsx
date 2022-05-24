import '@/App.scss';

import { ThemeProvider } from '@mui/material/styles';
import React from 'react';

import { customTheme } from '@/styles/globalStyles';
import ProductListView from '@/views/ProductListView';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={customTheme}>
      <ProductListView />
    </ThemeProvider>
  );
}

export default App;
