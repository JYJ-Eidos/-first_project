import { createSlice } from '@reduxjs/toolkit';

const signUpSlice = createSlice({
  name: 'signUp',
  initialState: {
    email: '',
    password: '',
    checkPassword: '',
    nickname: '',
    phoneNumber: '',
    profileImage: '',
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
