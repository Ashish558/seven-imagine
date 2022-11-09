import React, { useEffect, useState } from "react";
import styles from "./ConceptSection.module.css";
import arrowDown from "./../../Assets/icons/arrow-down.png";
import Chart from "./../Chart/Chart";
import downloadImage from "./../../Assets/icons/download.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import josephBrown from "./../../Assets/images/joseph-brown.png";
import rightArrow from "./../../Assets/icons/arrow-down.png";

const ConceptSection = () => {
    const [subject, setSubject] = useState("Maths");
    const [slot, setSlot] = useState("Jun 20, 2022 - Jul 30, 2022 ");
    const [leftOpacity, setLeftOpacityy] = useState(1);
    const [rightOpacity, setRightOpacity] = useState(1);

    // const rightOpacity = document
    //     .getElementsByClassName("owl-next")[1]
    //     ?.classList.contains("disabled")
    //     ? 0.5
    //     : 1;

    const goNext = () => {
        document.getElementsByClassName("owl-next")[1].click();
    };
    const goPrev = () => {
        document.getElementsByClassName("owl-pregitv")[1].click();
    };

    return (
        <div
            className="flex justify-between "
            id={styles.conceptSectionContainer}
        >
            <div className="w-2/3" id={styles.conceptChart}>
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

            <div className="w-1/3">
                <div className="concept" id={styles.studentCarousel}>
                    <div
                        className="flex justify-between"
                        id={styles.yourStudent}
                    >
                        <h2>Your Student</h2>

                        <div className="flex" style={{ gap: 11.12 }}>
                            <button
                                id={styles.leftArrow}
                                className="cursor-pointer"
                                onClick={goPrev}
                            >
                                <img
                                    src={rightArrow}
                                    width="15px"
                                    height="15px"
                                    alt=""
                                    style={{ opacity: leftOpacity }}
                                />
                            </button>
                            <button
                                id={styles.rightArrow}
                                className="cursor-pointer"
                                onClick={goNext}
                            >
                                <img
                                    src={rightArrow}
                                    width="15px"
                                    height="15px"
                                    alt=""
                                    style={{ opacity: rightOpacity }}
                                />
                            </button>
                        </div>
                    </div>

                    <OwlCarousel
                        className="owl-theme"
                        loop={false}
                        margin={10}
                        nav
                        items={1}
                        dots={false}
                    >
                        <div class={`item ${styles.student} first`}>
                            <div className="flex items-center">
                                <div className="w-1/2">
                                    <h2>Joseph Brown</h2>
                                    <a href="#" className="btn-gold">
                                        View Profile
                                    </a>
                                </div>
                                <div className="w-1/2 flex justify-end">
                                    <img src={josephBrown} alt="" />
                                </div>
                            </div>
                        </div>
                        <div class={`item ${styles.student}`}>
                            <div className="flex items-center">
                                <div className="w-1/2">
                                    <h2>Joseph Brown</h2>
                                    <a href="#" className="btn-gold">
                                        View Profile
                                    </a>
                                </div>
                                <div className="w-1/2 flex justify-end">
                                    <img src={josephBrown} alt="" />
                                </div>
                            </div>
                        </div>
                        <div class={`item ${styles.student} third`}>
                            <div className="flex items-center">
                                <div className="w-1/2">
                                    <h2>Joseph Brown</h2>
                                    <a href="#" className="btn-gold">
                                        View Profile
                                    </a>
                                </div>
                                <div className="w-1/2 flex justify-end">
                                    <img src={josephBrown} alt="" />
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
                <div id={styles.practiceTestContainer}>
                    <h2 id={styles.practiceTestHeader}>Practice Test</h2>
                    <div id={styles.listedData}>
                        <div
                            className="flex items-center justify-between"
                            style={{ padding: "10px 0" }}
                        >
                            <div className="w-1/2">
                                <div className={styles.listedDataItem}>
                                    <h1>SAT B2</h1>
                                    <div
                                        className="flex"
                                        style={{ gap: "12px" }}
                                    >
                                        <h2>Due Date</h2>
                                        <h3>June 20, 2022</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <div
                                    className="flex items-center justify-end"
                                    style={{ gap: "12px" }}
                                >
                                    <img src={downloadImage} alt="" />
                                    <button className={styles.btnGreen}>
                                        Start
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex items-center justify-between"
                            style={{ padding: "10px 0" }}
                        >
                            <div className="w-1/2">
                                <div className={styles.listedDataItem}>
                                    <h1>SAT B2</h1>
                                    <div
                                        className="flex"
                                        style={{ gap: "12px" }}
                                    >
                                        <h2>Due Date</h2>
                                        <h3>June 20, 2022</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <div
                                    className="flex items-center justify-end"
                                    style={{ gap: "12px" }}
                                >
                                    <img src={downloadImage} alt="" />
                                    <button className={styles.btnGreen}>
                                        Start
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex items-center justify-between"
                            style={{ padding: "10px 0" }}
                        >
                            <div className="w-1/2">
                                <div className={styles.listedDataItem}>
                                    <h1>SAT B2</h1>
                                    <div
                                        className="flex"
                                        style={{ gap: "12px" }}
                                    >
                                        <h2>Due Date</h2>
                                        <h3>June 20, 2022</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <div
                                    className="flex items-center justify-end"
                                    style={{ gap: "12px" }}
                                >
                                    <img src={downloadImage} alt="" />
                                    <button className={styles.btnGreen}>
                                        Start
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex items-center justify-between"
                            style={{ padding: "10px 0" }}
                        >
                            <div className="w-1/2">
                                <div className={styles.listedDataItem}>
                                    <h1>SAT B2</h1>
                                    <div
                                        className="flex"
                                        style={{ gap: "12px" }}
                                    >
                                        <h2>Due Date</h2>
                                        <h3>June 20, 2022</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <div
                                    className="flex items-center justify-end"
                                    style={{ gap: "12px" }}
                                >
                                    <img src={downloadImage} alt="" />
                                    <button className={styles.btnGreen}>
                                        Start
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex items-center justify-between"
                            style={{ padding: "10px 0" }}
                        >
                            <div className="w-1/2">
                                <div className={styles.listedDataItem}>
                                    <h1>SAT B2</h1>
                                    <div
                                        className="flex"
                                        style={{ gap: "12px" }}
                                    >
                                        <h2>Due Date</h2>
                                        <h3>June 20, 2022</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <div
                                    className="flex items-center justify-end"
                                    style={{ gap: "12px" }}
                                >
                                    <img src={downloadImage} alt="" />
                                    <button className={styles.btnGreen}>
                                        Start
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex items-center justify-between"
                            style={{ padding: "10px 0" }}
                        >
                            <div className="w-1/2">
                                <div className={styles.listedDataItem}>
                                    <h1>SAT B2</h1>
                                    <div
                                        className="flex"
                                        style={{ gap: "12px" }}
                                    >
                                        <h2>Due Date</h2>
                                        <h3>June 20, 2022</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <div
                                    className="flex items-center justify-end"
                                    style={{ gap: "12px" }}
                                >
                                    <img src={downloadImage} alt="" />
                                    <button className={styles.btnGreen}>
                                        Start
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConceptSection;
