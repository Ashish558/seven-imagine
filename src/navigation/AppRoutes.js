import React from "react";
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
import ParentDashboard from "./../Pages/ParentDashboard/ParentDashboard";
import StudentDashboard from "./../Pages/StudentDashboard/StudentDashboard";

const AppRoutes = () => {
    const { isLoggedIn } = useSelector((state) => state.user);

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/users" element={<Users />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/calendar/:persona" element={<Calendar />} />
                <Route path="/assigned-tests" element={<AssignedTests />} />
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
                <Route
                    path="/student-dashboard"
                    element={<StudentDashboard />}
                />

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
