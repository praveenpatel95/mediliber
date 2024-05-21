import React from "react";

function Authors({authors, article_affiliations}) {
    const coAuthors = authors?.filter((author => author.is_main === 1));
    return (
        <>
            {authors?.map((articleAuthor, keIndex) => (
                <span key={articleAuthor?.id} className='fw-bold'>
                     {(authors.length > 1 && authors.length === keIndex + 1) && " and "}
                    {articleAuthor?.author?.first_name + " " + articleAuthor?.author?.last_name}

                    {articleAuthor?.author?.orcid && <small><a
                        href={articleAuthor?.author?.orcid} target="_blank"><img
                        src={process.env.PUBLIC_URL + '/assets/images/orcid.logo.icon.svg'} className="orcid_logo"/></a></small>}
                    {article_affiliations?.length > 1 && <sup>{articleAuthor?.affiliation_no}{articleAuthor?.is_main === 1 && <span>*</span>}</sup>}
                    {authors.length != keIndex + 1 && ", "}
                            </span>
            ))}
            <div className="mt-3">
                {article_affiliations?.map((article_affiliation, index) => (
                    <p>
                        {article_affiliations?.length > 1 &&<sup>{++index}</sup>} {article_affiliation?.affiliation + ", " + article_affiliation?.country}
                    </p>
                ))}
            </div>
            <p><b>Corresponding Author:</b>
                {coAuthors?.map((articleAuthor, keIndex) => {
                    let firstAffiliation = articleAuthor?.affiliation_no.split(/\s*,\s*/)[0];
                    return (
                        <span>&nbsp;{articleAuthor.author.first_name + " " + articleAuthor.author.last_name},&nbsp;
                            <span>{article_affiliations && article_affiliations[firstAffiliation-1]?.affiliation + ', ' + article_affiliations[firstAffiliation-1]?.country}. </span>
                            {coAuthors?.length != keIndex + 1 && ", "}</span>
                    )
                })}</p>
        </>
    )
}

export default Authors;
