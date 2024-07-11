import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SignResultMsg = ({ name, successMsg, failMsg }) => {
  const hasFocus = useSelector((state) => state.signUpReducer.hasFocus);
  const inputState = useSelector((state) => state.signUpReducer.inputState);
  const message = inputState[name] ? failMsg : successMsg;

  return (
    <MsgSpan $isVisible={hasFocus[name]} $inputState={inputState[name]}>
      {message}
    </MsgSpan>
  );
};

SignResultMsg.propTypes = {
  name: PropTypes.string.isRequired,
  successMsg: PropTypes.string.isRequired,
  failMsg: PropTypes.string.isRequired,
};

export default SignResultMsg;

const MsgSpan = styled.span`
  margin-top: 8px;
  color: ${(props) => (props.$inputState ? 'red' : 'blue')};
  font-size: 0.9rem;
  display: ${(props) => (props.$isVisible ? 'block' : 'none')};
`;
