import React from "react";
import Banner from "./Banner";
import {Helmet} from "react-helmet";
import {HelmetProvider} from "react-helmet-async";
import LatestJournal from "./LatestJournal";
import JoinSection from "../../../components/JoinSection";
import AboutShort from "./AboutShort";
import LatestArticle from "./LatestArticle";
import IndexingSlider from "../../../components/IndexingSlider";
import RecentEditorsSlider from "../../../components/RecentEditorsSlider";

function Home() {
    const isTrye = true;

    return (
        <HelmetProvider>
            <Helmet>
                <title>Mediliber - Publication group</title>
            </Helmet>
            <main>
                <Banner/>
                <LatestJournal />
                <IndexingSlider />
                <LatestArticle />
                <JoinSection />
                <AboutShort />
                <RecentEditorsSlider />
            </main>
        </HelmetProvider>
    )
}

export default Home