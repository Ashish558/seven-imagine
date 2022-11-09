import React, { useState } from "react";
import styles from "./SignUp.module.css";

const SignUp = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [passwordVisisbility, setPasswordVisisbility] = useState("none");

    const verifyEmail = () => {
        setPasswordVisisbility("block");
        document.getElementById("verifyEmail").style.display = "none";
        document.getElementById("signUp").style.display = "block";
    };

    return (
        <div id={styles.signUp} className="flex w-11/12">
            <div className="w-1/2" id={styles.signUpLeft}></div>
            <div className="w-1/2" id={styles.signUpRight}>
                <h1>SignUp</h1>
                <h5>Sign up with email address</h5>

                <div className="flex" style={{ gap: "24px" }}>
                    <div className="w-1/2">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            placeholder="First Name"
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            placeholder="Last Name"
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                </div>

                <div id={styles.mail}>
                    <label htmlFor="email">Email Address</label>
                    <br />
                    <input
                        type="text"
                        id="email"
                        placeholder="email@example.com"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div
                    id="passwordSection"
                    style={{ display: passwordVisisbility }}
                >
                    <div id={styles.password}>
                        <label htmlFor="password">Password</label>
                        <br />
                        <input
                            type="password"
                            id="password"
                            placeholder="minimum 8 characters"
                            onChange={(e) => setPass(e.target.value)}
                        />
                    </div>
                    <div id={styles.confirm}>
                        <label htmlFor="password">Confirm Password</label>
                        <br />
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setConfirmPass(e.target.value)}
                        />
                    </div>
                </div>

                <button
                    onClick={verifyEmail}
                    id="verifyEmail"
                    disabled={
                        !(
                            firstName.length > 0 &&
                            lastName.length > 0 &&
                            email.length > 0
                        )
                    }
                >
                    Verify Email
                </button>
                <button
                    onClick={verifyEmail}
                    id="signUp"
                    disabled={!(pass.length > 0 && pass === confirmPass)}
                    style={{ display: "none" }}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default SignUp;
