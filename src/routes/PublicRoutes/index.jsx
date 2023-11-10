import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { UserContext } from "../../providers/UserContext"

export const PublicRoutes = () =>{
    const {token} = useContext(UserContext);

    return !token ? <Navigate to="/" /> : <Outlet />;
}