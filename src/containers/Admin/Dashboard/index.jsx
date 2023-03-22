import {Helmet, HelmetProvider} from "react-helmet-async";
import Container from "react-bootstrap/Container";
import {Card, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

function Dashboard() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <section className="py-5">
                <Container>
                    <h4>Welcome to admin panel</h4>
                </Container>
                <Container className="text-center">
                    <Row>
                        <Col sm={4}>
                            <Card as={Link} to="/admin/journal-profile" bg="primary" >
                                <Card.Body>
                                    <h5 className="text-white">Update Journal Detail</h5>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={4}>
                            <Card as={Link} to="/admin/journal-pages" bg="success" >
                                <Card.Body>
                                    <h5 className="text-white">Journals Pages</h5>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={4}>
                            <Card as={Link} to="/admin/editorial-board" bg="danger" >
                                <Card.Body>
                                    <h5 className="text-white">Editorial Board</h5>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                    <Row className="mt-4">
                        <Col sm={4}>
                            <Card as={Link} to="/admin/reviewer-board" bg="dark" >
                                <Card.Body>
                                    <h5 className="text-white">Reviewer Board</h5>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </HelmetProvider>
    )
}

export default Dashboard;