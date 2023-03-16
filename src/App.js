import React from 'react';
import MainRouter from "./routes";
import './App.scss'
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <MainRouter/>
        </BrowserRouter>
    );
}

export default App;