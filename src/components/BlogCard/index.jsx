import React from "react";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

function BlogCard() {
    const blogDescription = "Recent research in Dentistry examines new treatments, procedures, and materials that could improve\n" +
        "                    patient outcomes. Other studies examine patient";
    return (
        <Card className="blog-card">
            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/assets/images/banner/bg_4.png"}/>
            <Card.Body>
                <Card.Title as={Link} to="/" className="fs-5">Dental treatments and trauma</Card.Title>
                <Card.Text>
                    {blogDescription.length > 120
                        ? `${blogDescription.substring(0, 120)}...`
                        :blogDescription
                    }
                </Card.Text>
                <footer className="blockquote-footer">
                    James
                </footer><cite title="Source Title">10 feb, 2023</cite>
            </Card.Body>
        </Card>

    );
}

export default BlogCard;