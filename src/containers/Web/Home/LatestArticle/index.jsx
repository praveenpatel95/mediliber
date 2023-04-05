import React, {useEffect} from "react";
import { Col, Container, Row} from "react-bootstrap";
import ArticleCard from "../../../../components/ArticleCard";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/fontawesome-free-solid";
import {Link} from "react-router-dom";
import {tempArticleDelete, tempArticleList} from "../../../../stores/SuperAdmin/TempArticle/actions";
import {connect, useSelector} from "react-redux";
import {compose} from "redux";

function LatestArticle({getTempArticleList}){
    useEffect(() => {
        getTempArticleList();
    }, []);

    const {
        isTempArticleListFetching,
        isTempArticleListFetchingError,
        tempArticles,

    } = useSelector(state => state?.TempArticleReducer);

    return (
        <section className="bg_green_light">
            <Container fluid className="py-5">
                <h2 className="mb-3">Recently Published Articles</h2>
                <Row xs={1} md={4} className="g-4">
                    {tempArticles?.map((article) => (
                        <Col>
                            <ArticleCard article={article}/>
                        </Col>
                    ))
                    }
                </Row>
                {/*<Row className="mt-4">*/}
                {/*    <Col className="text-center">*/}
                {/*    <Link to="/journals" className="btn btn-outline-dark btn-lg" >Read all articles <FontAwesomeIcon*/}
                {/*            icon={faArrowRight}/></Link>*/}
                {/*    </Col>*/}
                {/*</Row>*/}
            </Container>
        </section>
    )
}
function mapDispatchToProps(dispatch) {
    return {
        getTempArticleList: (data) => dispatch(tempArticleList(data)),
    }
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(LatestArticle);
