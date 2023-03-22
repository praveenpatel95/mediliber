import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import Header from "./Layout/Header";
import Protected from "../Auth/Protected/Protected";

function SuperAdminLayout() {
    const {
        isAuthenticated, user
    } = useSelector(state => state?.AuthReducer);

    return (
        <Protected isAuthenticated={isAuthenticated} user={user} role='super_admin'>
            <Header/>
            <Outlet/>
        </Protected>

    )
}

export default SuperAdminLayout;