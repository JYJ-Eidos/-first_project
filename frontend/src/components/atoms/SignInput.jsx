import PropTypes from 'prop-types';
import styled from 'styled-components';

const SignInput = ({ type, placeholder }) => {
  return <Input type={type} placeholder={placeholder} />;
};

SignInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default SignInput;

const Input = styled.input`
  width: 100%;
  height: 50px;
`;
