import React, { useEffect, useState } from "react";
import styles from "./style.module.css";

import InputField from "../../../components/InputField/inputField";
import Modal from "../../../components/Modal/Modal";
import CalendarIcon from "../../../assets/form/calendar.svg";
import StarIcon from "../../../assets/form/star.svg";
import InputSelect from "../../../components/InputSelect/InputSelect";
import Checkbox from "../../../components/Checkbox/Checkbox";
import PrimaryButton from "../../../components/Buttons/PrimaryButton";
import {
    convertTime12to24,
    getFormattedDate,
    tConvert,
} from "../../../utils/utils";
import InputSearch from "../../../components/InputSearch/InputSearch";
import {
    useLazyGetSettingsQuery,
    useLazyGetStudentsByNameQuery,
    useLazyGetTutorsByNameQuery,
    useSubmitSessionMutation,
    useUpdateSessionMutation,
} from "../../../app/services/session";
import { array } from "yup";

const timeZones = ["IST"];
const tempDays = [
    {
        id: 1,
        text: "M",
        full: "Mon",
        checked: false,
    },
    {
        id: 2,
        text: "T",
        full: "Tue",
        checked: false,
    },
    {
        id: 3,
        text: "W",
        full: "Wed",
        checked: true,
    },
    {
        id: 4,
        text: "T",
        full: "Thu",
        checked: false,
    },
    {
        id: 5,
        text: "F",
        full: "Fri",
        checked: false,
    },
    {
        id: 6,
        text: "S",
        full: "Sat",
        checked: false,
    },
    {
        id: 7,
        text: "S",
        full: "Sun",
        checked: false,
    },
];
const status = ["Scheduled", "Option 2"];

export default function EventModal({
    setEventModalActive,
    persona,
    isUpdating,
    sessionToUpdate,
}) {
    const [data, setData] = useState({
        studentName: "",
        tutorName: "",
        studentId: "",
        tutorId: "",
        date: "",
        time: {
            start: {
                time: "",
                timeType: "",
            },
            end: {
                time: "",
                timeType: "",
            },
        },
        timeZone: "",
        recurring: false,
        day: [],
        endDate: "",
        session: "",
        sessionStatus: "",
        service: "",
        topicsCovered: "",
        rescheduling: false,
        studentMood: "",
        homeworkAssigned: "",
        sessionProductive: "Yes",
        sessionNotes: "",
    });

    const [days, setDays] = useState(tempDays);
    const [topics, setTopics] = useState([]);
    const [studentMoods, setStudentMoods] = useState([]);
    const [homeworks, setHomeworks] = useState([]);
    const [isProductive, setIsProductive] = useState([]);

    const [fetchTutors, tutorResponse] = useLazyGetTutorsByNameQuery();
    const [tutors, setTutors] = useState([]);
    const [tutor, setTutor] = useState("");

    const [submitSession, sessionResponse] = useSubmitSessionMutation();
    const [updateUserSession, updateUserSessionResp] =
        useUpdateSessionMutation();

    const [fetchStudents, studentResponse] = useLazyGetStudentsByNameQuery();
    const [students, setStudents] = useState([]);
    const [student, setStudent] = useState("");

    const [fetchSettings, settingsResponse] = useLazyGetSettingsQuery();
    const [services, setServices] = useState([]);

    const [isSettingsLoaded, setIsSettingsLoaded] = useState(false);

    const getCheckedItems = (strArr, array) => {
        let checkedItems = array.map((item) => {
            return strArr.includes(item.text)
                ? {
                      ...item,
                      checked: true,
                  }
                : { ...item };
        });
        return checkedItems;
    };

    useEffect(() => {
        if (tutor.length > 2) {
            fetchTutors(tutor).then((res) => {
                // console.log(res.data.data.tutor)
                let tempData = res.data.data.tutor.map((tutor) => {
                    return {
                        _id: tutor._id,
                        value: `${tutor.firstName} ${tutor.lastName}`,
                    };
                });
                setTutors(tempData);
            });
        }
    }, [tutor]);

    useEffect(() => {
        if (student.length > 2) {
            fetchStudents(student).then((res) => {
                // console.log(res.data.data)
                let tempData = res.data.data.tutor.map((tutor) => {
                    return {
                        _id: tutor._id,
                        value: `${tutor.firstName} ${tutor.lastName}`,
                    };
                });
                setStudents(tempData);
            });
        }
    }, [student]);

    useEffect(() => {
        fetchSettings().then((res) => {
            let sessionTags = res.data.data.setting.sessionTags;
            // console.log(sessionTags)
            let homeworks = sessionTags.homeworkAssigned.map((item) => {
                return {
                    text: item,
                    checked: false,
                };
            });
            setHomeworks(homeworks);
            let topics = sessionTags.topicsCovered.map((item) => {
                return {
                    text: item,
                    checked: false,
                };
            });
            setTopics(topics);

            let moods = sessionTags.studentMode.map((item) => {
                return {
                    text: item,
                    checked: false,
                };
            });
            setStudentMoods(moods);

            let productive = sessionTags.wasProductive.map((item) => {
                return {
                    text: item,
                    checked: false,
                };
            });
            setIsProductive(productive);
            // console.log(res.data.data.setting)
            setServices(res.data.data.setting.serviceSpecialisation);
            setIsSettingsLoaded(true);
        });
    }, []);

    useEffect(() => {
        if (isUpdating) {
            let startTime = convertTime12to24(
                `${sessionToUpdate.time.start.time} ${sessionToUpdate.time.start.timeType}`
            );
            // console.log(startTime)
            setData({
                ...data,
                studentName: sessionToUpdate.studentName,
                studentId: sessionToUpdate.studentId,
                tutorId: sessionToUpdate.tutorId,
                date: getFormattedDate(sessionToUpdate.date),
                time: sessionToUpdate.time,
                timeZone: sessionToUpdate.timeZone,
                recurring: sessionToUpdate.recurring,

                endDate: getFormattedDate(sessionToUpdate.endDate),
                session: sessionToUpdate.session,
                sessionStatus: sessionToUpdate.sessionStatus,
                rescheduling: sessionToUpdate.resheduling,
                service: sessionToUpdate.service,
                sessionNotes: sessionToUpdate.sessionNotes,
            });

            let checkedDays = days.map((day) => {
                return sessionToUpdate.day.includes(day.full)
                    ? {
                          ...day,
                          checked: true,
                      }
                    : { ...day };
            });
            setDays(checkedDays);

            // console.log(sessionToUpdate.sessionProductive)
            setStudent(sessionToUpdate.studentName);
            setTutor(sessionToUpdate.tutorName);

            // console.log(sessionToUpdate)
        }
    }, [sessionToUpdate]);

    useEffect(() => {
        if (isSettingsLoaded && isUpdating) {
            setIsProductive(
                getCheckedItems(
                    [sessionToUpdate.sessionProductive],
                    isProductive
                )
            );
            setTopics(updateCheckedArr(sessionToUpdate.topicsCovered, topics));
            setHomeworks(
                updateCheckedArr(sessionToUpdate.homeworkAssigned, homeworks)
            );
            setStudentMoods(
                updateCheckedArr(sessionToUpdate.studentMood, studentMoods)
            );
        }
    }, [sessionToUpdate, isSettingsLoaded]);

    const updateCheckedArr = (strArr, arr, setArr) => {
        return arr.map((item) => {
            if (strArr.includes(item.text)) {
                return { ...item, checked: true };
            }
            return { ...item };
        });
    };
    // console.log(sessionToUpdate)
    // console.log(data)

    const handleDayChange = (id) => {
        console.log(id);
        let tempdays = days.map((day) => {
            return day.id === id
                ? { ...day, checked: !day.checked }
                : { ...day };
        });
        setDays(tempdays);
    };
    const handleCheckboxChange = (text, arr, setValue, isSingle) => {
        if (isSingle) {
            const temp = arr.map((topic) => {
                return topic.text === text
                    ? { ...topic, checked: !topic.checked }
                    : { ...topic, checked: false };
            });
            setValue(temp);
        } else {
            const temp = arr.map((topic) => {
                return topic.text === text
                    ? { ...topic, checked: !topic.checked }
                    : { ...topic };
            });
            setValue(temp);
        }
    };

    const getCheckedString = (arr) => {
        let strArr = [];
        arr.map((item) => {
            if (item.checked) strArr.push(item.text);
        });
        return strArr;
    };

    const updateSession = (reqBody) => {
        // console.log(sessionToUpdate)
        console.log(reqBody);
        updateUserSession({ id: sessionToUpdate._id, body: reqBody }).then(
            (res) => {
                console.log(res);
                setEventModalActive(false);
            }
        );
    };

    const handleSubmit = () => {
        let reqBody = { ...data };
        reqBody.studentName = student;
        reqBody.tutorName = tutor;
        let day = [];
        days.map((d) => {
            if (d.checked) day.push(d.full);
        });
        reqBody.day = day;
        reqBody.topicsCovered = getCheckedString(topics);
        reqBody.homeworkAssigned = getCheckedString(homeworks);
        reqBody.studentMood = getCheckedString(studentMoods);

        if (isUpdating) return updateSession(reqBody);

        submitSession(reqBody).then((res) => {
            console.log(res);
            setEventModalActive(false);
        });
    };
    // console.log(convertTime12to24(`${data.time.end.time} ${data.time.end.timeType}`))
    // console.log(convertTime12to24('1:00 AM'))
    // console.log(data)
    // console.log(sessionToUpdate)

    return (
        <>
            <Modal
                classname="max-w-840 mx-auto max-h-750 overflow-y-auto scrollbar-content scrollbar-vertical"
                handleClose={() => setEventModalActive(false)}
                title={isUpdating ? "Update Session" : "Create a New Session"}
                body={
                    <div>
                        <div className="flex mb-4">
                            <InputSearch
                                label="Student Name"
                                labelClassname="ml-3"
                                placeholder="Student Name"
                                parentClassName="w-full mr-4"
                                inputContainerClassName="bg-lightWhite border-0"
                                inputClassName="bg-transparent"
                                type="text"
                                value={student}
                                onChange={(e) => setStudent(e.target.value)}
                                optionData={students}
                                onOptionClick={(item) => {
                                    setStudent(item.value);
                                    setData({ ...data, studentId: item._id });
                                }}
                            />
                            <InputSearch
                                label="Tutor Name"
                                labelClassname="ml-3"
                                placeholder="Tutor Name"
                                parentClassName="w-full"
                                inputContainerClassName="bg-lightWhite border-0"
                                inputClassName="bg-transparent"
                                type="text"
                                value={tutor}
                                onChange={(e) => setTutor(e.target.value)}
                                optionData={tutors}
                                onOptionClick={(item) => {
                                    setTutor(item.value);
                                    setData({ ...data, tutorId: item._id });
                                }}
                            />
                        </div>

                        <div className="flex mb-6">
                            <InputField
                                parentClassName="w-full mr-6"
                                label="Date"
                                labelClassname="ml-3"
                                inputContainerClassName="bg-lightWhite border-0"
                                inputClassName="bg-transparent appearance-none"
                                value={data.date}
                                type="date"
                                onChange={(e) =>
                                    setData({ ...data, date: e.target.value })
                                }
                            />

                            <InputField
                                label="Time"
                                labelClassname="ml-3"
                                parentClassName="w-full max-w-120"
                                type="time"
                                inputContainerClassName="bg-lightWhite border-0 font-medium pr-3"
                                inputClassName="bg-transparent appearance-none font-medium"
                                value={convertTime12to24(
                                    `${data.time.start.time} ${data.time.start.timeType}`
                                )}
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        time: {
                                            ...data.time,
                                            start: tConvert(e.target.value),
                                        },
                                    })
                                }
                            />
                            <span className="self-end mb-4 mx-4 font-medium">
                                -
                            </span>
                            <InputField
                                parentClassName="w-full max-w-120"
                                type="time"
                                inputContainerClassName="bg-lightWhite border-0 font-medium pr-3"
                                inputClassName="bg-transparent appearance-none font-medium"
                                value={convertTime12to24(
                                    `${data.time.end.time} ${data.time.end.timeType}`
                                )}
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        time: {
                                            ...data.time,
                                            end: tConvert(e.target.value),
                                        },
                                    });
                                }}
                            />
                            <InputSelect
                                value={data.timeZone}
                                onChange={(val) =>
                                    setData({ ...data, timeZone: val })
                                }
                                optionData={timeZones}
                                inputContainerClassName="bg-lightWhite border-0 font-medium pr-3"
                                inputClassName="bg-transparent appearance-none font-medium"
                                placeholder="Time Zone"
                                parentClassName="w-full mr-4 ml-8"
                                type="select"
                            />
                        </div>

                        <div className="flex mb-3">
                            <div
                                className={`${styles.container} `}
                                onClick={() =>
                                    setData({
                                        ...data,
                                        recurring: !data.recurring,
                                    })
                                }
                            >
                                <input
                                    checked={data.recurring}
                                    type="checkbox"
                                    name="recurring"
                                />
                                <span class={styles.checkmark}></span>
                            </div>
                            <p className="font-medium text-primary-60 text-sm">
                                Recurring
                            </p>
                        </div>

                        <div className="flex mb-14">
                            <div className="mr-8">
                                <p className="font-medium text-primary-60 mb-1">
                                    Repeat every week on
                                </p>
                                <div className="flex">
                                    {days.map((day, idx) => {
                                        return (
                                            <Checkbox
                                                key={idx}
                                                id={day.id}
                                                body={day.text}
                                                bodyClassName="font-medium flex bg-lightWhite mr-1.4 justify-center items-center text-lg w-56 h-56 rounded-10"
                                                checked={day.checked}
                                                checkedClassName="bg-dark text-white"
                                                onChange={handleDayChange}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                            <InputField
                                label="End Date"
                                labelClassname="ml-3"
                                parentClassName="w-full self-end"
                                type="date"
                                inputContainerClassName="bg-lightWhite border-0 font-medium pr-3"
                                inputClassName="bg-transparent appearance-none font-medium"
                                value={data.endDate}
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        endDate: e.target.value,
                                    })
                                }
                            />
                        </div>

                        {/* SESSIONS */}

                        <div className="flex">
                            <InputField
                                label="Session"
                                labelClassname="ml-3"
                                placeholder="Session"
                                parentClassName="w-full mr-8"
                                inputContainerClassName="bg-lightWhite border-0"
                                inputClassName="bg-transparent"
                                type="text"
                                value={data.session}
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        session: e.target.value,
                                    })
                                }
                            />
                            {persona === "student" ? (
                                <div className="w-full flex flex-col items-start">
                                    <InputSelect
                                        value={data.sessionStatus}
                                        onChange={(val) =>
                                            setData({
                                                ...data,
                                                sessionStatus: val,
                                            })
                                        }
                                        optionData={status}
                                        label="Session Status"
                                        labelClassname="ml-2"
                                        inputContainerClassName="bg-lightWhite border-0 font-medium pr-3"
                                        inputClassName="bg-transparent appearance-none font-medium"
                                        placeholder="Session Status"
                                        parentClassName="w-full mr-4"
                                        type="select"
                                    />
                                    <div className="flex mb-3 mt-3 ml-3">
                                        <div
                                            className={`${styles.container} `}
                                            onClick={() =>
                                                setData({
                                                    ...data,
                                                    rescheduling:
                                                        !data.rescheduling,
                                                })
                                            }
                                        >
                                            <input
                                                checked={data.rescheduling}
                                                type="checkbox"
                                                name="recurring"
                                            />
                                            <span
                                                class={styles.checkmark}
                                            ></span>
                                        </div>
                                        <p className="font-medium text-primary-60 text-sm">
                                            Rescheduling
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <div className="w-full flex flex-col items-center">
                                    <InputSelect
                                        value={data.sessionStatus}
                                        onChange={(val) =>
                                            setData({
                                                ...data,
                                                sessionStatus: val,
                                            })
                                        }
                                        optionData={status}
                                        inputContainerClassName="bg-lightWhite border-0 font-medium pr-3"
                                        inputClassName="bg-transparent appearance-none font-medium"
                                        placeholder="Session Status"
                                        parentClassName="w-full mr-4"
                                        type="select"
                                    />
                                    <div className="flex mb-3 mt-3">
                                        <div
                                            className={`${styles.container} `}
                                            onClick={() =>
                                                setData({
                                                    ...data,
                                                    rescheduling:
                                                        !data.rescheduling,
                                                })
                                            }
                                        >
                                            <input
                                                checked={data.rescheduling}
                                                type="checkbox"
                                                name="recurring"
                                            />
                                            <span
                                                class={styles.checkmark}
                                            ></span>
                                        </div>
                                        <p className="font-medium text-primary-60 text-sm">
                                            Rescheduling
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="flex">
                            <InputSelect
                                label="Services"
                                labelClassname="ml-3"
                                value={data.service}
                                onChange={(val) =>
                                    setData({ ...data, service: val })
                                }
                                optionData={services}
                                inputContainerClassName={`bg-lightWhite border-0 font-medium pr-3
                       `}
                                inputClassName="bg-transparent appearance-none font-medium"
                                placeholder="Service"
                                parentClassName={`w-full mr-4 max-w-373 self-end 
                        ${persona === "student" ? "mr-4" : ""}
                        ${persona === "parent" ? " order-2" : ""}
                        `}
                                type="select"
                            />

                            {persona === "student" && (
                                <div className="ml-4 mt-5">
                                    <p className="font-medium mb-4">
                                        Session Feedback
                                    </p>
                                    <div className="flex">
                                        {[...Array(5)].map((x, i) => (
                                            <img
                                                src={StarIcon}
                                                className="mr-7"
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                            {persona === "parent" && (
                                <div className="mr-4 mt-5 order-1 flex-1">
                                    <p className="font-medium mb-1">
                                        Session Feedback
                                    </p>
                                    <div className="flex py-3 px-4 bg-lightWhite rounded-10">
                                        {[...Array(5)].map((x, i) => (
                                            <img
                                                src={StarIcon}
                                                className="mr-7"
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        {persona !== "student" && persona !== "parent" && (
                            <>
                                <div className="mt-7 mb-5">
                                    <p className="font-medium mb-2.5">
                                        Topics Covered
                                    </p>
                                    <div className="flex">
                                        {topics.length > 0 &&
                                            topics.map((topic, idx) => {
                                                return (
                                                    <div
                                                        key={idx}
                                                        className="flex mb-3 mr-3"
                                                        onClick={() =>
                                                            handleCheckboxChange(
                                                                topic.text,
                                                                topics,
                                                                setTopics
                                                            )
                                                        }
                                                    >
                                                        <div
                                                            className={`${styles.container} `}
                                                        >
                                                            <input
                                                                checked={
                                                                    topic.checked
                                                                }
                                                                type="checkbox"
                                                                name="recurring"
                                                            />
                                                            <span
                                                                class={
                                                                    styles.checkmark
                                                                }
                                                            ></span>
                                                        </div>
                                                        <p className="font-medium text-primary-60 text-sm">
                                                            {topic.text}
                                                        </p>
                                                    </div>
                                                );
                                            })}
                                    </div>
                                </div>

                                <div className="mt-5 mb-5">
                                    <p className="font-medium mb-2.5">
                                        Student Mood
                                    </p>
                                    <div className="flex">
                                        {studentMoods.length > 0 &&
                                            studentMoods.map((item, idx) => {
                                                return (
                                                    <div
                                                        key={idx}
                                                        className="flex mb-3 mr-3"
                                                        onClick={() =>
                                                            handleCheckboxChange(
                                                                item.text,
                                                                studentMoods,
                                                                setStudentMoods
                                                            )
                                                        }
                                                    >
                                                        <div
                                                            className={`${styles.container} `}
                                                        >
                                                            <input
                                                                checked={
                                                                    item.checked
                                                                }
                                                                type="checkbox"
                                                                name="moods"
                                                                value=""
                                                            />
                                                            <span
                                                                class={
                                                                    styles.checkmark
                                                                }
                                                            ></span>
                                                        </div>
                                                        <p className="font-medium text-primary-60 text-sm">
                                                            {item.text}
                                                        </p>
                                                    </div>
                                                );
                                            })}
                                    </div>
                                </div>

                                <div className="mt-5 mb-7">
                                    <p className="font-medium  mb-2.5">
                                        Homework Assigned
                                    </p>
                                    <div className="flex flex-wrap	">
                                        {homeworks.length > 0 &&
                                            homeworks.map((item, idx) => {
                                                return (
                                                    <div
                                                        key={idx}
                                                        className="flex mb-3 mr-6"
                                                        onClick={() =>
                                                            handleCheckboxChange(
                                                                item.text,
                                                                homeworks,
                                                                setHomeworks
                                                            )
                                                        }
                                                    >
                                                        <div
                                                            className={`${styles.container} `}
                                                        >
                                                            <input
                                                                checked={
                                                                    item.checked
                                                                }
                                                                type="checkbox"
                                                                name="moods"
                                                                value=""
                                                            />
                                                            <span
                                                                class={
                                                                    styles.checkmark
                                                                }
                                                            ></span>
                                                        </div>
                                                        <p className="font-medium text-primary-60 text-sm">
                                                            {item.text}
                                                        </p>
                                                    </div>
                                                );
                                            })}
                                    </div>
                                </div>

                                <div className="mt-5 mb-7">
                                    <p className="font-medium mb-2.5">
                                        Was the session Productive?
                                    </p>
                                    <div className="flex flex-wrap	">
                                        {isProductive.map((item, idx) => {
                                            return (
                                                <div
                                                    key={idx}
                                                    className="flex mb-3 mr-6"
                                                    onClick={() =>
                                                        handleCheckboxChange(
                                                            item.text,
                                                            isProductive,
                                                            setIsProductive,
                                                            true
                                                        )
                                                    }
                                                >
                                                    <div
                                                        className={`${styles.container} `}
                                                    >
                                                        <input
                                                            checked={
                                                                item.checked
                                                            }
                                                            type="checkbox"
                                                            name="moods"
                                                            value=""
                                                        />
                                                        <span
                                                            class={
                                                                styles.checkmark
                                                            }
                                                        ></span>
                                                    </div>
                                                    <p className="font-medium text-primary-60 text-sm">
                                                        {item.text}
                                                    </p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div className="mb-12">
                                    <p className="font-medium mb-2.5">
                                        Session Notes
                                    </p>
                                    <textarea
                                        placeholder="Session Notes"
                                        value={data.sessionNotes}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                sessionNotes: e.target.value,
                                            })
                                        }
                                        rows={3}
                                        className="bg-lightWhite w-full outline-0 px-5 py-4 rounded"
                                    ></textarea>
                                    <p className="text-right text-xs text-primary-80">
                                        0/200
                                    </p>
                                </div>

                                <div className="flex justify-center">
                                    <PrimaryButton
                                        children="Schedule"
                                        className="text-21 py-3 font-medium px-7"
                                        onClick={handleSubmit}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                }
            />
        </>
    );
}
