import React, { useEffect, useState } from "react";
import TestsIcon from "../../assets/Navbar/tests";
import DollarIcon from "../../assets/Navbar/dollar";
import SettingsIcon from "../../assets/Navbar/settings";
import Exit from "../../assets/Navbar/exit";
import Bubble from "../../assets/Navbar/bubble";
import Document from "../../assets/Navbar/document";
import Calendar from "../../assets/Navbar/calendar";
import People from "../../assets/Navbar/people";
import Selected from "../../assets/Navbar/selected.svg";
import NavLink from "./NavLink";
import { useLocation } from "react-router-dom";
import styles from "./navbar.module.css";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { desktop } from "../../constants/breakpoints";
import Options from "../../assets/Navbar/options";
import { useSelector } from "react-redux";
import Dashboard from "../../assets/Navbar/dashboard";
import Profile from "../../assets/Navbar/profile";
import StudentTest from "../../assets/Navbar/studentTest";
import Percentage from "../../assets/Navbar/percentage";

const tempnavdata = [
   {
      icon: Dashboard,
      path: "/",
   },
   {
      icon: Calendar,
      path: "/calendar",
   },
   {
      icon: TestsIcon,
      path: "/assigned-tests",
   },
   {
      icon: Document,
      path: "/all-tests",
   },
   {
      icon: Bubble,
      path: "/graph",
   },
   {
      icon: SettingsIcon,
      path: "/settings",
   },
   {
      icon: People,
      path: "/users",
   },
   {
      icon: DollarIcon,
      path: "/dollar",
   },
   {
      icon: Exit,
      path: "/exit",
      parentClassName: "mt-auto",
   },
];

const parentNav = [
   {
      icon: Dashboard,
      path: "/",
   },
   {
      icon: Profile,
      path: "/profile",
   },
   {
      icon: Calendar,
      path: "/calendar",
   },
   {
      icon: StudentTest,
      path: "/all-tests",
   },
]

const studentNav = [
   {
      icon: Dashboard,
      path: "/",
   },
   {
      icon: Profile,
      path: "/profile",
   },
   {
      icon: Calendar,
      path: "/calendar",
   },
   {
      icon: StudentTest,
      path: "/all-tests",
   },
]
export default function Navbar() {
   const [navData, setNavData] = useState(tempnavdata)
   const location = useLocation()

   const { width } = useWindowDimensions()
   const { isLoggedIn } = useSelector((state) => state.user)

   const persona = sessionStorage.getItem('role')

   useEffect(() => {
      if(persona === 'student' || persona === 'tutor'){
         setNavData(studentNav)
      }
      if(persona === 'parent' ){
         setNavData(parentNav)
      }
  
   }, [persona])

   return (
      <div
         className={`
         fixed bottom-0 lg:w-auto lg:top-0 lg:left-0 lg:h-screen z-50 w-full 
         overflow-y-hidden lg:overflow-y-auto
          lg:p-4 
          flex overflow-auto
      ${location.pathname === "/login" ||
               location.pathname === "/signup" ||
               location.pathname === "/set-password" ||
               !isLoggedIn
               ? "hidden"
               : "bg-lightWhite"
            }`}
      // className={styles.navContainer}
      >
         <div className="lg:min-h-full lg:w-110 w-full h-75 lg:h-auto bg-primary p-4 lg:rounded-20 rounded-30 overflow-x-hidden overflow-y-hidden lg:overflow-y-auto lg:pt-14">
            <div className=" flex lg:flex-col items-center self-stretch justify-around ">
               {navData.map((item, idx) => {
                  if (width < desktop) {
                     return (
                        idx < 4 && (
                           <>
                              <NavLink
                                 width={width}
                                 key={idx}
                                 {...item}
                              />
                           </>
                        )
                     );
                  } else {
                     return (
                        <NavLink width={width} key={idx} {...item} />
                     );
                  }
               })}
               {width < desktop && (
                  <NavLink width={width} icon={Options} isOption={true} />
               )}
            </div>
         </div>
      </div>
   );
}
