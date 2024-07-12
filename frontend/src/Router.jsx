import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users/sign-up' element={<SignUp />} />
        <Route path='/users/Login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
