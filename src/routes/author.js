import {Route} from "react-router-dom";
import AuthorLayout from "../containers/Auhtor";
import Dashboard from "../containers/Auhtor/Dashboard";
import ArticleCreate from "../containers/Auhtor/Article/Create/ArticleCreate";
import UpdatePassword from "../containers/Auth/UpdatePassword";
import AuthorProfile from "../containers/Auhtor/Profile";


export default [
    <Route path="author" key="AuthorLayout" element={<AuthorLayout/>}>
        <Route path="dashboard" key="Dashboard" element={<Dashboard/>}/>
        <Route path="article/create" key="ArticleCreate" element={<ArticleCreate/>}/>

        <Route path="change-password" key="ArticleCreate" element={<UpdatePassword/>}/>
        <Route path="profile" key="AuthorProfile" element={<AuthorProfile/>}/>
    </Route>
];