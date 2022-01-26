import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const url = '/contacts';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://61c9aac920ac1c0017ed8d58.mockapi.io/contacts',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    getItems: builder.query({ query: () => url, providesTags: ['Contact'] }),
    postItem: builder.mutation({
      query: contact => ({ url, method: 'POST', contact }),
      invalidatesTags: ['Contact'],
    }),
    deleteItem: builder.mutation({
      query: id => ({ url: `${url}/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const { useGetItemsQuery, usePostItemMutation, useDeleteItemMutation } =
  contactsApi;
