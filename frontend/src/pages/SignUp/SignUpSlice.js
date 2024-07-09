import { createSlice } from '@reduxjs/toolkit';

const signUpSlice = createSlice({
  name: 'signUp',
  initialState: {
    email: '',
    password: '',
    checkPassword: '',
    nickname: '',
    birthday: '',
    phoneNumber: '',
  },
  reducers: {
    setUser: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
});

export const { setUser } = signUpSlice.actions;
export default signUpSlice.reducer;
