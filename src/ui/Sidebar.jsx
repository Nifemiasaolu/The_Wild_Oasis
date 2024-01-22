import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader"

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    opacity: ${({ show }) => (show ? 1 : 0)};
    visibility: ${({show})=> show? "visible" : 'hidden'};
    transform: translateY(${({show})=> show ? "0" : "10px"});
    z-index: 1;
  }
`;

function Sidebar({ show, onClick }) {
  return (
    <StyledSidebar show={show} onClick={onClick}>
      <Logo />
      <MainNav show={show}/>

      <Uploader/>
    </StyledSidebar>
  );
}

export default Sidebar;

// 