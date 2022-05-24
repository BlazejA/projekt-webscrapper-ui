import { productsApi } from './products.service';

export const apiReducers = {
  [productsApi.reducerPath]: productsApi.reducer,
};

export const apiMiddlewares = [productsApi.middleware];
