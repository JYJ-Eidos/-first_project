import { configureStore } from '@reduxjs/toolkit';
import signUpReducer from '../pages/SignUp/SignUpSlice';

export const store = configureStore({
  reducer: { signUpReducer },
});
