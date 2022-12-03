import React, { useState, useEffect } from "react";
import styles from "./ParentDashboardHeader.module.css";
import explore from "./../../assets/images/explore-bg.png";
import i from "./../../assets/icons/i.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import shivam from "./../../assets/images/tutors/shivam-shrivastab.png";
import { useNavigate } from "react-router-dom";
import josephBrown from "../../assets/images/joseph-brown.png";
import rightArrow from "../../assets/icons/arrow-down.png";
import { useLazyGetSettingsQuery } from "../../app/services/session";
import ImageSlideshow from "../ImageSlideshow/ImageSlideshow";

const ParentDashboardHeader = () => {
   const navigate = useNavigate()
   const [fetchSettings, fetchSettingsResp] = useLazyGetSettingsQuery()
   const [images, setImages] = useState([])

   useEffect(() => {
      fetchSettings()
         .then(res => {
            setImages(res.data.data.setting.offerImages)
         })
   }, [])

   console.log(images)
   return (
      <div
         className="flex gap-[78px]"
         id={styles.parentDashboardHeader}
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
                     <div className="w-1/2 flex items-center px-2 pr-4" id={styles.exploreBgDisable}>
                        {/* <div className="relative w-full h-fll">
                           {
                              images.length > 0 ? <img src={images[0]} alt="" />
                                 :
                                 <img src={explore} alt="" />
                           }
                        </div> */}
                        <ImageSlideshow images={images} />
                     </div>
                  </div>
               </div>

               <div className="w-1/3" id={styles.availableCredit}>
                  <div className="flex justify-between">
                     <h3>Available Credit</h3>
                     <img src={i} alt="" />
                  </div>

                  <div id={styles.creditBalance}>
                     820 USD
                     <p className="text-[13.17px] font-bold cursor-pointer"
                        onClick={() => navigate('/ledger')}>
                        View details
                     </p>
                  </div>
                  <button className={styles.btnDark}>
                     Pay Now: $ 2600
                  </button>
               </div>
            </div>
         </div>

         <div
            className="w-1/3"
            id={styles.yourStudent}
         >
            <div className="flex justify-between items-center px-[11px]">
               <h2 className="text-[#4715D7] font-semibold text-[21px] mt-[16px] mb-[15px]">Your Student</h2>
               <img src={rightArrow} className="h-[15px] w-[15px]" alt="" />
            </div>
            <div class={`item ${styles.student} w-100`}>
               <div className="flex items-center">
                  <div className="w-1/2">
                     <h2>Joseph Brown</h2>
                     <h6 className="text-[10px]">SAT Tutoring <br />Subject Tutoring</h6>
                     <a href="#" className="btn-gold">
                        View Profile
                     </a>
                  </div>
                  <div className="w-1/2 flex justify-end">
                     <img src={shivam} alt="" />
                  </div>
               </div>
            </div>

         </div>



         {/* <OwlCarousel
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
                    </OwlCarousel> */}
         {/* <div className="w-1/3" id={styles.tutor}>
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
         </div> */}
      </div>
   );
};

export default ParentDashboardHeader;
