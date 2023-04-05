import React from "react";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

function ArticleCard({article}) {

    return (
        <Card className="card_effect_1">
            <a href={article?.article_link} target="_blank">
                <Card.Img variant="top" src={article?.image} style={{height: '150px'}}/>
                <Card.Body>
                    <div style={{height: '50px'}}>
                        <Link to="" className="small text-grey">{article?.doi_link}</Link>
                    </div>
                    <h5 style={{height: '70px'}}>{article?.article_title}</h5>
                    <Card.Title className="fs-6 text-secondaryDark" style={{height: '40px'}}>{article?.journal_name}</Card.Title>
                </Card.Body>
            </a>
        </Card>

    );
}

export default ArticleCard;