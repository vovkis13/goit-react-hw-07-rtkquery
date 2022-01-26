import {
  combineReducers,
  configureStore,
  createReducer,
  createAction,
} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactsApi } from 'services/api';

export const changeFilter = createAction('filter/Change');
export const getFilter = state => state.filter;

const rootReducer = combineReducers({
  [contactsApi.reducerPath]: contactsApi.reducer,
  filter: createReducer('', {
    [changeFilter]: (_state, { payload }) => payload,
  }),
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(contactsApi.middleware),
});
export default store;

setupListeners(store.dispatch);
