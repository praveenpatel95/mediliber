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
import Indexing from "../containers/SuperAdmin/Indexing";
import IndexingCreate from "../containers/SuperAdmin/Indexing/Create";
import MainPage from "../containers/SuperAdmin/Pages/MainPage";
import MainPageEdit from "../containers/SuperAdmin/Pages/MainPage/Update";
import OtherPages from "../containers/SuperAdmin/Pages/OtherPages";
import OtherPageEdit from "../containers/SuperAdmin/Pages/OtherPages/Edit";
import Organization from "../containers/SuperAdmin/organization";
import OrganizationCreate from "../containers/SuperAdmin/organization/Create";
import WebSetting from "../containers/SuperAdmin/WebSetting";
import TempArticle from "../containers/SuperAdmin/TempArticle";
import TempArticleCreate from "../containers/SuperAdmin/TempArticle/Create";
import ContactEnquiry from "../containers/SuperAdmin/ContactEnquiry";

export default [

    <Route path="super-admin" key="SuperAdminLayout" element={<SuperAdminLayout/>}>
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

        <Route path='indexing' element={<Indexing/>}/>
        <Route path='indexing/create' element={<IndexingCreate/>}/>
        <Route path='indexing/edit/:indexingId' element={<IndexingCreate/>}/>

        <Route path='organization' element={<Organization/>}/>
        <Route path='organization/create' element={<OrganizationCreate/>}/>
        <Route path='organization/edit/:organizationId' element={<OrganizationCreate/>}/>

        <Route path='main-pages' element={<MainPage/>}/>
        <Route path='main-page/edit/:pageId' element={<MainPageEdit/>}/>

        <Route path='other-pages' element={<OtherPages/>}/>
        <Route path='other-page/edit/:pageId' element={<OtherPageEdit/>}/>

        <Route path='web-setting' element={<WebSetting/>}/>

        <Route path='temp-article' element={<TempArticle/>}/>
        <Route path='temp-article/create' element={<TempArticleCreate/>}/>
        <Route path='temp-article/edit/:articleId' element={<TempArticleCreate/>}/>
        <Route path="contact-enquires" key="contact-enquires" element={<ContactEnquiry />} />
    </Route>
];