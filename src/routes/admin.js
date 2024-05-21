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
import JournalArticles from "../containers/Admin/Articles";
import ArticleView from "../containers/Admin/Articles/View";
import PublishNewArticle from "../containers/Admin/Articles/PublishNewArticle";
import CreateArticle from "../containers/Admin/Articles/Create";
import PublishArticleEdit from "../containers/Admin/Articles/PublishArticleEdit";

export default [
    <Route path="admin" key="AdminLayout" element={<AdminLayout/>}>
        <Route path='update-profile' key="UpdateProfile" element={<UpdateProfile/>}/>
        <Route path='update-password' key="UpdatePassword" element={<UpdatePassword/>}/>

        <Route path="dashboard" key="Dashboard" element={<Dashboard />} />
        <Route path="journal-profile" key="JournalProfile" element={<JournalProfile />} />

        <Route path="journal-pages" key="JournalPages" element={<JournalPages />} />
        <Route path="journal-page/edit/:pageId" key="JournalPageEdit" element={<JournalPageEdit />} />

        <Route path="editorial-board" key="EditorialBoard" element={<EditorialBoard />} />
        <Route path="editorial-board/create" key="EditorialBoardCreate" element={<EditorialBoardCreate />} />
        <Route path="editorial-board/edit/:EditorialId" key="EditorialBoardCreate" element={<EditorialBoardCreate />} />

        <Route path="reviewer-board" key="ReviewerBoard" element={<ReviewerBoard />} />
        <Route path="reviewer-board/create" key="ReviewerBoardCreate" element={<ReviewerBoardCreate />} />
        <Route path="reviewer-board/edit/:ReviewerId" key="ReviewerBoardCreate" element={<ReviewerBoardCreate />} />

        <Route path="articles" key="JournalArticles" element={<JournalArticles />} />
        <Route path="article/view/:articleId" key="ArticleView" element={<ArticleView />} />
        <Route path="article/publish/:articleId" key="ArticleView" element={<PublishNewArticle />} />
        <Route path="article/create" key="CreateArticle" element={<CreateArticle />} />
        <Route path="article/edit/:articleId" key="CreateArticle" element={<PublishArticleEdit />} />
    </Route>
];