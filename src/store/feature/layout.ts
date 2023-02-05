import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ILayout {
  isFirstLoading: boolean;
}

const initialState: ILayout = {
  isFirstLoading: true,
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setFirstLoading: (state, action: PayloadAction<any>) => {
      state.isFirstLoading = action.payload;
    },
  },
});

export const layoutActions = layoutSlice.actions;

export default layoutSlice.reducer;
