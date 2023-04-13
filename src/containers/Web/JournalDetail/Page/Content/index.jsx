import React from "react";
import {Col, Container, ListGroup, Row} from "react-bootstrap";

function PageContent({journalPageDetail}) {
    return (
        <Container>
            <Row>
                <Col sm={4}>
                    <ListGroup className="simple-list sticky-top" style={{'top': '120px'}}>
                        <ListGroup.Item className="fw-bold">Quick links</ListGroup.Item>
                        {journalPageDetail?.page_content?.map((content, index) => (
                            <ListGroup.Item as="a" href={`#content-${content.id}`}>{content?.title}</ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
                <Col sm={8} className="pb-5 mb-10">
                    <h1 className="mb-4">{journalPageDetail?.page?.page_name}</h1>
                    {journalPageDetail?.page_content?.map((pageContent, index) => (
                        <article id={`content-${pageContent.id}`} className="mb-4">
                            <h2>{pageContent?.title}</h2>
                            <div dangerouslySetInnerHTML={{ __html: pageContent?.content }}></div>
                        </article>
                    ))}

                </Col>
            </Row>
        </Container>
    )
}

export default PageContent;