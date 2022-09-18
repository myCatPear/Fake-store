import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IProduct } from './product.types';

const baseUrl = 'https://fakestoreapi.com/';
const defaultLimit = 5;

export const productApi = createApi({
  reducerPath: 'api/products',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: build => ({
    getProducts: build.query<IProduct[], number>({
      query: (limit = defaultLimit) => `products?limit=${limit}`,
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
