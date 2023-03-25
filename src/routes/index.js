import Home from "../containers/Web/Home";
import {Route, Routes} from "react-router-dom";
import WebLayout from "../containers/Web/WebLayout";
import Journals from "../containers/Web/Journals";
import JournalDetailHome from "../containers/Web/JournalDetail/Home";
import JournalHeader from "../containers/Web/JournalDetail/JournalHeader";
import PublicationEthics from "../containers/Web/pages/Authors/PublicationEthics";
import AboutAPC from "../containers/Web/pages/Authors/AboutAPC";
import WaiverPolicy from "../containers/Web/pages/Authors/WaiverPolicy";
import JoinUs from "../containers/Web/pages/JoinUs";
import Authors from "../containers/Web/pages/Authors";
import PublishingPartnership from "../containers/Web/pages/PublishingPartnership";
import About from "../containers/Web/pages/About";
import Blog from "../containers/Web/pages/Blog";
import Contact from "../containers/Web/pages/Contact";
import Editors from "../containers/Web/pages/Editors";
import Reviewers from "../containers/Web/pages/Reviewers";
import PrivacyPolicy from "../containers/Web/pages/PrivacyPolicy";
import TermsService from "../containers/Web/pages/TermsService";
import ResponsibleDisclosurePolicy from "../containers/Web/pages/ResponsibleDisclosurePolicy";
import AuthRoute from "./auth";
import SuperAdmin from "./superAdmin";
import Admin from "./admin";
import Page from "../containers/Web/JournalDetail/Page";
import JournalEditorBoard from "../containers/Web/JournalDetail/EditorBoard";
import JournalReviewerBoard from "../containers/Web/JournalDetail/ReviewerBoard";

export default function MainRouter() {
    return (
        <Routes>
            <Route path="/" element={<WebLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/journals" element={<Journals/>}/>
                <Route path="publication-ethics" element={<PublicationEthics/>}/>
                <Route path="what-are-article-processing-charges" element={<AboutAPC/>}/>
                <Route path="waiver-policy" element={<WaiverPolicy/>}/>
                <Route path="join-us" element={<JoinUs/>}/>
                <Route path="authors" element={<Authors/>}/>
                <Route path="publishing-partnerships" element={<PublishingPartnership/>}/>
                <Route path="about-us" element={<About/>}/>
                <Route path="blog" element={<Blog/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="editors" element={<Editors/>}/>
                <Route path="reviewers" element={<Reviewers/>}/>
                <Route path="privacy-policy" element={<PrivacyPolicy/>}/>
                <Route path="terms" element={<TermsService/>}/>
                <Route path="responsible-disclosure-policy" element={<ResponsibleDisclosurePolicy/>}/>

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