import React from "react";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

function ArticleCard({article}) {

    return (
        <Card className="card_effect_1">
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/images/banner/bg_${article}.png`} style={{height:'150px'}}/>
            <Card.Body>
                <Link to="" className="small text-grey">https://doi.org/10.37191/Mapsci-2582-4937-5(1)-031</Link>
                <h5 as={Link} to="/">Dental treatments and trauma</h5>
                <Card.Title as={Link} to="/" className="fs-6 text-secondaryDark">Journal of sectince sicen</Card.Title>
            </Card.Body>
        </Card>

    );
}

export default ArticleCard;