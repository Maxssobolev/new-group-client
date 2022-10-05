import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PageRenderer from './components/utils/page-renderer';
import './assets/scss/main.scss';
import { Layout } from './components/Common/Layout/Layout';
import SideMenu from './components/Common/SideMenu/SideMenu';
import Header from './components/Common/Header/Header';

const App: FC = () => {
  return (
    <Router>
      <Layout.Wrapper>
        <Layout.SideBar>
          <SideMenu />
        </Layout.SideBar>
        <Layout.Page>
          <Header />
          <Routes>
            <Route path="/:page" element={<PageRenderer />} />
            <Route index element={<Navigate to="/main" />} />
          </Routes>
        </Layout.Page>
      </Layout.Wrapper>
    </Router>
  );
};

export default App;
