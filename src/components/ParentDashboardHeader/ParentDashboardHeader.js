import React from "react";
import styles from "./ParentDashboardHeader.module.css";
import explore from "./../../assets/images/explore-bg.png";
import i from "./../../assets/icons/i.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import shivam from "./../../assets/images/tutors/shivam-shrivastab.png";
import { useNavigate } from "react-router-dom";

const ParentDashboardHeader = () => {
   const navigate = useNavigate()

   return (
      <div
         className="flex"
         id={styles.parentDashboardHeader}
         style={{ gap: 38 }}
      >
         <div className="w-2/3">
            <div className="flex" style={{ gap: 16 }}>
               <div className="w-2/3" id={styles.explore}>
                  <div className="flex">
                     <div className="w-1/2" id={styles.exploreLeft}>
                        <h2 className="w-6/12">
                           This fall get help from our Admission
                           Experts.
                        </h2>

                        <button className={styles.knowMore}>
                           Know More {">"}
                        </button>
                     </div>
                     <div className="w-1/2" id={styles.exploreBg}>
                        <img src={explore} alt="" />
                     </div>
                  </div>
               </div>

               <div className="w-1/3" id={styles.availableCredit}>
                  <div className="flex justify-between">
                     <h3>Available Credit</h3>
                     <img src={i} alt="" />
                  </div>

                  <div id={styles.creditBalance}>- 200 USD</div>
                  <button className={styles.btnRed} onClick={() => navigate('/ledger')} >
                     Pay Now: $ 2600
                  </button>
               </div>
            </div>
         </div>
         <div className="w-1/3" id={styles.tutor}>
            <h2>Your Tutor</h2>
            <OwlCarousel className="owl-theme" loop margin={30} items={1}>
               <div class="item flex" style={{ width: "100%" }}>
                  <div className="w-1/2">
                     <h5 className={styles.tag}>
                        WIZARD TUTOR | UNDERGRADUATE
                     </h5>
                     <h3>Shivam Srivastava</h3>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                     </p>
                     <button className="btn-gold">View Profile</button>
                  </div>
                  <div className="w-1/2">
                     <img src={shivam} className="mx-auto" alt="" />
                  </div>
               </div>
               <div class="item flex" style={{ width: "100%" }}>
                  <div className="w-1/2">
                     <h5 className={styles.tag}>
                        WIZARD TUTOR | UNDERGRADUATE
                     </h5>
                     <h3>Shivam Srivastava</h3>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                     </p>
                     <button className="btn-gold">View Profile</button>
                  </div>
                  <div className="w-1/2">
                     <img src={shivam} className="mx-auto" alt="" />
                  </div>
               </div>
               <div class="item flex" style={{ width: "100%" }}>
                  <div className="w-1/2">
                     <h5 className={styles.tag}>
                        WIZARD TUTOR | UNDERGRADUATE
                     </h5>
                     <h3>Shivam Srivastava</h3>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                     </p>
                     <button className="btn-gold">View Profile</button>
                  </div>
                  <div className="w-1/2">
                     <img src={shivam} className="mx-auto" alt="" />
                  </div>
               </div>
            </OwlCarousel>
         </div>
      </div>
   );
};

export default ParentDashboardHeader;
