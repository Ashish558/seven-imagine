import React, { useState } from "react";
import InputField from "../../components/InputField/inputField";
import styles from "./signup.module.css";

import ForgotPassword from "../Frames/ForgotPassword";
import ResetPassword from "../Frames/ResetPassword";
import SelectPersona from "../Frames/SelectPersona/selectPersona";
import SelectServices from "../Frames/SelectServices/SelectServices";
import UserDetails from "../Frames/UserDetails/userDetails";
import Questions from "../Frames/Questions/Questions";
import SignupLast from "../Frames/SignupLast/SignupLast";
import SignupSuccessful from "../Frames/SignupSuccessful/SignupSuccessful";

import NumericSteppers from "../../components/NumericSteppers/NumericSteppers";
import CCheckbox from "../../components/CCheckbox/CCheckbox";

import EmailIcon from "../../assets/form/email.svg";
import Passwordicon from "../../assets/form/password.svg";
import DownArrow from "../../assets/icons/down-chevron.svg";

import {
    useAddUserDetailsMutation,
    useSignupUserMutation,
} from "../../app/services/auth";
import { servicesSeeking } from "../Frames/SelectServices/data";
import { apQuestions, hearAboutUslist, motivesList } from "./data";
import { getCheckedString } from "../../utils/utils";

export default function Signup() {
    const [frames, setFrames] = useState({
        signupActive: true,
        selectPersona: false,
        services: false,
        userDetails: false,
        questions: false,
        signupLast: false,
        signupSuccessful: false,
    });

    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subscriptionCode: "",
        checked: false,
        userId: "",
    });

    const [otherDetails, setOtherDetails] = useState({
        schoolName: "",
        grade: "",
        FirstName: "",
        LastName: "",
        Email: "",
        Phone: "",
        aboutScore: "",
    });

    const [signupUser, signupUserResp] = useSignupUserMutation();
    const [addUserDetails, addUserDetailsResp] = useAddUserDetailsMutation();

    const [persona, setPersona] = useState("");
    const [currentStep, setcurrentStep] = useState(1);

    const [services, setServices] = useState(servicesSeeking);
    const [apCourses, setApCourses] = useState(apQuestions);
    const [motive, setMotive] = useState(motivesList);
    const [hearAboutUs, setHearAboutUs] = useState(hearAboutUslist);

    //temparory
    const [redirectLink, setRedirectLink] = useState("");

    const handleClick = () => {
        let reqBody = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
        };
        signupUser(reqBody).then((res) => {
            console.log(res.data);
            setRedirectLink(res.data.link);
            setValues({ ...values, userId: res.data.userId });
            setFrames({
                ...frames,
                signupActive: false,
                selectPersona: true,
            });
        });
    };

    const addDetails = () => {
        const reqBody = {
            ...otherDetails,
            serviceSeeking: getCheckedString(services),
            apCourses: getCheckedString(apCourses),
            motive: getCheckedString(motive),
            hearAboutUs: getCheckedString(hearAboutUs),
            subscriptionCode: values.subscriptionCode,
            userType: persona,
        };
        addUserDetails({ userId: values.userId, body: reqBody }).then((res) => {
            console.log(res);
            window.open(redirectLink);
        });
    };
    const props = { persona, setFrames, setcurrentStep };
    const valueProps = { values, setValues };
    const otherDetailsProps = { otherDetails, setOtherDetails };
    return (
        <div className="min-h-screen" id={styles.signUp}>
            <div className="grid grid-cols-2 min-h-screen">
                <div className="bg-primary"></div>
                <div className="flex items-center">
                    <div className="w-full px-148 py-8">
                        <h1>
                            {frames.signupActive
                                ? "Signup"
                                : frames.setPassword
                                ? ""
                                : "Profile Details"}
                        </h1>

                        {currentStep > 1 && (
                            <NumericSteppers
                                totalSteps={6}
                                currentStep={currentStep}
                            />
                        )}

                        {frames.signupActive ? (
                            <>
                                <h6>Sign up with email address</h6>
                                <div className="flex">
                                    <InputField
                                        placeholder="First Name"
                                        parentClassName="mb-6 mr-5"
                                        label="First Name"
                                        labelClassname="ml-2 mb-2"
                                        value={values.firstName}
                                        onChange={(e) =>
                                            setValues({
                                                ...values,
                                                firstName: e.target.value,
                                            })
                                        }
                                    />
                                    <InputField
                                        placeholder="Last Name "
                                        parentClassName="mb-6"
                                        label="Last Name"
                                        labelClassname="ml-2 mb-2"
                                        value={values.lastName}
                                        onChange={(e) =>
                                            setValues({
                                                ...values,
                                                lastName: e.target.value,
                                            })
                                        }
                                    />
                                </div>

                                <InputField
                                    placeholder="email@example.com"
                                    parentClassName="mb-6"
                                    label="Email Address"
                                    value={values.email}
                                    onChange={(e) =>
                                        setValues({
                                            ...values,
                                            email: e.target.value,
                                        })
                                    }
                                    labelClassname="ml-2 mb-2"
                                />
                                <InputField
                                    placeholder="Phone Number"
                                    parentClassName="mb-6"
                                    label="Phone Number (For tutor correspondence)"
                                    labelClassname="ml-2 mb-2"
                                    inputContainerClassName="relative"
                                    inputClassName="ml-80"
                                    inputLeftField={
                                        <div
                                            className={styles.phoneNumberField}
                                        >
                                            <div className="flex-1 flex justify-center items-center font-medium">
                                                +91
                                                <img
                                                    src={DownArrow}
                                                    className="w-3 ml-3"
                                                />
                                            </div>
                                        </div>
                                    }
                                    value={values.phone}
                                    onChange={(e) =>
                                        setValues({
                                            ...values,
                                            phone: e.target.value,
                                        })
                                    }
                                />

                                <InputField
                                    placeholder=""
                                    parentClassName="mb-6"
                                    label="Please enter the subscription code required to access Seven Square Learning and starting prep."
                                    value={values.subscriptionCode}
                                    onChange={(e) =>
                                        setValues({
                                            ...values,
                                            subscriptionCode: e.target.value,
                                        })
                                    }
                                    labelClassname="ml-2 mb-2"
                                />

                                <div className="flex items-center">
                                    <CCheckbox
                                        checked={values.checked}
                                        onChange={() =>
                                            setValues({
                                                ...values,
                                                checked: !values.checked,
                                            })
                                        }
                                    />
                                    <label htmlFor="check">
                                        I don't have one.
                                    </label>
                                </div>

                                <button
                                    disabled={
                                        values.email === "" ? true : false
                                    }
                                    className="w-full bg-primaryDark disabled:bg-pink py-3 mt-12 rounded-10 text-white text-21 font-medium"
                                    onClick={handleClick}
                                >
                                    Submit
                                </button>
                            </>
                        ) : frames.selectPersona ? (
                            <SelectPersona {...props} setPersona={setPersona} />
                        ) : frames.services ? (
                            <SelectServices
                                {...props}
                                services={services}
                                setServices={setServices}
                                {...otherDetailsProps}
                                {...valueProps}
                            />
                        ) : frames.userDetails ? (
                            <UserDetails {...props} {...otherDetailsProps} />
                        ) : frames.questions ? (
                            <Questions
                                {...props}
                                {...otherDetailsProps}
                                apCourses={apCourses}
                                motive={motive}
                                setApCourses={setApCourses}
                                setMotive={setMotive}
                            />
                        ) : frames.signupLast ? (
                            <SignupLast
                                {...props}
                                hearAboutUs={hearAboutUs}
                                setHearAboutUs={setHearAboutUs}
                            />
                        ) : frames.signupSuccessful ? (
                            <SignupSuccessful
                                {...props}
                                addDetails={addDetails}
                            />
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
