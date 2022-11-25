import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Selected from "../../assets/Navbar/selected.svg";
import SelectedMobile from "../../assets/Navbar/selected-mobile.svg";
import { desktop } from "../../constants/breakpoints";
import styles from "./navbar.module.css";

export default function NavLink({ width, icon: Icon, path, parentClassName }) {
    const navigate = useNavigate();
    const handleNavigate = () => navigate(path);
    const location = useLocation();
    console.log(path);
    return (
        <button
            className={`${
                path !== "/exit" ? "lg:mb-14" : "lg:mt-32"
            } z-20 relative ${styles.navLink} ${
                parentClassName ? parentClassName : ""
            } 
      ${location.pathname === path ? styles.selectedNavLink : ""}
      ${
          location.pathname === path && width < desktop
              ? styles.translateUp
              : ""
      }  `}
            onClick={handleNavigate}
        >
            {/* <img src={icon} className={Selected ? styles.selectedNavLink : ''} /> */}
            <Icon />
            {location.pathname === path && (
                <img
                    src={width > desktop ? Selected : SelectedMobile}
                    className={styles.selectedIcon}
                />
            )}
        </button>
    );
}
