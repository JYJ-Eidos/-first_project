import styled from 'styled-components';
import NavList from '../molecules/NavList';
import SignList from '../molecules/SignList';

const Header = () => {
  return (
    <PageHeader>
      <NavList />
      <SignList />
    </PageHeader>
  );
};

export default Header;

const PageHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4rem;
  padding: 0 1.2rem;
`;
