import {Accordion, Button, ListGroup} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBook,
    faCode,
    faCopyright,
    faDownload,
    faEnvelope,
    faFilePdf,
    faUsers
} from "@fortawesome/fontawesome-free-solid";
import React, {useEffect, useState} from "react";
import Authors from "./Authors";
import moment from "moment";
import {faFacebook, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";

function ArticleSidebarSection({articlePublished}) {
    const authors = articlePublished?.article?.article_authors;
    const coAuthors = authors?.filter((author => author.is_main === 1));

    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header> <FontAwesomeIcon icon={faUsers} className="w-25"/> Author Info</Accordion.Header>
                <Accordion.Body>
                    <Authors authors={authors}
                             article_affiliations={articlePublished?.article?.article_affiliations}/>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header><FontAwesomeIcon icon={faCopyright} className="w-25"/> Copyright</Accordion.Header>
                <Accordion.Body className="text-justify">
                    <p> Copyright© {moment(articlePublished?.article?.article_published?.published_date).format('YYYY')} by
                        {coAuthors?.map((articleAuthor, keIndex) => (
                        <span>&nbsp;{articleAuthor.author.first_name + " " + articleAuthor.author.last_name},&nbsp;
                            {coAuthors?.length != keIndex + 1 && ", "}</span>
                    ))}
                        et al. All rights reserved. This is an open access article distributed
                        under the terms of the Creative Commons Attribution License, which permits unrestricted use,
                        distribution, and reproduction in any medium, provided the original author and source are
                        credited.</p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header><FontAwesomeIcon icon={faBook} className="w-25"/> Citation</Accordion.Header>
                <Accordion.Body className="text-justify">
                    <p>{articlePublished?.citation}</p>
                </Accordion.Body>
            </Accordion.Item>

            <a href={articlePublished?.pdf} target='_blank'>
                <ListGroup className="fs-6 list2">
                    <ListGroup.Item className="bg-success text-white">
                        <FontAwesomeIcon icon={faFilePdf} className="w-25"/> Download PDF <FontAwesomeIcon
                        className="float-end" icon={faDownload}/></ListGroup.Item>
                </ListGroup>
            </a>
            <a href={articlePublished?.xml_path} target='_blank'>
                <ListGroup className="fs-6 list2">
                    <ListGroup.Item className="bg-default">
                        <FontAwesomeIcon icon={faCode} className="w-25"/> Download XML <FontAwesomeIcon
                        className="float-end" icon={faDownload}/></ListGroup.Item>
                </ListGroup>
            </a>
            <ListGroup className="fs-6 list2">
                    <ul className="list-style-1">
                        <li>
                            <a href={`https://www.facebook.com/sharer/sharer.php?u=${articlePublished.doi_url}`} target="_blank"><FontAwesomeIcon icon={faFacebook}/></a>
                        </li>
                        <li>
                            <a href={`https://twitter.com/share?url=${articlePublished.doi_url}&via=Medliber`} target="_blank"> <FontAwesomeIcon icon={faTwitter}/></a>
                        </li>
                        <li>
                            <a href={`https://www.linkedin.com/shareArticle/?url=${articlePublished.doi_url}`} target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
                        </li>
                        <li>
                            <a href={`mailto:?subject=${articlePublished.article.title}=${articlePublished.doi_url}`} target="_blank"><FontAwesomeIcon icon={faEnvelope}/></a>
                        </li>
                    </ul>

            </ListGroup>


        </Accordion>
    )
}

export default ArticleSidebarSection;