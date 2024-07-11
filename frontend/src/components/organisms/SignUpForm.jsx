import styled from 'styled-components';
import SignInputForm from '../molecules/SignInputForm';
import SignSubmit from '../atoms/SignUp/SignSubmit';

const SignUpForm = () => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <Form onKeyDown={handleKeyDown}>
      <SignInputForm
        type='text'
        name='email'
        title='이메일'
        placeholder='example@example.com'
        successMsg='사용 가능한 이메일입니다.'
        failMsg='이미 사용중인 이메일입니다.'
      />
      <SignInputForm
        type='password'
        name='password'
        title='비밀번호'
        placeholder='8~16자리 영문 대소문자, 숫자, 특수문자 조합'
        successMsg='사용 가능한 비밀번호입니다.'
        failMsg='사용 불가능한 비밀번호입니다.'
      />
      <SignInputForm
        type='password'
        name='checkPassword'
        title='비밀번호 확인'
        placeholder='8~16자리 영문 대소문자, 숫자, 특수문자 조합'
        successMsg='비밀번호가 일치합니다.'
        failMsg='비밀번호가 일치하지 않습니다.'
      />
      <SignInputForm
        type='text'
        name='nickname'
        title='닉네임'
        placeholder='2~20자리 영문, 한글, 숫자 조합'
        successMsg='사용 가능한 닉네임입니다.'
        failMsg='이미 사용중인 닉네임입니다.'
      />
      <SignInputForm
        type='number'
        name='phoneNumber'
        title='휴대폰 번호'
        placeholder="'-'빼고 숫자만 입력"
        successMsg='사용 가능한 번호입니다.'
        failMsg='이미 사용중인 번호입니다.'
      />
      <SignSubmit />
    </Form>
  );
};

export default SignUpForm;

const Form = styled.form`
  width: 420px;
`;
