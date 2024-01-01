import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
import { FaTimes } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";

const BigContainer = styled.div`

@media screen and (max-width: 960px) {
  
  display: flex;
  align-items: center;
  justify-content: end;
  background-color: var(--color-grey-0);
  /* vertical-align: middle; */
}

`;

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  align-items: center;
  justify-content: end;
  gap: 2.4rem;

  @media screen and (max-width: 768px) {
    padding-right: 1rem;
    /* padding-top: 0; */
    gap: 0rem;
  }
`;

const MobileIcon = styled.div`
  display: none;
  z-index: 50;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(100%, 60%);
    font-size: 2rem;
    cursor: pointer;
    z-index: 50;
  }
`;

function Header({ show, onClick }) {
  return (
    <BigContainer>
      <MobileIcon onClick={onClick}>
        {show ? <FaTimes /> : <CgMenuRight />}
      </MobileIcon>

      <StyledHeader>
        <UserAvatar />
        <HeaderMenu />
      </StyledHeader>
    </BigContainer>
  );
}

export default Header;

// //