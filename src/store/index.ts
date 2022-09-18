import { configureStore } from '@reduxjs/toolkit';

import { productApi } from './product/product.api';

export const store = configureStore({
  reducer: { [productApi.reducerPath]: productApi.reducer },
});
