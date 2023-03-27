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

export default function MainRouter() {
    return (
        <Routes>
            <Route path="/" element={<WebLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/journals" element={<Journals/>}/>
                <Route path="join-us" element={<JoinUs/>}/>
                <Route path="about-us" element={<About/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="publishing-partnerships" element={<PublishingPartnership/>}/>
                <Route path="/:pageSlug" element={<OtherPages/>}/>


                <Route path="what-are-article-processing-charges" element={<AboutAPC/>}/>
                <Route path="waiver-policy" element={<WaiverPolicy/>}/>

                <Route path="blog" element={<Blog/>}/>
                <Route path="journal/:journalSlug" element={<JournalHeader/>}>
                    <Route path="" element={<JournalDetailHome/>}/>
                    <Route path=":pageSlug" element={<Page/>}/>
                    <Route path="editorial-board" element={<JournalEditorBoard/>}/>
                    <Route path="reviewer-board" element={<JournalReviewerBoard/>}/>
                </Route>
                {AuthRoute}

            </Route>
            {SuperAdmin}
            {Admin}
        </Routes>
    )
}