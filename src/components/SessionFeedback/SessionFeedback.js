import React from "react";
import styles from "./SessionFeedback.module.css";
import starGold from "./../../Assets/icons/star-gold.png";
import starDark from "./../../Assets/icons/star-dark.png";
import starLight from "./../../Assets/icons/star-light.png";

const SessionFeedback = () => {
    return (
        <div id={styles.sessionFeedback} className="w-10/12">
            <h1>Session Feedback</h1>

            <div id={styles.feedbacks}>
                <div className={styles.feedback}>
                    <div className="flex items-center justify-between">
                        <h1>Service Name \w Tutor Name</h1>
                        <h3>MMM DD, YYYY</h3>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className={styles.stars}>
                            <img src={starGold} alt="" />
                            <img src={starGold} alt="" />
                            <img src={starGold} alt="" />
                            <img src={starGold} alt="" />
                            <img src={starDark} alt="" />
                        </div>

                        <div className={styles.details}>
                            <button>Details</button>
                        </div>
                    </div>
                </div>
                <div className={styles.feedback}>
                    <div className="flex items-center justify-between">
                        <h1>ACT \w Shivam</h1>
                        <h3>June 20, 2022</h3>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className={styles.stars}>
                            <img src={starLight} alt="" />
                            <img src={starLight} alt="" />
                            <img src={starLight} alt="" />
                            <img src={starLight} alt="" />
                            <img src={starLight} alt="" />
                        </div>

                        <div className={styles.details}>
                            <button>Details</button>
                        </div>
                    </div>
                </div>
                <div className={styles.feedback}>
                    <div className="flex items-center justify-between">
                        <h1>Shivam Srivastava</h1>
                        <h3>Test Prep, June 20, 2022</h3>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className={styles.stars}>
                            <img src={starLight} alt="" />
                            <img src={starLight} alt="" />
                            <img src={starLight} alt="" />
                            <img src={starLight} alt="" />
                            <img src={starLight} alt="" />
                        </div>

                        <div className={styles.details}>
                            <button>Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SessionFeedback;
