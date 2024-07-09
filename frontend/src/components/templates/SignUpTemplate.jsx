import styled from 'styled-components';
import Header from '../organisms/Header';
import SignUpForm from '../organisms/SignUpForm';

const SignUpTemplate = () => {
  return (
    <Template>
      <Header />
      <SignUpForm />
    </Template>
  );
};

export default SignUpTemplate;

const Template = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
