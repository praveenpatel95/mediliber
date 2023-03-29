import React, {useEffect} from "react";
import {HelmetProvider} from "react-helmet-async";
import {Helmet} from "react-helmet";
import HeadBanner from "./HeadBanner";
import {Col, Container, Row} from "react-bootstrap";
import {faEnvelopeOpen, faHome} from "@fortawesome/fontawesome-free-solid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {getMainPageDetail} from "../../../../stores/Common/Pages/actions";
import {connect, useSelector} from "react-redux";
import {compose} from "redux";
import {getWebSetting} from "../../../../stores/Common/WebSetting/actions";

function Contact({getPageDetail, getWebSettingDetail}) {
    const pageSlug = 'contact-us';
    useEffect(() => {
        if (pageSlug) {
            getPageDetail(pageSlug);
        }
    }, [pageSlug]);

    useEffect(() => {
        getWebSettingDetail();
    }, []);

    const {
        isMainPageDetailFetching,
        isMainPageDetailFetchingError,
        mainPageData
    } = useSelector(state => state?.WebPageReducer);

    const {
        webSettingDetail,
    } = useSelector(state => state?.WebSettingReducer);

    return (
        <HelmetProvider>
            <Helmet>
                <title>{mainPageData?.title}</title>
            </Helmet>
            <main>
                <HeadBanner pageData={mainPageData}/>
                <section className="py-5">
                    <Container>
                        <Row>
                            <Col sm={5}>
                                <h2 className="text-secondaryDark">Our Office</h2>
                                <Row className="py-3">
                                    <Col sm={3}><FontAwesomeIcon icon={faHome}
                                                                 className="fa-4x text-secondaryDark"/></Col>
                                    <Col sm={9}>
                                        <h5>Mediliber publication group</h5>
                                        <p>{webSettingDetail?.address}
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={2}>
                                <div className="divider-dashed-vertical"></div>
                            </Col>
                            <Col sm={5}>
                                <h2 className="text-secondaryDark">Drop a email</h2>
                                <Row className="py-3">
                                    <Col sm={3}><FontAwesomeIcon icon={faEnvelopeOpen}
                                                                 className="fa-4x text-secondaryDark"/></Col>
                                    <Col sm={9}>
                                        <p><strong>For Help</strong><br/>
                                            <a href={`mailto:${webSettingDetail?.help_email}`}
                                               className="text-secondaryDark">{webSettingDetail?.help_email}</a>
                                        </p>
                                        <p><strong>For query</strong><br/>
                                            <a href={`mailto:${webSettingDetail?.query_email}`}
                                               className="text-secondaryDark">{webSettingDetail?.query_email}</a>
                                        </p>
                                        <p><strong>Special Issues</strong><br/>
                                            <a href={`mailto:${webSettingDetail?.special_issue_email}`}
                                               className="text-secondaryDark">{webSettingDetail?.special_issue_email}</a>
                                        </p>

                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
        </HelmetProvider>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        getPageDetail: (slug) => dispatch(getMainPageDetail(slug)),
        getWebSettingDetail: (data) => dispatch(getWebSetting(data)),
    }
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(Contact);
