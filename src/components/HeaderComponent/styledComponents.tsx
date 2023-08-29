import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  height: 3.3rem;
  width: 100%;
  background-color: #FFFFFF;
  
`;

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #FFFFFF;
  height: 10.95rem;
  overflow: hidden;
  z-index: 99;
  box-shadow: 
    rgba(0, 0, 0, 0.04) 0px -1px 2px, 
    rgba(0, 0, 0, 0.04) 0px 1px 2px, 
    rgba(0, 0, 0, 0.04) 0px 3px 4px;
`;
