import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: {
    email: '',
    password: '',
    checkPassword: '',
    nickname: '',
    phoneNumber: '',
    profileImage: '',
  },
  inputState: {
    email: false,
    password: false,
    checkPassword: false,
    nickname: false,
    phoneNumber: false,
  },
};

const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { name, value } = action.payload;
      state.userData[name] = value;
    },

    turnOnState: (state, action) => {
      const { name } = action.payload;
      state.inputState[name] = true;
    },

    turnOffState: (state, action) => {
      const { name } = action.payload;
      state.inputState[name] = false;
    },
    resetState: () => {
      return initialState;
    },
  },
});

export const { setUser, turnOnState, turnOffState, resetState } =
  signUpSlice.actions;
export default signUpSlice.reducer;
