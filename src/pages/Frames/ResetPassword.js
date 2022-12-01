import React, { useState } from "react";
import InputField from "../../components/InputField/inputField";
import Passwordicon from "../../assets/form/password.svg";

export default function ResetPassword({
    setActiveFrame,
    setLoginActive,
    setFrames,
    signup,
}) {
    return (
        <div className={`w-full ${signup ? "" : "px-148"} `}>
            <p className="font-bold text-5xl leading-snug mb-7">
                Set New Password
            </p>

            <p className="mb-12 text-black-900">
                The password must contain 8 characters
            </p>

            <InputField
                Icon={Passwordicon}
                parentClassName="mb-6"
                type="password"
                placeholder="minimum 8 characters"
                inputContainerClassName='border'
                label="Set New Password"
                labelClassname="ml-2 mb-2"
            />

            <InputField
                Icon={Passwordicon}
                parentClassName="mb-2.5"
                type="password"
                placeholder="Confirm Password"
                inputContainerClassName='border'
                label="Confirm Password"
                labelClassname="ml-2 mb-2"
            />

            <button
                disabled={false}
                className="w-full bg-primaryDark font-medium disabled:bg-pink  py-4 mt-12 rounded-10 text-white text-21"
                onClick={() =>
                    signup
                        ? setFrames((prev) => {
                              return {
                                  ...prev,
                                  setPassword: false,
                                  selectPersona: true,
                              };
                          })
                        : setActiveFrame(setLoginActive)
                }
            >
                Set New Password
            </button>
        </div>
    );
}
