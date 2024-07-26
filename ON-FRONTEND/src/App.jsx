import { useState } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './styles/theme.js';

// 페이지, 컴포넌트 import
import NavBar from './components/NavBar/NavBar.jsx';
import MyPage from './pages/MyPage/MyPage.jsx';
import Notification from './pages/Notification/NotificationPage.jsx';
import Search from './pages/Search/SearchPage.jsx';
import BottomTabNav from './components/BottomTabNav/BottomTabNav.jsx';
import Chat from './pages/Chat/ChatPage.jsx';
import HomePage from './pages/HomePage.jsx';

import DiaryCalendar from './components/DiaryCalendar/DiaryCalendar.jsx';
import CompanyCalendar from './components/CompanyCalendar/CompanyCalendar.jsx';

import TermsOfServicePage from './pages/SignUp/TermsOfServicePage.jsx';
import UserInfoPage from './pages/SignUp/UserInfoPage.jsx';
import UserInfoSchoolPage from './pages/SignUp/UserInfoSchoolPage.jsx';
import UserInfoSchoolAuthPage from './pages/SignUp/UserInfoSchoolAuthPage.jsx';
import SignUpCompletePage from './pages/SignUp/SignUpCompletePage.jsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          path="/signUp"
          element={<TermsOfServicePage />}
        />
        <Route
          path="/signUp/userInfo"
          element={<UserInfoPage />}
        />

        <Route
          path="/signUp/userInfo_school"
          element={<UserInfoSchoolPage />}
        />

        <Route
          path="/signUp/userInfo_schoolAuth"
          element={<UserInfoSchoolAuthPage />}
        />

        <Route
          path="/signUp/complete"
          element={<SignUpCompletePage />}
        />
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/mypage"
          element={<MyPage />}
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
      </Routes>
    </ThemeProvider>
  );
}

export default App;
