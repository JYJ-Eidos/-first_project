import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputFormTitle = ({ title }) => {
  return <Strong>{title}</Strong>;
};

InputFormTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default InputFormTitle;

const Strong = styled.strong`
  margin: 5px;
  font-size: 16px;
`;
