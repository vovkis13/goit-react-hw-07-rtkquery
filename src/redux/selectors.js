import { createSelector } from '@reduxjs/toolkit';
import { contactsApi } from 'services/api';

export const getContacts = contactsApi.endpoints.getItems.select();
export const getFilter = state => state.filter;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  ({ data, isSuccess }, filterValue) => {
    if (isSuccess)
      return data.filter(({ name }) =>
        name.toLowerCase().includes(filterValue.toLowerCase()),
      );
    return [];
  },
);
