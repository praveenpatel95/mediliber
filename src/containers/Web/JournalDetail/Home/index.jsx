import React from "react";
import {HelmetProvider} from "react-helmet-async";
import {Helmet} from "react-helmet";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReadme,} from "@fortawesome/free-brands-svg-icons";
import {faArrowRight, faSnowflake, faUsers} from "@fortawesome/fontawesome-free-solid";
import Banner from "./Banner";
import AsideList from "../Common/AsideList";
import LatestArticle from "../../Home/LatestArticle";

function JournalDetailHome() {
    const journalSlug = 'journal-of-science';
    return (
        <HelmetProvider>
            <Helmet>
                <title>My wesite title</title>
            </Helmet>
            <main>
                <Banner/>
                <section className="py-5">
                    <Container>
                        <Row>
                            <Col sm={8}>
                                <article className="mb-5">
                                    <h4><FontAwesomeIcon icon={faReadme}/> Journal profile</h4>
                                    <div className="divider-dashed mb-2"></div>

                                    <p>Advances in Cell and Gene Therapy publishes original, high-quality, peer-reviewed
                                        articles covering basic and clinical research relating to advances in cell,
                                        gene, and immune therapies and their use in the treatment of a range of
                                        diseases, including cancer, genetic and immune diseases, and others.</p>
                                    <Link to={`/journal/${journalSlug}/about`} className="text-secondary">More about this journal <FontAwesomeIcon
                                        icon={faArrowRight}/></Link>
                                </article>

                                <article className="mb-5">
                                    <h4><FontAwesomeIcon icon={faUsers}/> Editor spotlight</h4>
                                    <div className="divider-dashed mb-2"></div>

                                    <p>Advances in Cell and Gene Therapy publishes original, high-quality, peer-reviewed
                                        articles covering basic and clinical research relating to advances in cell,
                                        gene, and immune therapies and their use in the treatment of a range of
                                        diseases, including cancer, genetic and immune diseases, and others.</p>
                                    <Link to={`/journal/${journalSlug}/editors`} className="text-secondary">Editorial board panel <FontAwesomeIcon
                                        icon={faArrowRight}/></Link>
                                </article>
                                <article className="mb-5">
                                    <h4><FontAwesomeIcon icon={faSnowflake}/> Special Issues</h4>
                                    <div className="divider-dashed mb-2"></div>
                                    <p>Advances in Cell and Gene Therapy publishes original, high-quality, peer-reviewed
                                        articles covering basic and clinical research relating to advances in cell,
                                        gene, and immune therapies and their use in the treatment of a range of
                                        diseases, including cancer, genetic and immune diseases, and others.</p>
                                    <Link to="" className="text-secondary">Proposing a Special Issue <FontAwesomeIcon
                                        icon={faArrowRight}/></Link>
                                </article>

                            </Col>
                            <Col sm={4}>
                                <AsideList/>
                            </Col>
                        </Row>
                    </Container>

                </section>
                <LatestArticle  />
            </main>
        </HelmetProvider>
    )
}

export default JournalDetailHome;