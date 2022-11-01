import React, { useState } from "react";
import styles from "./ConceptSection.module.css";
import arrowDown from "./../../Assets/icons/arrow-down.png";
import Chart from "./../Chart/Chart";

// import faker from "faker";

const ConceptSection = () => {
    const [subject, setSubject] = useState("Maths");
    const [slot, setSlot] = useState("Jun 20, 2022 - Jul 30, 2022 ");

    return (
        <div className="flex" id={styles.conceptSectionContainer}>
            <div className="w-3/5" id={styles.conceptChart}>
                <div className="flex items-center" style={{ gap: "20px" }}>
                    <h1>Concept Chart</h1>

                    <div className="dropdown" id={styles.subject}>
                        <label
                            className="flex items-center"
                            id={styles.dropdownHeading}
                            tabIndex={0}
                        >
                            {subject}
                            <img id={styles.arrowDown} src={arrowDown} alt="" />
                        </label>
                        <ul
                            tabIndex={0}
                            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li
                                onClick={(e) => setSubject(e.target.innerText)}
                                className="py-2 cursor-pointer"
                            >
                                Math
                            </li>

                            <li
                                onClick={(e) => setSubject(e.target.innerText)}
                                className="py-2 cursor-pointer"
                            >
                                Physic
                            </li>
                            <li
                                onClick={(e) => setSubject(e.target.innerText)}
                                className="py-2 cursor-pointer"
                            >
                                Biology
                            </li>
                            <li
                                onClick={(e) => setSubject(e.target.innerText)}
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
                            <img id={styles.arrowDown} src={arrowDown} alt="" />
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
                    <div id={styles.chart}>
                        <Chart />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConceptSection;
