import React, {useEffect} from "react";
import {Helmet} from "react-helmet";
import {Breadcrumb, Col, Container, ListGroup, Row} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import {HelmetProvider} from "react-helmet-async";
import {getOtherPageDetail} from "../../../../stores/Common/Pages/actions";
import {connect, useSelector} from "react-redux";
import {compose} from "redux";
import Loader1 from "../../../../components/Loader1";

function OtherPages({getPageDetail}) {
    let {pageSlug} = useParams();
    useEffect(() => {
        if (pageSlug) {
            getPageDetail(pageSlug);
        }
    }, [pageSlug]);
    const {
        isOtherPageDetailFetching,
        isOtherPageDetailFetchingError,
        otherPageData
    } = useSelector(state => state?.WebPageReducer);
    return (
        <HelmetProvider>
            <Helmet>
                <title>{otherPageData?.page_name}</title>
            </Helmet>
            {isOtherPageDetailFetching ?
                <div className="text-center my-5">
                    <Loader1/>
                </div>
                :
                <main className="py-3 mb-5">
                    <Container fluid>
                        <Row>
                            <Breadcrumb>
                                <Breadcrumb.Item linkAs={Link} linkProps={{to: `/`}}>Home</Breadcrumb.Item>
                                <Breadcrumb.Item active>{otherPageData?.page_name}</Breadcrumb.Item>
                            </Breadcrumb>
                        </Row>
                    </Container>
                    <section>
                        <Container fluid>
                            <Row>
                                <Col sm={3}>
                                    <ListGroup className="simple-list sticky-top" style={{'top': '120px'}}>
                                        <ListGroup.Item className="fw-bold">Quick links</ListGroup.Item>
                                        {otherPageData?.content?.map((content) => (
                                            <ListGroup.Item as="a" href={`#section-${content?.id}`}>{content?.title}
                                            </ListGroup.Item>
                                        ))}

                                    </ListGroup>
                                </Col>
                                <Col sm={9} className="pe-5 text-justify">
                                    {otherPageData?.content?.map((content) => (

                                    <article id={`section-${content?.id}`} className="mb-5">
                                        <h2>{content?.title}</h2>
                                        <div dangerouslySetInnerHTML={{ __html: content?.content }}></div>

                                    </article>
                                    ))}
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
        getPageDetail: (slug) => dispatch(getOtherPageDetail(slug)),
    }
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(OtherPages);
