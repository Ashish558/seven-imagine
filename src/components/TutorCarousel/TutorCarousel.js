import React from "react";
import styles from "./TutorCarousel.module.css";
import explore from "./../../Assets/images/explore-bg.png";
import i from "./../../Assets/icons/i.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import shivam from "./../../Assets/images/tutors/shivam-shrivastab.png";

const TutorCarousel = () => {
    return (
        <div id={styles.tutorCarousel}>
            <h2 className="pl-5">Your Tutor</h2>
            <OwlCarousel className="owl-theme" loop margin={30} items={1}>
                <div class="item pl-5">
                    <div className="flex items-center justify-center">
                        <div className="w-2/3">
                            <h5 className={styles.tag}>
                                WIZARD TUTOR <br /> UNDERGRADUATE
                            </h5>
                            <h3>Shivam Srivastava</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </p>
                            <button className="btn-gold">View Profile</button>
                        </div>
                        <div className="w-1/3">
                            <img src={shivam} className="mx-auto" alt="" />
                        </div>
                    </div>
                </div>
                <div class="item pl-5">
                    <div className="flex items-center justify-center">
                        <div className="w-2/3">
                            <h5 className={styles.tag}>
                                WIZARD TUTOR <br /> UNDERGRADUATE
                            </h5>
                            <h3>Shivam Srivastava</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </p>
                            <button className="btn-gold">View Profile</button>
                        </div>
                        <div className="w-1/3">
                            <img src={shivam} className="mx-auto" alt="" />
                        </div>
                    </div>
                </div>
                <div class="item pl-5">
                    <div className="flex items-center justify-center">
                        <div className="w-2/3">
                            <h5 className={styles.tag}>
                                WIZARD TUTOR <br /> UNDERGRADUATE
                            </h5>
                            <h3>Shivam Srivastava</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </p>
                            <button className="btn-gold">View Profile</button>
                        </div>
                        <div className="w-1/3">
                            <img src={shivam} className="mx-auto" alt="" />
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    );
};

export default TutorCarousel;
