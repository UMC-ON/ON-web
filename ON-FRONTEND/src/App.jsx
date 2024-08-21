import { useState } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import theme from './styles/theme.js';

// 페이지, 컴포넌트 import
import NavBar from './components/NavBar/NavBar.jsx';
import MyPage from './pages/MyPage/MyPage.jsx';
import MyPost from './pages/MyPage/MyPost.jsx';
import Notification from './pages/Notification/NotificationPage.jsx';
import Search from './pages/Search/SearchPage.jsx';
import BottomTabNav from './components/BottomTabNav/BottomTabNav.jsx';
import AccompanyChat from './pages/Chat/AccompanyChat.jsx';
import ChatList from './pages/ChatList/ChatList.jsx';
import TradeChat from './pages/Chat/TradeChat.jsx';
import HomePage from './pages/HomePage.jsx';

import DiaryCalendar from './components/DiaryCalendar/DiaryCalendar.jsx';
import CompanyCalendar from './components/CompanyCalendar/CompanyCalendar.jsx';
import SellPage from './pages/SellPage.jsx';
import ScrapList from './pages/ScrapList.jsx';
import SellPost from './pages/SellPostPage.jsx';
import ItemDetailPage from './pages/ItemDetailPage.jsx';

import SignUpCompletePage from './pages/SignUp/SignUpCompletePage.jsx';
import SelectCity from './pages/SelectCity/SelectCity.jsx';
import SelectCountry from './pages/SelectCountry/SelectCountry.jsx';
import FreeCommunityHome from './pages/Community/FreeCommunity/FreeCommunityHome.jsx';
import InfoCommunityHome from './pages/Community/InfoCommunity/InfoCommunityHome.jsx';
import InfoPostPage from './pages/Community/InfoCommunity/InfoPostPage.jsx';
import FreePostPage from './pages/Community/FreeCommunity/FreePostPage.jsx';
import FreeDetailPage from './pages/Community/FreeCommunity/FreeDetailPage.jsx';
import InfoDetailPage from './pages/Community/InfoCommunity/InfoDetailPage.jsx';

import CommunityHomePage from './pages/CommunityHomePage.jsx';
import AccompanyPage from './pages/AccompanyPage.jsx';
import AccompanyDetailPage from './pages/AccompanyDetailPage.jsx';
import DiaryPage from './pages/Diary/DiaryPage.jsx';
import AccompanyPostPage from './pages/AccompanyPostPage.jsx';
import SignInPage from './pages/SignUp/SignInPage.jsx';
import SignUpPage from './pages/SignUp/SignUpPage.jsx';
import SchoolAuthPage from './pages/SignUp/SchoolAuthPage.jsx';
import AdminPage from './pages/AdminPage/AdminPage.jsx';
import MySchoolAuthPage from './pages/MyPage/MySchoolAuthPage.jsx';
import LandingPage from './pages/LandingPage/LandingPage.jsx';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './redux/actions.jsx';
import Loading from './components/Loading/Loading.jsx';

function App() {
  const dispatch = useDispatch();
  let user = useSelector((state) => state.user);
  const location = useLocation();
  const nav = useNavigate();
  let res;
  const excludepaths = ['/signIn', '/signUp', '/landing'];
  const [isLoading, setIsLoading] = useState(false);
  let fetchFirst = false;

  //console.log(location.pathname);

  useEffect(() => {
    if (!excludepaths.includes(location.pathname)) {
      const loadUserData = async () => {
        setIsLoading(true);
        await dispatch(loadUser());
        // 비동기 작업이 완료될 때까지 기다림
      };
      loadUserData();
      if (user) {
        console.log('로그인 완료인데..');
        console.log(user);
        setIsLoading(false);
        // fetchFirst = true;
      }
    }
  }, [dispatch]);
  if (isLoading) {
    return <Loading />;
  }
  useEffect(() => {
    if (!isLoading && fetchFirst) {
      console.log(user);
      if (!user.isAuthenticated && !excludepaths.includes(location.pathname)) {
        console.log(user.isAuthenticated);
        res = confirm('로그인이 필요합니다.');

        if (res) {
          nav('/signIn');
        } else {
          nav('/landing');
        }
      }
    }
  }, [user, location.pathname, dispatch]);
  // useEffect(() => {
  //   if (excludepaths.includes(location.pathname)) {
  //     setIsLoading(false);
  //   }
  // }, []);

  if (user.isAuthenticated || excludepaths.includes(location.pathname)) {
    return (
      <ThemeProvider theme={theme}>
        <Routes>
          <Route
            path="/landing"
            element={<LandingPage />}
          />
          <Route
            path="/admin"
            element={<AdminPage />}
          />
          <Route
            path="/signUp"
            element={<SignUpPage />}
          />
          <Route
            path="/signUp/complete"
            element={<SignUpCompletePage />}
          />
          <Route
            path="/signIn"
            element={<SignInPage />}
          />
          <Route
            path="/signUp/credentials"
            element={<SchoolAuthPage />}
          />
          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="/community"
            element={<CommunityHomePage />}
          />
          <Route
            path="/community/general"
            element={<FreeCommunityHome />}
          />
          <Route
            path="/community/general/detail/:id"
            element={<FreeDetailPage />}
          />
          <Route
            path="/community/general/post"
            element={<FreePostPage />}
          />
          <Route
            path="/community/info"
            element={<InfoCommunityHome />}
          />
          <Route
            path="/community/info/detail/:id"
            element={<InfoDetailPage />}
          />
          <Route
            path="/community/info/post"
            element={<InfoPostPage />}
          />
          <Route
            path="/mypage"
            element={<MyPage />}
          />
          <Route
            path="/mypage/mypost"
            element={<MyPost />}
          />
          <Route
            path="/mypage/schoolAuth"
            element={<MySchoolAuthPage />}
          />
          <Route
            path="/notification"
            element={<Notification />}
          />
          <Route
            path="/search"
            element={<Search />}
          />
          <Route
            path="/chat/accompany/:roomId"
            element={<AccompanyChat />}
          />
          <Route
            path="/chat/trade/:roomId"
            element={<TradeChat />}
          />
          <Route
            path="/chatlist"
            element={<ChatList />}
          />
          <Route
            path="/accompany"
            element={<AccompanyPage />}
          />
          <Route
            path="/accompany/post"
            element={<AccompanyPostPage />}
          />
          <Route
            path="/accompany/detail/:postId"
            element={<AccompanyDetailPage />}
          />
          <Route
            path="/diary"
            element={<DiaryPage />}
          />
          <Route
            path="/company"
            element={<CompanyCalendar />}
          />
          <Route
            path="/sell"
            element={<SellPage />}
          />
          <Route
            path="/sell/:marketPostId"
            element={<ItemDetailPage />}
          />
          <Route
            path="/sell/post"
            element={<SellPost />}
          />
          <Route
            path="/scrap"
            element={<ScrapList />}
          />
          <Route
            path="/selectCity"
            element={<SelectCity />}
          />
          <Route
            path="/selectCountry"
            element={<SelectCountry />}
          />
        </Routes>
      </ThemeProvider>
    );
  }
}

export default App;
