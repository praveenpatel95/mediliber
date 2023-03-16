import {Route} from "react-router-dom";
import Login from "../containers/Auth/Login";
import Auth from "../containers/Auth";

export default [
    <Route path="auth" element={<Auth/>}>
        <Route path="login" element={<Login/>}/>
    </Route>
];