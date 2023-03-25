import React from "react";
import {HelmetProvider} from "react-helmet-async";
import {Helmet} from "react-helmet";
import {Breadcrumb, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import SidebarSection from "../../Common/SidebarSection";
import GuideLineContent from "./Content";

function AuthorGuideline() {
    const slug = 'my-web';
    return (
        <HelmetProvider>
            <Helmet>
                <title>Author Guideline</title>
            </Helmet>
            <main className="py-3 mb-5">
                <Container fluid>
                    <Row>
                        <Breadcrumb>
                            <Breadcrumb.Item linkAs={Link} linkProps={{to: `/journal/${slug}`}}>Journal Name</Breadcrumb.Item>
                            <Breadcrumb.Item active>Author Guideline</Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>
                </Container>
                <section >
                    <Container fluid>
                        <Row>
                            <Col sm={9} >
                                <GuideLineContent/>
                            </Col>
                            <Col sm={3}>
                                <SidebarSection/>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
        </HelmetProvider>


    )
}

export default AuthorGuideline;