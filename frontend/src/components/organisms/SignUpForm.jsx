import styled from 'styled-components';
import SignInputForm from '../molecules/SignInputForm';

const SignUpForm = () => {
  return (
    <Form>
      <SignInputForm
        type='text'
        title='이메일'
        placeholder='example@example.com'
        successMsg='사용 가능한 이메일입니다.'
        failMsg='이미 사용중인 이메일입니다.'
      />
      <SignInputForm
        type='password'
        title='비밀번호'
        placeholder='8~16자리 영문 대소문자, 숫자, 특수문자 조합'
        successMsg='사용 가능한 비밀번호입니다.'
        failMsg='사용 불가능한 비밀번호입니다.'
      />
      <SignInputForm
        type='password'
        title='비밀번호 확인'
        placeholder='8~16자리 영문 대소문자, 숫자, 특수문자 조합'
        successMsg='비밀번호가 일치합니다.'
        failMsg='비밀번호가 일치하지 않습니다.'
      />
      <SignInputForm
        type='text'
        title='닉네임'
        placeholder='2~30자리 영문, 한글, 숫자 조합'
        successMsg='사용 가능한 닉네임입니다.'
        failMsg='이미 사용중인 닉네임입니다.'
      />
      <SignInputForm
        type='number'
        title='생년월일'
        placeholder='YYYYMMDD'
        successMsg='만 19세 이상입니다.'
        failMsg='만 19세 이하입니다.'
      />
      <SignInputForm
        type='text'
        title='휴대폰 번호'
        placeholder="'-'빼고 숫자만 입력"
        successMsg='사용 가능한 번호입니다.'
        failMsg='이미 사용중인 번호입니다.'
      />
    </Form>
  );
};

export default SignUpForm;

const Form = styled.form`
  width: 420px;
`;
