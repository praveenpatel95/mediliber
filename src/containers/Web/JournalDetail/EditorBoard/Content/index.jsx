import React from "react";
import {Col, Container, ListGroup, Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import Loader from "../../../../../components/Loader";

function PageContent() {
    const {
        isJournalEditorialBoardFetching,
        isJournalEditorialBoardFetchingError,
        journalEditorialBoards,
        journalDetail
    } = useSelector(state => state?.CommonJournalReducer);

    return (
        <Container>
            <Row>
                <Col sm={4}>
                    <ListGroup className="simple-list sticky-top" style={{'top': '120px'}}>
                        <ListGroup.Item className="fw-bold">Quick links</ListGroup.Item>
                        <ListGroup.Item as="a" href="#editorial">Editorial Board</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col sm={8} className="pb-5">
                    <h1 className="mb-4">Editorial Board</h1>

                    <article id="#editorial" className="mb-4">
                        {isJournalEditorialBoardFetching ?
                            <div className="text-center my-5">
                                <Loader/>
                            </div>

                            : journalEditorialBoards?.length > 0 ?
                                <ul>
                                    {journalEditorialBoards?.map((editorial, index) => (
                                        <li>
                                            <b>{editorial?.first_name + " " + editorial?.last_name}</b>, {editorial?.affiliation}
                                        </li>
                                    ))
                                    }
                                </ul>
                                :
                                <h4>No data found</h4>
                        }

                        {isJournalEditorialBoardFetchingError &&
                            <h4 class="text-danger">{isJournalEditorialBoardFetchingError}</h4>
                        }
                    </article>

                </Col>
            </Row>
        </Container>
    )
}

export default PageContent;