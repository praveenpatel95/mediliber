import {Card} from "react-bootstrap";
import moment from "moment/moment";
import React from "react";
import './style.scss'
import Authors from "../Authors";

function ArticleDetailContent({articlePublished}) {
    return (
        <Card id="article-detail-content">
            <Card.Body>
                <h6>{articlePublished?.article?.article_type} | {articlePublished?.article_mode}</h6>
                <p>{moment(articlePublished?.article?.article_published?.published_date).format('YYYY')} |
                    Volume {articlePublished?.volume} | Issue {articlePublished?.issue} | <a className='text-success'
                                                                                             href={articlePublished?.doi_url}
                                                                                             target='_blank'>{articlePublished?.doi_url}</a>
                </p>
                <h1 className="h4 mb-3">{articlePublished?.article?.title}</h1>
                {articlePublished?.article &&
                <Authors
                    authors={articlePublished?.article?.article_authors}
                    article_affiliations={articlePublished?.article?.article_affiliations}
                />
                }
                <table className="table table-bordered text-center">
                    <tr>
                        <td>
                            <b>Received Date</b>
                            <br/>
                            {moment(articlePublished?.article?.received_date).format('DD-MMM-YYYY')}
                        </td>
                        <td>
                            <b>Accepted Date</b>
                            <br/>
                            {moment(articlePublished?.article?.accepted_date).format('DD-MMM-YYYY')}
                        </td>
                        <td>
                            <b>Published Date</b>
                            <br/>
                            {moment(articlePublished?.published_date).format('DD-MMM-YYYY')}
                        </td>

                    </tr>
                </table>
                <article id="content-abstract" className="mb-4">
                    <h4>Abstract</h4>
                    <span className="text-justify" dangerouslySetInnerHTML={{__html: articlePublished?.article?.abstract}}></span>
                </article>
                <article id="content-keywords" className="mb-4">
                    <h4>Keywords</h4>
                    {articlePublished?.keyword}
                </article>
                {articlePublished?.article_published_content?.map((pageContent, index) => (
                    <article id={`content-${pageContent.id}`} className="mb-4">
                        <h4>{pageContent?.title}</h4>
                        <div className="text-justify" dangerouslySetInnerHTML={{ __html: pageContent?.content.replace(/href/g, "target='_blank' href") }}></div>
                    </article>
                ))}
                <article id="content-reference" className="mb-4">
                    <h4>Reference</h4>
                    <span dangerouslySetInnerHTML={{__html: articlePublished?.references}}></span>
                </article>
            </Card.Body>
        </Card>
    )
}

export default ArticleDetailContent;