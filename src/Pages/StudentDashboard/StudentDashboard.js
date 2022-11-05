import React, { useState } from "react";
import styles from "./StudentDashboard.module.css";
import Chart from "./../../components/Chart/Chart";
import arrowDown from "./../../Assets/icons/arrow-down.png";
import StudentDashboardHeader from "../../components/StudentDashboardHeader/StudentDashboardHeader";
import TutorCarousel from "../../components/TutorCarousel/TutorCarousel";
import CompleteProfile from "../../components/CompleteProfile/CompleteProfile";

const StudentDashboard = () => {
    const [subject, setSubject] = useState("Maths");
    const [slot, setSlot] = useState("Jun 20, 2022 - Jul 30, 2022 ");
    return (
        <div
            className={`w-11/12 ${styles.studentDashboardContainer}`}
            id="container"
        >
            <div className="flex" id={styles.studentDashboard}>
                <div className="w-2/3">
                    <StudentDashboardHeader></StudentDashboardHeader>
                    <div className="flex items-center" style={{ gap: "20px" }}>
                        <h1>Concept Chart</h1>

                        <div className="dropdown" id={styles.subject}>
                            <label
                                className="flex items-center"
                                id={styles.dropdownHeading}
                                tabIndex={0}
                            >
                                {subject}
                                <img
                                    className={styles.arrowDown}
                                    src={arrowDown}
                                    alt=""
                                />
                            </label>
                            <ul
                                tabIndex={0}
                                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                <li
                                    onClick={(e) =>
                                        setSubject(e.target.innerText)
                                    }
                                    className="py-2 cursor-pointer"
                                >
                                    Math
                                </li>

                                <li
                                    onClick={(e) =>
                                        setSubject(e.target.innerText)
                                    }
                                    className="py-2 cursor-pointer"
                                >
                                    Physic
                                </li>
                                <li
                                    onClick={(e) =>
                                        setSubject(e.target.innerText)
                                    }
                                    className="py-2 cursor-pointer"
                                >
                                    Biology
                                </li>
                                <li
                                    onClick={(e) =>
                                        setSubject(e.target.innerText)
                                    }
                                    className="py-2 cursor-pointer"
                                >
                                    Chemistry
                                </li>
                            </ul>
                        </div>

                        <div className="dropdown" id={styles.data}>
                            <label
                                className="flex items-center"
                                id={styles.dropdownHeading}
                                tabIndex={0}
                            >
                                {slot}
                                <img
                                    className={styles.arrowDown}
                                    src={arrowDown}
                                    alt=""
                                />
                            </label>
                            <ul
                                tabIndex={0}
                                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full"
                            >
                                <li
                                    onClick={(e) => {
                                        setSlot(e.target.innerText);
                                    }}
                                    className="py-2 cursor-pointer"
                                >
                                    Jan 20, 2022 - Fab 30, 2022
                                </li>

                                <li
                                    onClick={(e) => {
                                        setSlot(e.target.innerText);
                                    }}
                                    className="py-2 cursor-pointer"
                                >
                                    Feb 20, 2022 - Mar 30, 2022
                                </li>
                                <li
                                    onClick={(e) => {
                                        setSlot(e.target.innerText);
                                    }}
                                    className="py-2 cursor-pointer"
                                >
                                    Mar 20, 2022 - Apr 30, 2022
                                </li>
                                <li
                                    onClick={(e) => {
                                        setSlot(e.target.innerText);
                                    }}
                                    className="py-2 cursor-pointer"
                                >
                                    Apr 20, 2022 - May 30, 2022
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id={styles.chartContainer}>
                        <Chart></Chart>
                    </div>
                </div>
                <div className="w-1/3" id={styles.studentDashboardRight}>
                    <TutorCarousel></TutorCarousel>
                    <CompleteProfile />
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;
