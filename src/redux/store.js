import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { contactAPI } from './contactsAPI/contacts-API';
import { filterSlice } from 'redux/contactsAPI/filter-slice';
import authSlice from './authAPI/auth-slice';
import storage from 'redux-persist/lib/storage';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  contactAPI.middleware,
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice),
    [contactAPI.reducerPath]: contactAPI.reducer,
    [filterSlice.name]: filterSlice.reducer,
  },
  middleware,

  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
