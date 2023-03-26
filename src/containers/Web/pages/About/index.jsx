import React, {useEffect} from "react";
import {HelmetProvider} from "react-helmet-async";
import {Helmet} from "react-helmet";
import HeadBanner from "./HeadBanner";
import {Col, Container, Image, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCaretRight,
} from "@fortawesome/fontawesome-free-solid";
import JoinSection from "../../../../components/JoinSection";
import {getMainPageDetail} from "../../../../stores/Common/Pages/actions";
import {connect, useSelector} from "react-redux";
import {compose} from "redux";
import Loader1 from "../../../../components/Loader1";

function AboutUs({getPageDetail}) {
    const pageSlug = 'about-us';
    useEffect(() => {
        if (pageSlug) {
            getPageDetail(pageSlug);
        }
    }, [pageSlug]);
    const {
        isMainPageDetailFetching,
        isMainPageDetailFetchingError,
        mainPageData
    } = useSelector(state => state?.WebPageReducer);

    return (
        <HelmetProvider>
            <Helmet>
                <title>{mainPageData?.page_title}</title>
            </Helmet>
            {isMainPageDetailFetching ?
                <div className="text-center my-5">
                    <Loader1/>
                </div>
                :
                <main>
                    <HeadBanner pageData={mainPageData}/>
                    <section className="py-5 ">
                        <Container>
                            <Row>
                                <Col sm={6}>
                                    <div dangerouslySetInnerHTML={{__html: mainPageData?.page_content}}></div>
                                </Col>
                                <Col sm={6}>
                                    <Image src={`${process.env.PUBLIC_URL}/assets/images/mission.png`}/>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    <JoinSection/>
                    <section className="bg-secondaryDark py-3 text-center">
                        <a href="mailto:info@mediliber.com" className="btn btn-dark py-3 px-5 text-white">Get in
                            touch</a>
                    </section>

                </main>
            }
        </HelmetProvider>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        getPageDetail: (slug) => dispatch(getMainPageDetail(slug)),
    }
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(AboutUs);
