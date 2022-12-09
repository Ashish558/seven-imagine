import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import InputField from "../../components/InputField/inputField";
import ForgotPassword from "../Frames/ForgotPassword";
import ResetPassword from "../Frames/ResetPassword";
import ImageSlider from "../../components/ImageSlider/ImageSlider";

import { useLoginUserMutation } from "../../app/services/auth";
import { updateIsLoggedIn } from "../../app/slices/user";

import Passwordicon from "../../assets/form/password.svg";
import EmailIcon from "../../assets/form/email.svg";
import CarouselImg from "../../assets/form/image-1.png";
import styles from './Login.module.css'

export default function Login({ setLoginFormActive }) {

   const [isPasswordForgot, setIsPasswordForgot] = useState(false);
   const [resetPasswordActive, setResetPasswordActive] = useState(false);
   const [loginActive, setLoginActive] = useState(true);
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const dispatch = useDispatch();

   const [loginUser, loginUserResp] = useLoginUserMutation();

   const setActiveFrame = (func) => {
      setIsPasswordForgot(false);
      setResetPasswordActive(false);
      setLoginActive(false);
      func(true);
   };

   const handleSubmit = () => {
      loginUser({ email, password }).then((res) => {
         console.log(res);
         sessionStorage.setItem("token", res.data.data.token);
         sessionStorage.setItem("role", res.data.data.role);
         sessionStorage.setItem("userId", res.data.data.userId);
         dispatch(updateIsLoggedIn(true));
      });
   };

   const props = { setActiveFrame, setResetPasswordActive };

   return (
      <div className="min-h-screen">
         <div className="grid grid-cols-2 min-h-screen">
            <div className="bg-primary">
               <ImageSlider className={styles.loginCarousel} images={[CarouselImg, CarouselImg ]} pagination={true} />
            </div>
            <div className="flex items-center">
               {loginActive ? (
                  <div className="w-full px-[120px]">
                     <p className="font-bold text-5xl leading-snug mb-7">
                        Login
                     </p>

                     <p className="text-lg font-bold mb-12">
                        Login with email address
                     </p>

                     <InputField
                        Icon={EmailIcon}
                        placeholder="Email address"
                        parentClassName="mb-6"
                        label="Email Address"
                        labelClassname="ml-2 mb-2"
                        inputClassName="bg-transparent"
                        inputContainerClassName='border pt-3.5 pb-3.5'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                     />

                     <InputField
                        Icon={Passwordicon}
                        parentClassName="mb-1 relative"
                        placeholder="Password"
                        label="Password"
                        type='password'
                        labelClassname="ml-2 mb-2"
                        inputClassName="bg-transparent" 
                        inputContainerClassName='border pt-3.5 pb-3.5'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                     />
                     <p
                        className="text-secondary text-xs inline-block cursor-pointer font-semibold ml-2"
                        onClick={() =>
                           setActiveFrame(setIsPasswordForgot)
                        }
                     >
                        Forgot Password ?
                     </p>

                     <button
                        disabled={false}
                        className="w-full bg-primaryDark disabled:bg-pink  py-4 mt-12 rounded-10 text-white text-21"
                        onClick={handleSubmit}
                     >
                        Login
                     </button>
                     <p
                        className="text-secondary text-xs font-semibold ml-2 mt-2 cursor-pointer inline-block"
                        onClick={() => setLoginFormActive(false)}
                     >
                        Sign-up Instead?
                     </p>
                  </div>
               ) : isPasswordForgot ? (
                  <ForgotPassword {...props} />
               ) : resetPasswordActive ? (
                  <ResetPassword
                     setActiveFrame={setActiveFrame}
                     setLoginActive={setLoginActive}
                  />
               ) : (
                  ""
               )}
            </div>
         </div>
      </div>
   );
}
