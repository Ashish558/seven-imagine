import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import ParentDashboard from "./Pages/ParentDashboard/ParentDashboard";
import SignUp from "./Pages/SignUp/SignUp";
import StudentDashboard from "./Pages/StudentDashboard/StudentDashboard";

function App() {
    return (
        <div className="flex">
            <div className="w-1/12">
                <Sidebar />
            </div>

            <>
                <Routes>
                    <Route
                        path="/parent-dashboard"
                        element={<ParentDashboard />}
                    ></Route>
                    <Route
                        path="/student-dashboard"
                        element={<StudentDashboard />}
                    ></Route>
                    <Route path="/sign-up" element={<SignUp />}></Route>
                </Routes>
            </>
        </div>
    );
}

export default App;
