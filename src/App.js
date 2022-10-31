import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import ParentDashboard from "./Pages/ParentDashboard/ParentDashboard";

function App() {
    return (
        <div className="flex">
            <Sidebar />

            <div className="w-10/12">
                <Routes>
                    <Route
                        path="/parent-dashboard"
                        element={<ParentDashboard />}
                    ></Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;
