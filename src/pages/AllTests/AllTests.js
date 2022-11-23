import React, { useEffect, useState } from "react";
import InputSelect from "../../components/InputSelect/InputSelect";
import Table from "../../components/Table/Table";
import Modal from "../../components/Modal/Modal";
import InputField from "../../components/InputField/inputField";

import AddIcon from "../../assets/icons/add.svg";
import SearchIcon from "../../assets/icons/search.svg";
import styles from "./style.module.css";

import data from "./tempData";
import upload from "./../../assets/icons/upload.png";
import axios from "axios";
const optionData = ["option 1", "option 2", "option 3", "option 4", "option 5"];
const tableHeaders = ["Test Name", "Date Modified", "Test Type", "", ""];

export default function AllTests() {
    const [tableData, setTableData] = useState([]);
    const [modalActive, setModalActive] = useState(false);
    const [testName, setTestName] = useState("");
    const [concept, setConcept] = useState("");
    const [strategy, setStrategy] = useState("");
    const [name, setName] = useState("");
    const [pdfFile, setPDFFile] = useState({});
    const [csvFile, setCSVFile] = useState({});
    const [csvError, setCSVError] = useState("");
    const [PDFError, setPDFError] = useState("");

    const [removeQuestionModal, setRemoveQuestionModal] = useState(false);

    const [modalData, setModalData] = useState({
        testName: "",
        dateModified: "",
        testType: "",
    });

    const handleClose = () => setModalActive(false);
    const closeRemoveModal = () => setRemoveQuestionModal(false);

    const openRemoveTestModal = (item) => {
        setRemoveQuestionModal(true);
        // console.log(item)
    };
    const removeTest = (item) => {
        setRemoveQuestionModal(false);
    };

    const handlePDFFile = (file) => {
        if (file.type.includes("pdf")) {
            setPDFError("");
            setPDFFile(file);
        } else {
            setPDFFile({});
            setPDFError("Not a PDF File");
        }
    };
    const handleCSVFile = (file) => {
        if (file.type.includes("csv")) {
            setCSVError("");
            setCSVFile(file);
        } else {
            setCSVFile({});
            setCSVError("Not a CSV File");
        }
    };

    useEffect(() => {
        axios
            .get("https://sevenimagine.herokuapp.com/api/test")
            .then((res) => setTableData(res.data.data.test));
    }, []);

    return (
        <div className="lg:ml-pageLeft bg-lightWhite min-h-screen">
            <div className="py-14 px-5">
                <div className="flex justify-between items-center">
                    <p className="font-bold text-4xl">All Tests</p>
                    <button
                        className="bg-primaryOrange py-3.5 px-6 flex items-center text-white font-semibold rounded-lg mr-55"
                        onClick={() => setModalActive(true)}
                    >
                        Add new Test
                        <img src={AddIcon} className="ml-3" />
                    </button>
                </div>
                <div className="flex align-center mt-8">
                    <InputField
                        value={testName}
                        IconRight={SearchIcon}
                        onChange={(val) => setTestName(val)}
                        optionData={optionData}
                        placeholder="Test Name"
                        parentClassName="w-290 mr-4"
                        inputContainerClassName="bg-white"
                        type="select"
                    />
                </div>

                <div className="mt-6">
                    <Table
                        dataFor="allTests"
                        data={tableData}
                        tableHeaders={tableHeaders}
                        maxPageSize={10}
                        onClick={{ openRemoveTestModal }}
                    />
                </div>
            </div>

            {modalActive && (
                <Modal
                    title="Create a New Test"
                    cancelBtn={true}
                    primaryBtn={{ text: "Assign" }}
                    handleClose={handleClose}
                    body={
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 md:gap-x-3 gap-y-2 gap-y-4">
                                <InputField
                                    label="Test Name"
                                    placeholder="Test Name"
                                    onChange={(e) => setName(e.target.value)}
                                />

                                <InputSelect
                                    value={strategy}
                                    onChange={(val) => setStrategy(val)}
                                    optionData={optionData}
                                    label="Test Type"
                                    labelClassname="ml-3 mb-0"
                                    placeholder="Test Type"
                                    parentClassName="w-full mr-4"
                                    type="select"
                                />
                            </div>

                            <div id={styles.testUploadContainer}>
                                <span id={styles.testUpload}>
                                    Upload the Test
                                </span>

                                <div id={styles.handleFileUpload}>
                                    <div id={styles.uploadButtons}>
                                        <div id={styles.pdfUpload}>
                                            <label
                                                htmlFor="pdf"
                                                className={
                                                    pdfFile.name &&
                                                    styles.fileUploaded
                                                }
                                            >
                                                Upload PDF
                                                <img
                                                    src={upload}
                                                    alt="Upload"
                                                />
                                            </label>

                                            <div className={styles.error}>
                                                {PDFError}
                                            </div>

                                            <input
                                                id="pdf"
                                                type="file"
                                                onChange={(e) =>
                                                    handlePDFFile(
                                                        e.target.files[0]
                                                    )
                                                }
                                            />
                                        </div>
                                        <div id={styles.csvUpload}>
                                            <label
                                                htmlFor="csv"
                                                className={
                                                    csvFile.name &&
                                                    styles.fileUploaded
                                                }
                                            >
                                                Upload CSV
                                                <img
                                                    src={upload}
                                                    alt="Upload"
                                                />
                                            </label>

                                            <div className={styles.error}>
                                                {csvError}
                                            </div>

                                            <input
                                                id="csv"
                                                type="file"
                                                onChange={(e) =>
                                                    handleCSVFile(
                                                        e.target.files[0]
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>

                                    <div id={styles.filename}>
                                        {pdfFile?.name || csvFile?.name}
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                    classname={"max-w-840 mx-auto"}
                />
            )}
            {removeQuestionModal && (
                <Modal
                    title={
                        <>
                            Are you sure <br />
                            you want to remove the test ?
                        </>
                    }
                    titleClassName="leading-9"
                    cancelBtn={true}
                    cancelBtnClassName="py-4"
                    primaryBtn={{
                        text: "Remove",
                        className: "bg-danger",
                        onClick: removeTest,
                    }}
                    handleClose={closeRemoveModal}
                    body={<div className="mb-10"></div>}
                    classname={"max-w-567 mx-auto"}
                />
            )}
        </div>
    );
}
