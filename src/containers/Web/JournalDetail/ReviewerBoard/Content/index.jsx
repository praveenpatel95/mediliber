import React from "react";
import {Col, Container, ListGroup, Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import Loader from "../../../../../components/Loader";

function PageContent() {
    const {
        isJournalReviewerBoardFetching,
        isJournalReviewerBoardFetchingError,
        journalEditorialBoards,
        journalReviewerBoards
    } = useSelector(state => state?.CommonJournalReducer);

    return (
        <Container>
            <Row>
                <Col sm={4}>
                    <ListGroup className="simple-list sort_link_fixed">
                        <ListGroup.Item className="fw-bold">Quick links</ListGroup.Item>
                        <ListGroup.Item as="a" href="#editorial">Editorial Board</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col sm={8} className="pb-5">
                    <h1 className="mb-4">Reviewer Board</h1>

                    <article id="#editorial" className="mb-4">
                        {isJournalReviewerBoardFetching ?
                            <div className="text-center my-5">
                                <Loader/>
                            </div>

                            : journalReviewerBoards?.length > 0 ?
                                <ul>
                                    {journalReviewerBoards?.map((reviewer, index) => (
                                        <li>
                                            <b>{reviewer?.first_name + " " + reviewer?.last_name}</b>, {reviewer?.affiliation}, <b>{reviewer?.country}</b>
                                        </li>
                                    ))
                                    }
                                </ul>
                                :
                                <h4>No data found</h4>
                        }

                        {isJournalReviewerBoardFetchingError &&
                            <h4 class="text-danger">{isJournalReviewerBoardFetchingError}</h4>
                        }
                    </article>

                </Col>
            </Row>
        </Container>
    )
}

export default PageContent;