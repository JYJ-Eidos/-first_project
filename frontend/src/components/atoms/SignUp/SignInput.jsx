import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../pages/SignUp/SignUpSlice';

const SignInput = ({ type, name, placeholder }) => {
  const dispatch = useDispatch();

  const onChangeUserData = (e) => {
    const { name, value } = e.currentTarget;
    dispatch(setUser({ name, value }));
  };

  return (
    <Input
      type={type}
      name={name}
      onChange={onChangeUserData}
      placeholder={placeholder}
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
`;
