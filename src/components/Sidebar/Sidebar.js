import React from "react";
import styles from "./Sidebar.module.css";
import logo from "./../../Assets/icons/logo.png";
import bubbleGraph from "./../../Assets/icons/navbar-icons/bubble-graph.png";
import dashboard from "./../../Assets/icons/navbar-icons/dashboard.png";
import docs from "./../../Assets/icons/navbar-icons/docs.png";
import onlineClass from "./../../Assets/icons/navbar-icons/online-class.png";
import profile from "./../../Assets/icons/navbar-icons/profile.png";
import settings from "./../../Assets/icons/navbar-icons/settings.png";
import video from "./../../Assets/icons/navbar-icons/video.png";
import navbarActiveIcons from "./../../Assets/icons/navbar-active-icon.png";
import logout from "./../../Assets/icons/navbar-icons/logout.png";

const Sidebar = () => {
    return (
        <div id={styles.Sidebar}>
            <img id={styles.logo} src={logo} alt="" />

            <nav>
                <ul>
                    <li className={styles.active}>
                        <img
                            className={styles.navIcon}
                            src={dashboard}
                            alt=""
                        />
                        <img
                            src={navbarActiveIcons}
                            alt=""
                            className={styles.activeIcon}
                        />
                    </li>
                    <li>
                        {" "}
                        <img className={styles.navIcon} src={profile} alt="" />
                        <img
                            src={navbarActiveIcons}
                            alt=""
                            className={styles.activeIcon}
                        />
                    </li>
                    <li>
                        {" "}
                        <img
                            className={styles.navIcon}
                            src={onlineClass}
                            alt=""
                        />
                        <img
                            src={navbarActiveIcons}
                            alt=""
                            className={styles.activeIcon}
                        />
                    </li>
                    <li>
                        {" "}
                        <img className={styles.navIcon} src={video} alt="" />
                        <img
                            src={navbarActiveIcons}
                            alt=""
                            className={styles.activeIcon}
                        />
                    </li>
                    <li>
                        {" "}
                        <img className={styles.navIcon} src={docs} alt="" />
                        <img
                            src={navbarActiveIcons}
                            alt=""
                            className={styles.activeIcon}
                        />
                    </li>
                    <li>
                        {" "}
                        <img
                            className={styles.navIcon}
                            src={bubbleGraph}
                            alt=""
                        />
                        <img
                            src={navbarActiveIcons}
                            alt=""
                            className={styles.activeIcon}
                        />
                    </li>
                    <li>
                        {" "}
                        <img className={styles.navIcon} src={settings} alt="" />
                        <img
                            src={navbarActiveIcons}
                            alt=""
                            className={styles.activeIcon}
                        />
                    </li>
                </ul>
            </nav>

            <img src={logout} id={styles.logout} alt="" />
        </div>
    );
};

export default Sidebar;
