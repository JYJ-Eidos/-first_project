import MenuButton from '../atoms/MenuButton';

const NavList = () => {
  return (
    <div>
      <MenuButton href='/'>Home</MenuButton>
      <MenuButton href='/'>메뉴 1</MenuButton>
      <MenuButton href='/'>메뉴 2</MenuButton>
    </div>
  );
};

export default NavList;
