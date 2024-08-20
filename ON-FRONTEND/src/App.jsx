import { useState } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './styles/theme.js';

// 페이지, 컴포넌트 import
import NavBar from './components/NavBar/NavBar.jsx';
import MyPage from './pages/MyPage/MyPage.jsx';
import MyPost from './pages/MyPage/MyPost.jsx';
import Notification from './pages/Notification/NotificationPage.jsx';
import Search from './pages/Search/SearchPage.jsx';
import BottomTabNav from './components/BottomTabNav/BottomTabNav.jsx';
import Chat from './pages/Chat/Chat.jsx';
import ChatList from './pages/ChatList/ChatList.jsx';
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
import { useDispatch } from 'react-redux';
import { loadUser } from './redux/actions.jsx';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser()); // 앱이 시작될 때 토큰을 로드하고 유저 정보를 가져옴
  }, [dispatch]);

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
          path="/chat"
          element={<Chat />}
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
         <Route path="/accompany/detail/:postId" 
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
          path="/sell/id"
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

export default App;
