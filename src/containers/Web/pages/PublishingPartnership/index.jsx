import React, {useEffect} from "react";
import {HelmetProvider} from "react-helmet-async";
import {Helmet} from "react-helmet";
import HeadBanner from "../Contact/HeadBanner";
import {Container} from "react-bootstrap";
import {getMainPageDetail} from "../../../../stores/Common/Pages/actions";
import {connect, useSelector} from "react-redux";
import {compose} from "redux";

function PublishingPartnership({getPageDetail}) {
    const pageSlug = 'partnerships';
    useEffect(() => {
        if (pageSlug) {
            getPageDetail(pageSlug);
        }
    }, [pageSlug]);
    const {
        mainPageData
    } = useSelector(state => state?.WebPageReducer);

    return (
        <HelmetProvider>
            <Helmet>
                <title>{mainPageData?.page_title}</title>
            </Helmet>
            <main>
                <HeadBanner pageData={mainPageData}/>
                <section className="py-5">
                    <Container>
                        <div dangerouslySetInnerHTML={{__html: mainPageData?.page_content}}></div>

                        {/*<Row>*/}
                        {/*    <Col sm={5}>*/}
                        {/*        <h2>Open publishing infrastructure</h2>*/}
                        {/*        <div>*/}
                        {/*            <h5 className="pt-3"><FontAwesomeIcon icon={faCaretRight}/> System with services*/}
                        {/*            </h5>*/}
                        {/*            <p>The Phenom system and publisher services are designed to run open access*/}
                        {/*                publishing workflows – from submission and peer review, through to*/}
                        {/*                production and publication.</p>*/}

                        {/*            <h5 className="pt-4"><FontAwesomeIcon icon={faCaretRight}/> Working for you</h5>*/}
                        {/*            <p>All components are hosted on behalf of the journal owner, providing seamless*/}
                        {/*                updating of new features.</p>*/}

                        {/*            <h5 className="pt-4"><FontAwesomeIcon icon={faCaretRight}/> Choice of service*/}
                        {/*                options</h5>*/}
                        {/*            <p>From submission to publication, or from post-acceptance to publication,*/}
                        {/*                phenom accommodates your needs.</p>*/}
                        {/*        </div>*/}
                        {/*    </Col>*/}
                        {/*    <Col sm={2}>*/}
                        {/*        <div className="divider-dashed-vertical"></div>*/}
                        {/*    </Col>*/}
                        {/*    <Col sm={5}>*/}
                        {/*        <h2>Why partner with us?</h2>*/}
                        {/*        <h5 className="pt-4"><FontAwesomeIcon icon={faCaretRight}/> Extensive expertise</h5>*/}
                        {/*        <p>Our scholarly publishing experience enables us to understand, anticipate, and support*/}
                        {/*            the needs of publishing partners.</p>*/}

                        {/*        <h5 className="pt-4"><FontAwesomeIcon icon={faCaretRight}/> Retain ownership</h5>*/}
                        {/*        <p>Your journal is fully supported by systems and services while you retain editorial*/}
                        {/*            control and ownership.</p>*/}

                        {/*        <h5 className="pt-4"><FontAwesomeIcon icon={faCaretRight}/> Cost effective</h5>*/}
                        {/*        <p>Phenom is a managed open source publishing system that reduces the internal resources*/}
                        {/*            required to run a world-class publishing program.</p>*/}

                        {/*    </Col>*/}
                        {/*</Row>*/}
                    </Container>
                </section>
                <section className="bg-secondary py-3 text-center">
                    <a href="mailto:info@mediliber.com" className="btn btn-dark py-3 px-5 text-white">Get in touch</a>
                </section>

            </main>
        </HelmetProvider>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        getPageDetail: (slug) => dispatch(getMainPageDetail(slug)),
    }
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(PublishingPartnership);
