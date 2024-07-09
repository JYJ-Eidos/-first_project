import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignSubmit = () => {
  const navigate = useNavigate();
  const HOST = import.meta.env.VITE_API_HOST;
  const { email, password, nickname, birthday, phoneNumber } = useSelector(
    (state) => state.signUpReducer
  );

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const url = `${HOST}/users/signup`;
    const data = {
      email,
      password,
      nickname,
      birthday,
      phoneNumber,
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

  return <button onSubmit={onSubmitHandler}>SignSubmit</button>;
};

export default SignSubmit;
