import React from "react";
import styles from "./ListData.module.css";
import downloadImage from "./../../Assets/icons/download.png";

export const ListData = () => {
    return (
        <div id={styles.listedData}>
            <div
                className="flex items-center justify-between"
                style={{ padding: "10px 0" }}
            >
                <div className="w-1/2">
                    <div className={styles.listedDataItem}>
                        <h1>SAT B2</h1>
                        <div className="flex" style={{ gap: "12px" }}>
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
                        <button className={styles.btnGold}>Start</button>
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
                        <div className="flex" style={{ gap: "12px" }}>
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
                        <button className={styles.btnGreen}>Start</button>
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
                        <div className="flex" style={{ gap: "12px" }}>
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
                        <button className={styles.btnBlue}>Start</button>
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
                        <div className="flex" style={{ gap: "12px" }}>
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
                        <button className={styles.btnGold}>Start</button>
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
                        <div className="flex" style={{ gap: "12px" }}>
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
                        <button className={styles.btnBlue}>Start</button>
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
                        <div className="flex" style={{ gap: "12px" }}>
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
                        <button className={styles.btnGreen}>Start</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
