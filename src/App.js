import React from 'react';
import MainRouter from "./routes";
import './App.scss'
import {BrowserRouter} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
function App() {

    return (
        <BrowserRouter>
            <MainRouter/>
            <ScrollToTop />
        </BrowserRouter>
    );
}

export default App;