import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  background-color: #FFFFFF;
  display: flex;
  flex-direction: row;
  height: 3.3rem;
  width: 100%;
`;

export const MobileSearchContainer = styled.div`
  align-items: center;
  bottom: 3%;
  display: flex;
  height: auto;
  justify-content: center;
  padding: 1rem;
  position: relative;
  width: auto;
`;

export const MobileSearchButton = styled.button`
  background-color: #FFFFFF;
  border: none;
  width: 100%;
  padding: 0;
`;

export const HeaderContainer = styled.header`
  background-color: #FFFFFF;
  height: 10.95rem;
  left: 0;
  overflow: hidden;
  position: relative;
  top: 0;
  width: 100%;
  z-index: 99;
  box-shadow: 
    rgba(0, 0, 0, 0.04) 0px -1px 2px, 
    rgba(0, 0, 0, 0.04) 0px 1px 2px, 
    rgba(0, 0, 0, 0.04) 0px 3px 4px;
`;
