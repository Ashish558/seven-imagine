import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import AllTests from "../pages/AllTests/AllTests";
import AssignedTests from "../pages/AssignedTests/AssignedTests";
import Calendar from "../pages/Calendar/Calendar";
import CompletedTest from "../pages/CompletedTest/CompletedTest";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";
import Signup from "../pages/Signup/Signup";
import StudentProfile from "../pages/StudentProfile/StudentProfile";
import TestDetail from "../pages/TestDetail/TestDetail";
import Users from "../pages/Users/users";

import { RequireAuth } from "./PrivateRoute";
import ParentDashboard from "./../pages/ParentDashboard/ParentDashboard";
import SetPassword from "../pages/Frames/SetPassword/SetPassword";

const PrivateRoutes = [
  {
    el: Calendar,
    path: '/calendar'
  },
  {
    el: Users,
    path: '/users'
  },
  {
    el: Calendar,
    path: '/calendar/:persona'
  },
  {
    el: Calendar,
    path: '/calendar'
  },
  {
    el: Calendar,
    path: '/calendar'
  },
  {
    el: Calendar,
    path: '/calendar'
  },
]

const AppRoutes = () => {

  const { isLoggedIn } = useSelector(state => state.user)
  const [loginFormActive, setLoginFormActive] = useState(true)

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"
          element={isLoggedIn ? <Home /> :
            loginFormActive ? <Login setLoginFormActive={setLoginFormActive} /> :
              <Signup setLoginFormActive={setLoginFormActive} />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/users" element={<Users />} />

         <Route
          path="/calendar"
          element={
            <RequireAuth isLoggedIn={isLoggedIn}>
              <Calendar />
            </RequireAuth>
          }
        />
        {/* <Route
          path="/calendar/:persona"
          element={
            <RequireAuth isLoggedIn={isLoggedIn}>
              <Calendar />
            </RequireAuth>
          }
        />  */}
        {/* <Route path="/calendar" element={<Calendar />} /> */}
        {/* <Route path="/calendar/:persona" element={<Calendar />} /> */}
        <Route path="/assigned-tests" element={<AssignedTests />} />
        <Route path="/set-password" element={<SetPassword setLoginFormActive={setLoginFormActive} />} />
        <Route
          path="/assigned-tests/student/:id"
          element={<CompletedTest />}
        />
        <Route path="/all-tests" element={<AllTests />} />
        <Route path="/all-tests/:id" element={<TestDetail />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route
          path="/profile/student/:id"
          element={<StudentProfile />}
        />
        <Route path="/parent-dashboard" element={<ParentDashboard />} />

        {/* <Route
                  path="/profile"
                  element={
                     <RequireAuth isLoggedIn={isLoggedIn}>
                        <Profile  />
                     </RequireAuth>
                  }
               /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
