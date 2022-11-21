import AppRoutes from "./navigation/AppRoutes";
import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { updateIsLoggedIn } from "./app/slices/user";

function App() {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        setLoading(true)
        // console.log(sessionStorage.getItem('token'))
        if (sessionStorage.getItem('token')) {
            setLoading(false)
            dispatch(updateIsLoggedIn(true))
        } else {
            setLoading(false)
        }
    }, [])

    if (loading) return <></>

    return (
        <>
            <AppRoutes />
        </>
    );
}

export default App;
