import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"

export const PrivateRoutes = () => {

    const {token} = useContext(UserContext);

    return token ? <Outlet/> : <Navigate to="/user" />
}