import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const SignSubmit = () => {
  const navigate = useNavigate();
  const HOST = import.meta.env.VITE_API_HOST;
  const { userData } = useSelector((state) => state.signUpReducer);
  const { hasFocus, inputState } = useSelector((state) => state.signUpReducer);

  const isButtonDisable =
    Object.values(hasFocus).includes(false) ||
    Object.values(inputState).includes(true);

  const onClickHandler = (e) => {
    const { email, password, nickname, birthday, phoneNumber, profileImage } =
      userData;
    e.preventDefault();
    const url = `${HOST}/users/signup`;
    const data = {
      email,
      password,
      nickname,
      birthday,
      phone_number: phoneNumber,
      profile_image: profileImage,
    };

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    axios
      .post(url, data, config)
      .then((res) => {
        if (res.data.success) {
          alert('회원가입 완료');
          navigate('/');
        }
      })
      .catch((err) => {
        const { message } = err.response.data;
        console.error(message);
      });
  };

  return (
    <Button onClick={onClickHandler} disabled={isButtonDisable}>
      SignSubmit
    </Button>
  );
};

export default SignSubmit;

const Button = styled.button`
  width: 90%;
  height: 40px;
  margin-top: 20px;
`;
