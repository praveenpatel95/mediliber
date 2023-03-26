import React, {useEffect} from "react";
import {HelmetProvider} from "react-helmet-async";
import {Helmet} from "react-helmet";
import Banner from "./Banner";
import {Col, ListGroup, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileAlt, faSearch, faUser} from "@fortawesome/fontawesome-free-solid";
import {Link} from "react-router-dom";
import {getMainPageDetail} from "../../../../stores/Common/Pages/actions";
import {connect, useSelector} from "react-redux";
import {compose} from "redux";
import Loader1 from "../../../../components/Loader1";

function JoinUs({getPageDetail}) {
    const pageSlug = 'join-us';
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

                    <Banner pageData={mainPageData}/>
                    <section className="py-5">
                        <Container>
                            <Row>
                                <Col sm={8}>
                                    <div dangerouslySetInnerHTML={{__html: mainPageData?.page_content}}></div>
                                </Col>
                                <Col sm={4}>
                                    <ListGroup className="fs-6 list2">
                                        <ListGroup.Item as={Link} to="/authors"><FontAwesomeIcon icon={faUser}
                                                                                                 className="w-25"/> Becoming
                                            an Author</ListGroup.Item>
                                        <ListGroup.Item><FontAwesomeIcon icon={faFileAlt} className="w-25"/> Being an
                                            Editor</ListGroup.Item>
                                        <ListGroup.Item><FontAwesomeIcon icon={faSearch} className="w-25"/> For
                                            Reviewers</ListGroup.Item>
                                    </ListGroup>
                                </Col>
                            </Row>
                        </Container>
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
export default compose(withConnect)(JoinUs);

