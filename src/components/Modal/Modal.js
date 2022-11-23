import React, { useEffect } from "react";
import styles from "./modal.module.css";
import CancelIcon from "../../assets/Modal/cancel.svg";
import SecondaryButton from "../Buttons/SecondaryButton";

export default function Modal({
    title,
    titleClassName,
    body,
    cancelBtn,
    cancelBtnClassName,
    primaryBtn,
    handleClose,
    classname,
}) {
    //disable body scroll if modal open
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    return (
        <div className={styles.modalContainer}>
            <div className="w-full p-1">
                <div
                    className={`w-full bg-white p-3 py-5 md:py-9.5 md:px-9.5 rounded-20 relative ${
                        classname ? classname : ""
                    }`}
                >
                    <p
                        className={`font-semibold text-xl md:text-2xl text-center mb-4.5 text-primary-dark 
               ${titleClassName ? titleClassName : ""}`}
                    >
                        {title}
                    </p>
                    {body}

                    {/* footer buttons */}
                    <div className="flex justify-center">
                        {cancelBtn && (
                            <SecondaryButton
                                onClick={handleClose}
                                children="Cancel"
                                className={cancelBtnClassName}
                            />
                        )}
                        {primaryBtn && (
                            <button
                                onClick={
                                    primaryBtn.onClick
                                        ? primaryBtn.onClick
                                        : null
                                }
                                className={`bg-primary rounded-md font-medium text-white py-4 px-12 ml-12 ${
                                    primaryBtn.className
                                        ? primaryBtn.className
                                        : ""
                                }`}
                            >
                                {primaryBtn.text}
                            </button>
                        )}
                    </div>
                    <button className={styles.cancelBtn}>
                        <img src={CancelIcon} onClick={handleClose} />
                    </button>
                </div>
            </div>

            <div className={styles.modalOverlay}></div>
        </div>
    );
}
