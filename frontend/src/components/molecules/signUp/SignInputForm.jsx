import PropTypes from 'prop-types';
import styled from 'styled-components';
import SignInput from '../../atoms/SignUp/SignInput';
import InputFormTitle from '../../atoms/InputFormTitle';
import SignResultMsg from '../../atoms/SignUp/SignResultMsg';

const SignInputForm = ({
  type,
  name,
  title,
  placeholder,
  maxLength,
  successMsg,
  failMsg,
}) => {
  return (
    <Div>
      <InputFormTitle title={title} />
      <SignInput
        type={type}
        name={name}
        placeholder={placeholder}
        maxLength={maxLength}
      />
      <SignResultMsg name={name} successMsg={successMsg} failMsg={failMsg} />
    </Div>
  );
};

SignInputForm.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  maxLength: PropTypes.string.isRequired,
  successMsg: PropTypes.string.isRequired,
  failMsg: PropTypes.string.isRequired,
};

export default SignInputForm;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
`;
