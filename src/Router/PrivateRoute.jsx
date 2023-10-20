import { useContext } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    // console.log(user);
    // console.log(location.pathname);
    if (loading) {
        return <span className="loading loading-infinity loading-lg"></span>;
    }
    if (user) {
        return children;
    }
    // if (!user) {
    //     return <Navigate to="/login"></Navigate>
    // }
    
    return <Navigate state={location.pathname} to="/login" ></Navigate>
};

export default PrivateRoute;