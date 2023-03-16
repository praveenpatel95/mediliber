import {Route, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

export default function ProtectedRoute ({ auth, ...props }){
    const {
        isAuthenticated
    } = useSelector(state => state?.AuthReducer);

    const navigate = useNavigate();
    return isAuthenticated
        ? (<Route {...props} />)
        :  navigate('/auth/login');
};