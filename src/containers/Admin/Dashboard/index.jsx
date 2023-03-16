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
                <Container>
                    <Row>
                        <Col sm={4}>
                            <Card as={Link} to="/super-admin/journal-categories" bg="primary" >
                                <Card.Body>
                                    <h5 className="text-white">Journal Category List</h5>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={4}>
                            <Card as={Link} to="/super-admin/journals" bg="success" >
                                <Card.Body>
                                    <h5 className="text-white">Journals List</h5>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={4}>
                            <Card as={Link} to="/super-admin/journal/access/users" bg="danger" >
                                <Card.Body>
                                    <h5 className="text-white">Journals Access Users</h5>
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