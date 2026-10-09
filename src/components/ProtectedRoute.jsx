import { Navigate } from "react-router-dom";

function ProtectedRoute({children}) {
    const isLoggedIn = false;

    if(!isLoggedIn) {
        return <Navigate to= "/login" /> 
        // if not logged in navigate it to login page
    }
    return children;
}

export default ProtectedRoute;