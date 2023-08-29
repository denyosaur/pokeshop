import CartIcon from '../../assets/CartIcon';
import HamburgerIcon from '../../assets/HamburgerIcon';
import PokeballIcon from '../../assets/PokeballIcon';
import ProfileIcon from '../../assets/ProfileIcon';

import {
  CartContainer,
  HamburgerContainer,
  IconContainer,
  LogoWrapper,
  NavbarContainer,
  ProfileIconContainer,
  SearchBarContainer,
} from './styledComponents';

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <IconContainer>
        <PokeballIcon />
      </IconContainer>
      <HamburgerContainer>
        <HamburgerIcon />
      </HamburgerContainer>
      <ProfileIconContainer>
        <ProfileIcon />
      </ProfileIconContainer>
      <CartContainer>
        <CartIcon />
      </CartContainer>
    </NavbarContainer>
  )
}

export default Navbar;
