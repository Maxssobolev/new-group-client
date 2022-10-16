import React, { FC, useEffect, useLayoutEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PageRenderer from './components/utils/page-renderer';
import './assets/scss/main.scss';
import { Layout } from './components/Common/Layout/Layout';
import SideMenu from './components/Common/SideMenu/SideMenu';
import Header from './components/Common/Header/Header';
import { useDispatch } from 'react-redux';
import useSWR, { SWRResponse } from 'swr';
import { User } from '@stud-log/news-types/models';
import { $authGet } from './http/helpers/authGet';
import { setUser } from './redux/reducers/userReducer';
import LoginModal from './components/Common/Header/Login/LoginModal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setUserGroup } from './redux/reducers/groupReducer';

const App: FC = () => {
  //getting user
  const dispatch = useDispatch();
  const { data: userData, error, mutate }: SWRResponse<User> = useSWR(`/api/user/get`, $authGet);

  useEffect(() => {
    if (userData) {
      dispatch(setUser(userData));
      dispatch(setUserGroup(userData.group));
    }
  }, [userData, dispatch]);

  //set css vars
  const pageRef = useRef<HTMLDivElement>(null);
  const sideBarRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--page-width', `${(pageRef.current?.offsetWidth ?? 1000) - 95}px`);
    root.style.setProperty('--side-menu-width', `${sideBarRef.current?.offsetWidth}`);
  });

  return (
    <Router>
      <Layout.Wrapper>
        <Layout.SideBar ref={sideBarRef}>
          <SideMenu />
        </Layout.SideBar>
        <Layout.Page ref={pageRef}>
          <Header />
          <Routes>
            <Route path="/:page" element={<PageRenderer />} />
            <Route index element={<Navigate to="/main" />} />
          </Routes>
          <ToastContainer />
        </Layout.Page>
      </Layout.Wrapper>

      <LoginModal />
    </Router>
  );
};

export default App;
