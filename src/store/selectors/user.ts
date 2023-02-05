import type { RootState } from '@/store/index';

export const usernameSelector = (state: RootState) => state.UserReducer.name;

export const isFirstLoadingSelector = (state: RootState) => state.LayoutReducer.isFirstLoading;
