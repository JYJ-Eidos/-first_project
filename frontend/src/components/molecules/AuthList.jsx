import MenuButton from '../atoms/MenuButton';

const AuthList = () => {
  return (
    <div>
      <MenuButton href='/users/login'>로그인</MenuButton>
      <MenuButton href='/users/sign-up'>회원가입</MenuButton>
    </div>
  );
};

export default AuthList;
