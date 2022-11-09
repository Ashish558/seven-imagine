import React from "react";
import styles from "./SignUp.module.css";

const SignUp = () => {
    return (
        <div id={styles.signUp} className="flex">
            <div className="w-1/2" id={styles.signUpLeft}></div>
            <div className="w-1/2" id={styles.signUpRight}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus eum voluptatum iusto, iure cupiditate optio
                accusantium error saepe, exercitationem impedit fuga natus quos
                eaque velit, nam minima consectetur dicta sapiente.
            </div>
        </div>
    );
};

export default SignUp;
