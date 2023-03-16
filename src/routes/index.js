import Home from "../containers/Web/Home";
import {Route, Routes} from "react-router-dom";
import WebLayout from "../containers/Web/WebLayout";
import Journals from "../containers/Web/Journals";
import AboutJournal from "../containers/Web/JournalDetail/AboutJournal";
import JournalDetailHome from "../containers/Web/JournalDetail/Home";
import JournalHeader from "../containers/Web/JournalDetail/JournalHeader";
import EditorBoard from "../containers/Web/JournalDetail/EditorBoard";
import PeerReview from "../containers/Web/JournalDetail/PeerReview";
import PublicationEthics from "../containers/Web/Authors/PublicationEthics";
import Abstracting from "../containers/Web/JournalDetail/Abstracting";
import APC from "../containers/Web/JournalDetail/APC";
import AboutAPC from "../containers/Web/Authors/AboutAPC";
import WaiverPolicy from "../containers/Web/Authors/WaiverPolicy";
import PublishResearch from "../containers/Web/Authors/PublishResearch";
import Authors from "../containers/Web/Authors";
import PublishingPartnership from "../containers/Web/PublishingPartnership";
import About from "../containers/Web/About";
import AuthorGuideline from "../containers/Web/JournalDetail/AuthorGuideline";
import Blog from "../containers/Web/Blog";
import Contact from "../containers/Web/Contact";
import Editors from "../containers/Web/Editors";
import Reviewers from "../containers/Web/Reviewers";
import PrivacyPolicy from "../containers/Web/PrivacyPolicy";
import TermsService from "../containers/Web/TermsService";
import ResponsibleDisclosurePolicy from "../containers/Web/ResponsibleDisclosurePolicy";
import AuthRoute from "./auth";
import SuperAdmin from "./superAdmin";
import Admin from "./admin";

export default function MainRouter() {
    return (
        <Routes>
            <Route path="/" element={<WebLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/journals" element={<Journals/>}/>
                <Route path="publication-ethics" element={<PublicationEthics/>}/>
                <Route path="what-are-article-processing-charges" element={<AboutAPC/>}/>
                <Route path="waiver-policy" element={<WaiverPolicy/>}/>
                <Route path="publish-research" element={<PublishResearch/>}/>
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

                <Route path="journal/:slug" element={<JournalHeader/>}>
                    <Route path="" element={<JournalDetailHome/>}/>
                    <Route path="about" element={<AboutJournal/>}/>
                    <Route path="editors" element={<EditorBoard/>}/>
                    <Route path="peer-review-process" element={<PeerReview/>}/>
                    <Route path="abstracting-and-indexing" element={<Abstracting/>}/>
                    <Route path="article-processing-charges" element={<APC/>}/>
                    <Route path="author-guidelines" element={<AuthorGuideline/>}/>

                </Route>
                {AuthRoute}

            </Route>
            {SuperAdmin}
            {Admin}
        </Routes>
    )
}