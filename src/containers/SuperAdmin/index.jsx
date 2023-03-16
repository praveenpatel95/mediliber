import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import Header from "./Layout/Header";

function SuperAdminLayout(){
    const {
        isAuthenticated
    } = useSelector(state => state?.AuthReducer);

    const navigate = useNavigate();
    useEffect(() => {
        if(!isAuthenticated){
            navigate('/auth/login');
        }
    }, [isAuthenticated]);

    return (
        <>
            <Header />
            <Outlet/>
        </>

    )
}
export default SuperAdminLayout;