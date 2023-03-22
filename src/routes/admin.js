import {Route} from "react-router-dom";
import AdminLayout from "../containers/Admin";
import Dashboard from "../containers/Admin/Dashboard";
import JournalProfile from "../containers/Admin/JournalProfile";
import JournalPages from "../containers/Admin/Pages";
import JournalPageEdit from "../containers/Admin/Pages/Edit";
import EditorialBoard from "../containers/Admin/EditorialBoard";
import EditorialBoardCreate from "../containers/Admin/EditorialBoard/Create";
import ReviewerBoardCreate from "../containers/Admin/ReviewerBoard/Create";
import ReviewerBoard from "../containers/Admin/ReviewerBoard";
import UpdateProfile from "../containers/Auth/UpdateProfile";
import UpdatePassword from "../containers/Auth/UpdatePassword";

export default [
    <Route path="admin" element={<AdminLayout/>}>
        <Route path='update-profile' element={<UpdateProfile/>}/>
        <Route path='update-password' element={<UpdatePassword/>}/>

        <Route path="dashboard" element={<Dashboard />} />
        <Route path="journal-profile" element={<JournalProfile />} />

        <Route path="journal-pages" element={<JournalPages />} />
        <Route path="journal-page/edit/:pageId" element={<JournalPageEdit />} />

        <Route path="editorial-board" element={<EditorialBoard />} />
        <Route path="editorial-board/create" element={<EditorialBoardCreate />} />
        <Route path="editorial-board/edit/:EditorialId" element={<EditorialBoardCreate />} />

        <Route path="reviewer-board" element={<ReviewerBoard />} />
        <Route path="reviewer-board/create" element={<ReviewerBoardCreate />} />
        <Route path="reviewer-board/edit/:ReviewerId" element={<ReviewerBoardCreate />} />
    </Route>
];