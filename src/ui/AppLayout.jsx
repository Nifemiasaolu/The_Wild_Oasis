import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import { useState } from "react";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;

  @media screen and (max-width: 960px) {
    /* grid-template-columns: 15rem 1fr ; */
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
  }
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow((show) => !show);
  }

  function closeMobileMenu(){
    setShow(false);
  }

  return (
    <StyledAppLayout>
      <Header show={show} onClick={handleClick}/>
      <Sidebar show={show} onClick={closeMobileMenu}/>
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;

///////
