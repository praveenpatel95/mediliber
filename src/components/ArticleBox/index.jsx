import {Table} from "react-bootstrap";
import './style.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar, faFile, faFilePdf} from "@fortawesome/fontawesome-free-solid";
import React from "react";
import {Link} from "react-router-dom";
import moment from "moment";

function ArticleBox({articlePublished, journalSlug, journalDetail}) {
    const authors = articlePublished?.article?.article_authors;
    return (
        <Table className="table table-bordered bg-white rounded" id="article-box">
            <tr>
                <td colSpan={3}>
                    <Link to={`/journal/${journalSlug}/article/${articlePublished?.id}`}>
                        <p className="my-0 mb-2 text-danger"><span>{journalDetail?.name}</span> |
                            Volume {articlePublished?.volume} | Issue {articlePublished?.issue} | {articlePublished.article?.article_type}
                            </p>
                        <h2 className="h5 mb-2">{articlePublished?.article?.title}</h2>
                        <p className="mb-0">
                            <b>DOI:</b> <a href={articlePublished?.doi_url}
                                           target="_blank">{articlePublished?.doi_url}</a>
                        </p>
                        <p>

                            {authors?.map((articleAuthor, index) => (

                                <span key={articleAuthor?.id} className='fw-bold'>
                                    {(authors.length > 1 && authors.length === index + 1) && " and "}
                       {articleAuthor?.author?.first_name + " " + articleAuthor?.author?.last_name}
                                   &nbsp;{articleAuthor?.author?.orcid && <small className="bg-success rounded-circle px-1 text-white"><a href={articleAuthor?.author?.orcid} target="_blank">ID</a></small>}
                                    <sup>{articleAuthor?.affiliation_no}</sup>
                                    {(index + 1  != authors.length) && ", "}
                            </span>
                            ))}
                        </p>
                    </Link>
                </td>
            </tr>
            <tr>
                <th className="py-2 text-center border-end">
                    <span><FontAwesomeIcon icon={faCalendar}
                                           className="text-success"/> {moment(articlePublished?.published_date).format('MMM DD, YYYY')}</span>
                </th>
                <td className="py-2 text-center border-end"><a href={articlePublished?.pdf}
                                                               target="_blank"><b><FontAwesomeIcon icon={faFilePdf}
                                                                                                   className="text-success"/> Download
                    PDF</b></a>
                </td>
                <td className="py-2 text-center"><Link to={`/journal/${journalSlug}/article/${articlePublished?.id}`}>
                    <b><FontAwesomeIcon icon={faFile}/> Abstract</b></Link>
                </td>
            </tr>
        </Table>
    )
}

export default ArticleBox;