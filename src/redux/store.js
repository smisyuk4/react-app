import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { authSlice } from './auth/authReducer';
// import { postSlice } from './post/postReducer';

const rootReducers = combineReducers({
  [authSlice.name]: authSlice.reducer,
//   [postSlice.name]: postSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});