import React from "react";
import { Col, Container, Row} from "react-bootstrap";
import ArticleCard from "../../../../components/ArticleCard";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/fontawesome-free-solid";
import {Link} from "react-router-dom";

function LatestArticle(){
    return (
        <section className="bg_green_light">
            <Container fluid className="py-5">
                <h2 className="mb-3">Recently Published Articles</h2>
                <Row xs={1} md={4} className="g-4">
                    {[5, 2, 3, 4, 5, 2, 3, 4].map((article) => (
                        <Col>
                            <ArticleCard article={article}/>
                        </Col>
                    ))
                    }
                </Row>
                <Row className="mt-4">
                    <Col className="text-center">
                    <Link to="/journals" className="btn btn-outline-dark btn-lg" >Read all articles <FontAwesomeIcon
                            icon={faArrowRight}/></Link>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default LatestArticle;