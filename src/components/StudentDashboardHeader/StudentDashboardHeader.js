import React, { useState } from "react";
// import Chart from "../Chart/Chart";
import explore from "./../../assets/images/explore-bg.png";
import styles from "./StudentDashboardHeader.module.css";
import arrow from "./../../assets/icons/arrow-down.png";

const StudentDashboardHeader = () => {
    return (
        <div className="flex" id={styles.StudentDashboardHeader}>
            <div id={styles.admissionExpert} className="w-3/5">
                <div className="flex">
                    <div className="w-2/4">
                        <h1>This fall get help from our Admission Experts.</h1>
                        <button className="relative">
                            Know More{" "}
                            <img src={arrow} width="10px" height="8px" alt="" />
                        </button>
                    </div>

                    <div className="w-2/4">
                        <img src={explore} style={{ width: 244 }} alt="" />
                    </div>
                </div>
            </div>
            <div className="w-2/5" id={styles.nextSession}>
                <div className="flex align-baseline">
                    <div className="w-2/3" id="nextSessionText">
                        <h1>Next Session</h1>
                        <h6>
                            SAT Preparation <span>{"{{Service}}"}</span>
                        </h6>
                        <h6>
                            Subtype here <span>{"{{Subtype}}"}</span>
                        </h6>
                        <h2>Shivam S.</h2>
                        <h6 style={{ fontStyle: "italic", fontWeight: 400 }}>
                            26th November, 2022 <br /> 01:00 PM - 02:45 PM
                        </h6>
                        <button className="btn-gold">View Details</button>
                    </div>
                    <div className="w-1/3 mt-auto">
                        <div className="text-center" id={styles.dateContainer}>
                            <h1>
                                26 <sup>th</sup>
                            </h1>
                            <h2>Nov</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboardHeader;
