import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import AssignedTests from "../pages/AssignedTests/AssignedTests";
import Calendar from "../pages/Calendar/Calendar";
import CompletedTest from "../pages/CompletedTest/CompletedTest";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Users from "../pages/Users/users";

import { RequireAuth } from "./PrivateRoute";

const AppRoutes = () => {

   const { isLoggedIn } = useSelector(state => state.user)

   return (
         <BrowserRouter>
               <Navbar />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/login" element={<Login />} />
               <Route path="/users" element={<Users />} />
               <Route path="/calendar" element={<Calendar />} />
               <Route path="/assigned-tests" element={<AssignedTests />} />
               <Route path="/assigned-tests/student/:id" element={<CompletedTest />} />

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
