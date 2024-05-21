import {Helmet, HelmetProvider} from "react-helmet-async";
import Container from "react-bootstrap/Container";
import {Button, Card, Col, Form, Row, Spinner} from "react-bootstrap";

import {Link} from "react-router-dom";

function Verify() {



    return (
        <HelmetProvider>
            <Helmet>
                <title>Verify account</title>
            </Helmet>
            <section className="py-5">
                <Container>
                    <Row>
                        <Col sm={5} className="m-auto">
                            <Card className="px-3 py-2">
                                <Card.Body>
                                    <h1 className="text-center">Verify account</h1>
                                    <p className="text-center">We sent you an email on your registered email address, please check and verify your account.</p>
                                    <h5 className="text-center">Thank you!</h5>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </HelmetProvider>
    )
}

export default Verify;

