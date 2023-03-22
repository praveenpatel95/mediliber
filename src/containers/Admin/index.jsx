import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import Header from "./Layout/Header";
import Protected from "../Auth/Protected/Protected";
import {useEffect, useState} from "react";

function AdminLayout() {
    const {
        isAuthenticated,
        user
    } = useSelector(state => state?.AuthReducer);


    return (
        <Protected isAuthenticated={isAuthenticated} user={user} role='admin'>
            <Header/>
            <Outlet/>
        </Protected>

    )
}

export default AdminLayout;