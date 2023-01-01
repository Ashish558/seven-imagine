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
                <div id={styles.algebra2}></div>
                <div id={styles.advMath2}></div>
                <div id={styles.geometry2}></div>
                <div id={styles.trigonometry2}></div>
                <div id={styles.stat2}></div>
                <div id={styles.prob2}></div>

                <div className={styles.chartRow}>
                    <h4 className="w-5 text-sm">100</h4>
                    <div className={styles.hr}></div>
                </div>
                <div className={styles.chartRow}>
                    <h4 className="w-5 text-sm">80</h4>
                    <div className={styles.hr}></div>
                </div>
                <div className={styles.chartRow}>
                    <h4 className="w-5 text-sm">60</h4>
                    <div className={styles.hr}></div>
                </div>
                <div className={styles.chartRow}>
                    <h4 className="w-5 text-sm">40</h4>
                    <div className={styles.hr}></div>
                </div>
                <div className={styles.chartRow}>
                    <h4 className="w-5 text-sm">20</h4>
                    <div className={styles.hr}></div>
                </div>
                <div className={`${styles.chartRow}`} style={{marginBottom: '12px'}} >
                    <h4 className="w-5 text-sm">0</h4>
                    <div className={styles.hr}></div>
                </div>
            </div>

            <div className="flex ml-12 gap-20">
                <div className="w-1/12 text-base font-semibold">Algebra</div>
                <div className="w-1/12 text-base font-semibold whitespa">Math</div>
                <div className="w-1/12 text-base font-semibold">Geometry</div>
                <div className="w-1/12 text-base font-semibold">Trigonometry</div>
                <div className="w-1/12 text-base font-semibold">Statistics</div>
                <div className="w-1/12 text-base font-semibold">Probability</div>
                <div className="w-1/12 text-base font-semibold">Algebra</div>
                <div className="w-1/12 text-base font-semibold">Adv. Math</div>
                <div className="w-1/12 text-base font-semibold">Geometry</div>
                <div className="w-1/12 text-base font-semibold">Trigonometry</div>
                <div className="w-1/12 text-base font-semibold">Statistics</div>
                <div className="w-1/12 text-base font-semibold">Probability</div>
            </div>
        </div>
    );
};

export default Chart;
