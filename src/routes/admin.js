import {Route} from "react-router-dom";
import AdminLayout from "../containers/Admin";
import Dashboard from "../containers/Admin/Dashboard";

export default [
    <Route path="admin" element={<AdminLayout/>}>
        <Route path="dashboard" element={<Dashboard />} />
    </Route>
];