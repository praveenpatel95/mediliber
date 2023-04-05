import React, {useEffect, useState} from "react";
import Header from "./Header";
import {Outlet} from "react-router-dom";
import Footer from "./Footer";

function WebLayout() {
    const [isSticky, setIsSticky] = useState(true)

    return (

        <>
            <Header isSticky={isSticky}/>
            <Outlet context={{ setIsSticky }}/>
            <Footer/>
        </>
    )
}

export default WebLayout;