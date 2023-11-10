import { useState } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"

import { RegisterPage } from "../pages/RegisterPage";
import { DashboardPage } from "../pages/DashboardPage";

import { LoginPage } from "../pages/LoginPage";
import { NotFound } from "../pages/ErrorPage";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";


export const RoutesMain = () => {
    const [ user, setUser ] = useState(null);

    const navigate = useNavigate();

    const userLogout = () =>{
        setUser(null);
        navigate("/");
        localStorage.removeItem("@TOKEN");
    }


    return (
        <Routes>
            <Route element={<PublicRoutes />}/>
                <Route path="/register" element={<RegisterPage />}/>
                <Route path="/" element={<LoginPage setUser={setUser} />}/>
                <Route/>
                <Route path="/user" element={<DashboardPage user={user} userLogout={userLogout}/> }/>
            <Route element={<PrivateRoutes/>}>
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
            
    );
}

    