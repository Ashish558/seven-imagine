import React, { useState } from "react";
import InputField from "../../components/InputField/inputField";
import EmailIcon from "../../assets/form/email.svg";
import Passwordicon from "../../assets/form/password.svg";
import { useLoginUserMutation } from "../../app/services/auth";

export default function ForgotPassword({
    setActiveFrame,
    setResetPasswordActive,
}) {
    const emailValidate = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const [email, setEmail] = useState("");
    const [err, setErr] = useState("");

    const [loginUser, loginUserResp] = useLoginUserMutation();
    const checkUser = () => {
        // console.log(email);
        loginUser({email, password: ""}).then(res => {
            res.error.status !== 404 ? setActiveFrame(setResetPasswordActive) : setErr("Not Found")
            // res.error.status === 404 && setErr(res.error.data.message)

            // if(res.error.status === 404){
            //     setErr("Not Found");
            // } else if(res.error.status === 401){
            //     console.log("Not Authorized");
            // }
        })
    }

    return (
        <div className="w-full px-148">
            <p className="font-bold text-5xl leading-snug mb-7">
                Forget Password
            </p>

            <p
                className="text-normal font-bold mb-90"
                style={{ fontSize: "18px" }}
            >
                Enter your email address linked to this account
            </p>

            <InputField
                Icon={EmailIcon}
                placeholder="Email address"
                parentClassName="mb-6 relative"
                label="Email Address"
                labelClassname="ml-2 mb-2"
                inputClassName="bg-transparent"
                inputContainerClassName='border'
                onChange={(e) => setEmail(e.target.value)}
                error={err ? err : undefined}
            />

            <button
                disabled={!emailValidate.test(email)}
                className="w-full bg-primaryDark disabled:bg-pink py-5 rounded-10 text-white text-21"
                // onClick={() => setActiveFrame(setResetPasswordActive)}
                onClick={checkUser}
            >
                Submit
            </button>
        </div>
    );
}
