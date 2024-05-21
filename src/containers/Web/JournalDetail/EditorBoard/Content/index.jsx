import React from "react";
import {Col, Container, Image, ListGroup, Row} from "react-bootstrap";
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
                    <ListGroup className="simple-list sort_link_fixed">
                        <ListGroup.Item className="fw-bold">Quick links</ListGroup.Item>
                        <ListGroup.Item as="a" href="#editorial">Editorial Board</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col sm={8} className="pb-5 ">
                    <h1 className="mb-4">Editorial Board</h1>

                    <article id="#editorial" className="mb-4">
                        {isJournalEditorialBoardFetching ?
                            <div className="text-center my-5">
                                <Loader/>
                            </div>

                            : journalEditorialBoards ?
                                <div>

                                    {Object.keys(journalEditorialBoards).map((categoryName) => (< >
                                            <>
                                                {categoryName !== 'None' && <h5>{categoryName}</h5>}
                                            </>
                                            {journalEditorialBoards[categoryName].map((editorial) => (
                                                <div className="d-flex mb-4">
                                                    <div>
                                                        <Image roundedCircle src={editorial?.photo}
                                                               style={{height: '70px', width: '70px'}}/>
                                                    </div>
                                                    <div className="ps-3">
                                                        <b>{editorial?.first_name + " " + editorial?.last_name}</b>
                                                        <br/>
                                                        {editorial?.affiliation.split(/\r?\n/).map((line, index) => (
                                                            <React.Fragment key={index}>
                                                                {line}
                                                                <br />
                                                            </React.Fragment>
                                                        ))}
                                                        <b>{editorial?.country}</b>
                                                    </div>
                                                </div>
                                            ))}
                                        < />
                                    ))
                                    }
                                </div>
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