import React from "react";
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

const navdata = [
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

export default function Navbar() {
    const location = useLocation();
    const { width } = useWindowDimensions();
    const { isLoggedIn } = useSelector((state) => state.user);

    return (
        <div
            className={`
         fixed bottom-0 lg:w-auto lg:top-0 lg:left-0 lg:h-screen z-50 w-full 
         overflow-y-hidden lg:overflow-y-auto
          lg:p-4 
          flex overflow-auto
      ${
          location.pathname === "/login" ||
          location.pathname === "/signup" ||
          location.pathname === "/set-password" ||
          !isLoggedIn
              ? "hidden"
              : "bg-lightWhite"
      }`}
            // className={styles.navContainer}
        >
            <div
                className="lg:min-h-full lg:w-110 w-full
         h-75 lg:h-auto
         flex lg:flex-col items-center 
         bg-primary p-4 lg:rounded-20 rounded-30  self-stretch justify-around 
         overflow-x-hidden overflow-y-hidden lg:overflow-y-auto lg:pt-14 "
            >
                {navdata.map((item, idx) => {
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
                        return <NavLink width={width} key={idx} {...item} />;
                    }
                })}
                {width < desktop && (
                    <NavLink width={width} icon={Options} isOption={true} />
                )}
            </div>
        </div>
    );
}
