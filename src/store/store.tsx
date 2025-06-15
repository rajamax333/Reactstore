import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from '../reducer/filterreducer'; // adjust pathss

export const store = configureStore({
  reducer: {
    // 👇 cast the reducer to match Redux Toolkit's expected type
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
