import React, { useState } from "react";
import InputField from "../../components/InputField/inputField";
import ForgotPassword from "../Frames/ForgotPassword";
import ResetPassword from "../Frames/ResetPassword";

import EmailIcon from "../../assets/form/email.svg";
import Passwordicon from "../../assets/form/password.svg";
import DownArrow from "../../assets/icons/down-chevron.svg";
import styles from "./signup.module.css";
import SelectPersona from "../Frames/SelectPersona/selectPersona";
import SelectServices from "../Frames/SelectServices/SelectServices";
import UserDetails from "../Frames/UserDetails/userDetails";
import Questions from "../Frames/Questions/Questions";
import SignupLast from "../Frames/SignupLast/SignupLast";
import NumericSteppers from "../../components/NumericSteppers/NumericSteppers";

export default function Signup() {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    });

    const [persona, setPersona] = useState("");
    const [currentStep, setcurrentStep] = useState(1);

    const [frames, setFrames] = useState({
        signupActive: true,
        selectPersona: false,
        services: false,
        userDetails: false,
        questions: false,
        signupLast: false,
    });

    const handleClick = () => {
        setFrames({
            ...frames,
            signupActive: false,
            selectPersona: true,
        });
    };

    const props = { persona, setFrames, setcurrentStep };

    return (
        <div className="min-h-screen" id={styles.signUp}>
            <div className="grid grid-cols-2 min-h-screen">
                <div className="bg-primary"></div>
                <div className="flex items-center">
                    <div className="w-full px-148 py-8">
                        <h1>Signup</h1>

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
                                    />
                                    <InputField
                                        placeholder="Last Name "
                                        parentClassName="mb-6"
                                        label="Last Name"
                                        labelClassname="ml-2 mb-2"
                                    />
                                </div>

                                <InputField
                                    placeholder="email@example.com"
                                    parentClassName="mb-6"
                                    label="Email Address"
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
                                />

                                <InputField
                                    placeholder=""
                                    parentClassName="mb-6"
                                    label="Please enter the subscription code required to access Seven Square Learning and starting prep."
                                    onChange={(e) =>
                                        setValues({
                                            ...values,
                                            email: e.target.value,
                                        })
                                    }
                                    labelClassname="ml-2 mb-2"
                                />

                                <input id="check" type="checkbox" />
                                <label htmlFor="check">I don't have one.</label>

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
                            <SelectServices {...props} />
                        ) : frames.userDetails ? (
                            <UserDetails {...props} />
                        ) : frames.questions ? (
                            <Questions {...props} />
                        ) : frames.signupLast ? (
                            <SignupLast {...props} />
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
