import {Route} from "react-router-dom";
import Login from "../containers/Auth/Login";
import Auth from "../containers/Auth";
import Register from "../containers/Auth/Register";
import Verify from "../containers/Auth/Verify";

export default [
    <Route path="auth" key="auth" element={<Auth/>}>
        <Route path="login" key="login" element={<Login/>}/>
        <Route path="register" key="register" element={<Register/>}/>
        <Route path="verify" key="verify" element={<Verify/>}/>
    </Route>
];