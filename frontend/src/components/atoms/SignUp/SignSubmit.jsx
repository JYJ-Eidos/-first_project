import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignSubmit = () => {
  const navigate = useNavigate();
  const HOST = import.meta.env.VITE_API_HOST;
  const { email, password, nickname, birthday, phoneNumber, profileImage } =
    useSelector((state) => state.signUpReducer);

  const onClickHandler = (e) => {
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
    console.log(data);
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

  return <button onClick={onClickHandler}>SignSubmit</button>;
};

export default SignSubmit;
