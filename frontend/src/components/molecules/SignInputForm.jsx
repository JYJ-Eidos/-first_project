import PropTypes from 'prop-types';
import styled from 'styled-components';
import SignInput from '../atoms/SignInput';
import InputFormTitle from '../atoms/InputFormTitle';
import SignResultMsg from '../atoms/SignResultMsg';

const SignInputForm = ({ type, title, placeholder, successMsg, failMsg }) => {
  return (
    <Div>
      <InputFormTitle title={title} />
      <SignInput placeholder={placeholder} type={type} />
      <SignResultMsg successMsg={successMsg} failMsg={failMsg} />
    </Div>
  );
};

SignInputForm.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  successMsg: PropTypes.string.isRequired,
  failMsg: PropTypes.string.isRequired,
};

export default SignInputForm;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
