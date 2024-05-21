import {Link, useParams} from "react-router-dom";
import {Helmet} from "react-helmet";
import React, {useEffect} from "react";
import {Breadcrumb, Col, Container, Row} from "react-bootstrap";
import {connect, useSelector} from "react-redux";
import {HelmetProvider} from "react-helmet-async";
import {getJournalVolumeArticles} from "../../../../../stores/Common/Journal/actions";
import {compose} from "redux";
import CommonJournalReducer from "../../../../../stores/Common/Journal/reducer";
import Loader from "../../../../../components/Loader";
import ArticleBox from "../../../../../components/ArticleBox";
import Volume from "../Volume";

function VolumeIssue({getJournalVolumeArticles}) {
    let {volume, issue, journalSlug} = useParams();
    const {
        journalDetail
    } = useSelector(state => state?.CommonJournalReducer);

    useEffect(() => {
        if (journalDetail?.id && volume && issue) {

            getJournalVolumeArticles({
                journalId: journalDetail.id,
                volume: volume.split("-")[1],
                issue: issue.split("-")[1],
            })
        }
    }, [volume, issue, journalDetail?.id]);

    const {
        isJournalVolumeArticlesFetching,
        isJournalVolumeArticlesFetchingError,
        journalVolumeArticles
    } = useSelector(state => state?.CommonJournalReducer)


    return (
        <HelmetProvider>
            <Helmet>
                <title>{`Archive - ${journalDetail?.name}`}</title>
            </Helmet>
            <main className="py-3 mb-5">
                <Container fluid>
                    <Row>
                        <Breadcrumb>
                            <Breadcrumb.Item linkAs={Link}
                                             linkProps={{to: `/journal/${journalSlug}`}}>{journalDetail?.name}</Breadcrumb.Item>
                            <Breadcrumb.Item active>Journal Archive</Breadcrumb.Item>
                            <Breadcrumb.Item active className="text-capitalize">{volume}, {issue}</Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>
                </Container>
                <section>
                    <Container fluid>
                        <Row>
                            <Col sm={9}>
                                {isJournalVolumeArticlesFetching ?
                                    <div className="text-center my-5">
                                        <Loader/>
                                    </div>
                                    : <>
                                        {journalVolumeArticles?.length > 0 ?
                                            journalVolumeArticles?.map((articlePublished, index) => (
                                                <ArticleBox
                                                    articlePublished={articlePublished}
                                                    key={index}
                                                    journalSlug={journalSlug}
                                                    journalDetail={journalDetail}
                                                />
                                            ))
                                            :
                                            <h4 className="">No data found.</h4>
                                        }
                                    </>
                                }
                                <>
                                    {isJournalVolumeArticlesFetchingError &&
                                        <h4 class="text-danger">{isJournalVolumeArticlesFetchingError}</h4>
                                    }
                                </>
                            </Col>
                            <Col sm={3}>
                                {journalDetail?.id &&
                                    <Volume
                                        journal={journalDetail}
                                        journalSlug={journalSlug}
                                    />
                                }
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
        </HelmetProvider>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        getJournalVolumeArticles: (payload) => dispatch(getJournalVolumeArticles(payload)),
    }
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(VolumeIssue);
