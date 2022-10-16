import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 295px 1fr;
  height: 100vh;
  @media (max-width: 1150px) {
    grid-template-columns: 250px 1fr;
  }
`;

const Page = styled.main`
  overflow-y: auto;
  display: grid;
  grid-template-rows: 94px 1fr;
  padding: 0 45px 0 50px;
  background-color: rgba(0, 24, 34, 0.01);
  @media (max-width: 1440px) {
    padding: 0 25px 0 30px;
  }
`;

const PageContent = styled.div`
  padding: 30px 0;
`;

const SideBar = styled.aside`
  background: rgba(238, 243, 255, 0.3);
  box-shadow: inset 0px 0px 30px rgba(37, 77, 113, 0.06);
`;

export const Layout = { Wrapper, Page, PageContent, SideBar };
