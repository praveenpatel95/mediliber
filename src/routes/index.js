import Home from "../containers/Web/Home";
import {Route, Routes} from "react-router-dom";
import WebLayout from "../containers/Web/WebLayout";
import Journals from "../containers/Web/Journals";
import JournalDetailHome from "../containers/Web/JournalDetail/Home";
import JournalHeader from "../containers/Web/JournalDetail/JournalHeader";
import AboutAPC from "../containers/Web/pages/Karcha1/Authors/AboutAPC";
import WaiverPolicy from "../containers/Web/pages/Karcha1/Authors/WaiverPolicy";
import JoinUs from "../containers/Web/pages/JoinUs";
import PublishingPartnership from "../containers/Web/pages/PublishingPartnership";
import About from "../containers/Web/pages/About";
import Blog from "../containers/Web/pages/Blog";
import Contact from "../containers/Web/pages/Contact";
import AuthRoute from "./auth";
import SuperAdmin from "./superAdmin";
import Admin from "./admin";
import Page from "../containers/Web/JournalDetail/Page";
import JournalEditorBoard from "../containers/Web/JournalDetail/EditorBoard";
import JournalReviewerBoard from "../containers/Web/JournalDetail/ReviewerBoard";
import OtherPages from "../containers/Web/pages/OtherPages";
import Author from "./author";
import JournalArticle from "../containers/Web/JournalDetail/Article";
import ArticleDetail from "../containers/Web/JournalDetail/Article/ArticleDetail";
import ArticleDetailFile from "../containers/Web/JournalDetail/Article/ArticleDetailFile";
import VolumeIssue from "../containers/Web/JournalDetail/Article/VolumeIssue";

export default function MainRouter() {
    return (
        <Routes>
            <Route path="/" key="main" element={<WebLayout/>}>
                <Route path="/" key="home" element={<Home/>}/>
                <Route path="/journals" key="Journals" element={<Journals/>}/>
                <Route path="join-us" key="JoinUs" element={<JoinUs/>}/>
                <Route path="about-us" key="About" element={<About/>}/>
                <Route path="contact" key="Contact" element={<Contact/>}/>
                <Route path="publishing-partnerships" key="partnerships" element={<PublishingPartnership/>}/>
                <Route path="/:pageSlug" key="OtherPages" element={<OtherPages/>}/>


                <Route path="what-are-article-processing-charges" key="AboutAPC" element={<AboutAPC/>}/>
                <Route path="waiver-policy" key="WaiverPolicy" element={<WaiverPolicy/>}/>

                <Route path="blog" key="Blog" element={<Blog/>}/>
                <Route path="journal/:journalSlug" key="JournalHeader" element={<JournalHeader/>}>
                    <Route path="" key="JournalDetailHome" element={<JournalDetailHome/>}/>
                    <Route path=":pageSlug" key="Page" element={<Page/>}/>
                    <Route path="editorial-board" key="JournalEditorBoard" element={<JournalEditorBoard/>}/>
                    <Route path="reviewer-board" key="JournalReviewerBoard" element={<JournalReviewerBoard/>}/>
                    <Route path="articles/:articleMode" key="JournalArticle" element={<JournalArticle/>}/>
                    <Route path="article/:articleId" key="ArticleDetail" element={<ArticleDetail/>}/>
                    <Route path="article/file/:fileId" key="ArticleDetailFile" element={<ArticleDetailFile/>}/>
                    <Route path="archive/:volume/:issue" key="ArticleDetailFile" element={<VolumeIssue/>}/>
                </Route>
                {AuthRoute}

            </Route>
            {SuperAdmin}
            {Admin}
            {Author}
        </Routes>
    )
}