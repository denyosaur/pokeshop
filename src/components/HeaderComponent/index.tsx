import Navbar from '../Navbar';
import SearchBar from '../SearchBar';
import UtilityBar from '../UtilityBar';

import {
  HeaderContainer,
  MobileSearchButton,
  MobileSearchContainer,
  NavbarContainer,
} from './styledComponents';

const HeaderComponent: React.FC = () => {

  return (
    <HeaderContainer>
      <UtilityBar />
      <NavbarContainer>
        <Navbar />
      </NavbarContainer>
      <MobileSearchContainer>
        <MobileSearchButton>
          <SearchBar value="" />
        </MobileSearchButton>
      </MobileSearchContainer>
    </HeaderContainer>
  )
}

export default HeaderComponent;
