import React from "react";
import styles from "./Chart.module.css";

const Chart = () => {
    return (
        <div className={styles.chartContainer}>
            <div className={styles.chartRowContainer}>
                <div id={styles.algebra}></div>
                <div id={styles.advMath}></div>
                <div id={styles.geometry}></div>
                <div id={styles.trigonometry}></div>
                <div id={styles.stat}></div>
                <div id={styles.prob}></div>

                <div className={styles.chartRow}>
                    <h4 className="w-5">100</h4>
                    <div className={styles.hr}></div>
                </div>
                <div className={styles.chartRow}>
                    <h4 className="w-5">80</h4>
                    <div className={styles.hr}></div>
                </div>
                <div className={styles.chartRow}>
                    <h4 className="w-5">60</h4>
                    <div className={styles.hr}></div>
                </div>
                <div className={styles.chartRow}>
                    <h4 className="w-5">40</h4>
                    <div className={styles.hr}></div>
                </div>
                <div className={styles.chartRow}>
                    <h4 className="w-5">20</h4>
                    <div className={styles.hr}></div>
                </div>
                <div className={styles.chartRow}>
                    <h4 className="w-5"></h4>
                    <div className={styles.hr}></div>
                </div>
            </div>

            <div className="flex ml-12 gap-20">
                <div className="w-1/12">Algebra</div>
                <div className="w-1/12">Adv. Math</div>
                <div className="w-1/12">Geometry</div>
                <div className="w-1/12">Trigonometry</div>
                <div className="w-1/12">Statistics</div>
                <div className="w-1/12">Probability</div>
                <div className="w-1/12">Algebra</div>
                <div className="w-1/12">Adv. Math</div>
                <div className="w-1/12">Geometry</div>
                <div className="w-1/12">Trigonometry</div>
                <div className="w-1/12">Statistics</div>
                <div className="w-1/12">Probability</div>
            </div>
        </div>
    );
};

export default Chart;
