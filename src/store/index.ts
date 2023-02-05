import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './feature/auth';
import LayoutReducer from './feature/layout';

export const store = configureStore({
  reducer: {
    UserReducer,
    LayoutReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
