import UtilityBar from '../UtilityBar';
import Navbar from '../Navbar';

import { HeaderContainer, NavbarContainer } from './styledComponents';

const HeaderComponent: React.FC = () => {

  return (
    <HeaderContainer>
      <UtilityBar />
      <NavbarContainer>
        <Navbar />
      </NavbarContainer>
    </HeaderContainer>
  )
}

export default HeaderComponent;
