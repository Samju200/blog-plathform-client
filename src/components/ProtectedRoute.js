import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../App";

function ProtectedRoute({ component: Component, ...rest }) {
    const { auth } = useContext(AuthContext);

    return auth ? <Component {...rest} /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
