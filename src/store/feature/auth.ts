import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getToken } from '@/utils';

interface IAuth {
  username: string;
  password: string;
  name: string;
  image: string;
  roles: string[];
  isLoggedIn: boolean;
  token: string;
}

const initialState: IAuth = {
  username: '',
  password: '',
  name: '',
  image: '',
  roles: [],
  isLoggedIn: false,
  token: getToken(),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<any>) => {},
    loginSuccess: (state, action: PayloadAction<any>) => {},
    getInfo: (state, action: PayloadAction<any>) => {},
    logout: (state) => {},
    resetUserData: () => initialState,
  },
  extraReducers: (builder) => {},
});

export const authActions = userSlice.actions;

export default userSlice.reducer;
