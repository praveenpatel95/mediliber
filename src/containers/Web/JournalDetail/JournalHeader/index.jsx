import React from "react";
import JournalMenu from "../Common/JournalMenu";
import {Outlet} from "react-router-dom";
import JournalHead from "./JournalHead";

export default function JournalHeader() {
    return (
        <>
            <JournalHead journalName="Journal of science"/>
            <JournalMenu/>
            <Outlet/>
        </>
    )
}