import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  setUser,
  turnOnState,
  turnOffState,
  resetState,
} from '../../../pages/SignUp/SignUpSlice';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import { needValidationEndpoints, validateData } from '../../../utils/validate';

const SignInput = ({ type, name, placeholder }) => {
  const dispatch = useDispatch();
  const { password, checkPassword } = useSelector(
    (state) => state.signUpReducer.userData
  );
  const inputState = useSelector((state) => state.signUpReducer.inputState);
  const HOST = import.meta.env.VITE_API_HOST;

  useEffect(() => {
    dispatch(resetState());
  }, [dispatch]);

  const onChangeUserData = (e) => {
    const { name, value } = e.currentTarget;
    dispatch(setUser({ name, value }));
  };

  const onBlurInput = (e) => {
    const { name, value } = e.currentTarget;

    if (name === 'checkPassword') {
      if (password !== checkPassword) {
        dispatch(turnOnState({ name }));
      } else {
        dispatch(turnOffState({ name }));
      }
    } else if (!validateData[name](value)) {
      dispatch(turnOnState({ name }));
    } else {
      dispatch(turnOffState({ name }));
    }

    if (
      Object.keys(needValidationEndpoints).includes(name) &&
      validateData[name](value)
    ) {
      const url = `${HOST}/users${needValidationEndpoints[name]}`;
      const data = { [name]: value };
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      axios
        .post(url, data, config)
        .then((res) => {
          if (!res.data.success) {
            dispatch(turnOnState({ name }));
          } else {
            dispatch(turnOffState({ name }));
          }
        })
        .catch((err) => {
          const { message } = err.response.data;
          console.error(message);
        });
    }
  };

  return (
    <Input
      type={type}
      name={name}
      onChange={onChangeUserData}
      onBlur={onBlurInput}
      placeholder={placeholder}
      $inputState={inputState[name]}
    />
  );
};

SignInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default SignInput;

const Input = styled.input`
  width: 100%;
  height: 50px;
  border: 0.13rem solid ${(props) => (props.$inputState ? 'red' : 'gray')};
  border-radius: 10px;
`;
