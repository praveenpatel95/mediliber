import { Navigate } from "react-router-dom";
const Protected = ({ isAuthenticated, user, role, children }) => {
    if (user?.role_type != role) {
        return <Navigate to="/auth/login" replace />;
    }
    return children;
};
export default Protected;