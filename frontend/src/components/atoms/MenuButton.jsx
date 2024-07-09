import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MenuButton = ({ children, href }) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(`${href}`);
  };
  return <Button onClick={onClickHandler}>{children}</Button>;
};

MenuButton.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string.isRequired,
};

export default MenuButton;

const Button = styled.button``;
