import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import ParentDashboard from "./Pages/ParentDashboard/ParentDashboard";

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
                </Routes>
            </>
        </div>
    );
}

export default App;
