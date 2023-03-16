import {Route} from "react-router-dom";
import Dashboard from "../containers/SuperAdmin/Dashboard";
import SuperAdminLayout from "../containers/SuperAdmin";
import JournalCategory from "../containers/SuperAdmin/JournalCategory";
import JournalCategoryCreate from "../containers/SuperAdmin/JournalCategory/Create";
import Journals from "../containers/SuperAdmin/Journals";
import JournalCreate from "../containers/SuperAdmin/Journals/Create";
import JournalUsers from "../containers/SuperAdmin/JournalUsers";
import JournalUserCreate from "../containers/SuperAdmin/JournalUsers/Create";
import UpdateProfile from "../containers/Auth/UpdateProfile";
import UpdatePassword from "../containers/Auth/UpdatePassword";

export default [
    <Route path="super-admin" element={<SuperAdminLayout/>}>
        <Route path='dashboard' element={<Dashboard/>}/>

        <Route path='journal-categories' element={<JournalCategory/>}/>
        <Route path='journal-category/create' element={<JournalCategoryCreate/>}/>
        <Route path='journal-category/edit/:categoryId' element={<JournalCategoryCreate/>}/>

        <Route path='journals' element={<Journals/>}/>
        <Route path='journal/create' element={<JournalCreate/>}/>
        <Route path='journal/edit/:journalId' element={<JournalCreate/>}/>

        <Route path='journal/access/users' element={<JournalUsers/>}/>
        <Route path='journal/access/user/create' element={<JournalUserCreate/>}/>

        <Route path='update-profile' element={<UpdateProfile/>}/>
        <Route path='update-password' element={<UpdatePassword/>}/>
    </Route>
];