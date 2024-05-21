import {Helmet, HelmetProvider} from "react-helmet-async";

import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";

import AuthorDetail from "./AuthorDetail";
import ArticleDetail from "./ArticleDetail";
import {Breadcrumb, Button, Card, Container, Form, Spinner} from "react-bootstrap";
import {Link, useNavigate, useParams} from "react-router-dom";
import {connect, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import moment from "moment";
import useValidator from "../../../../utils/useValidator";
import * as Yup from "yup";
import {
    articlePublishUpdate,
    getJournalArticleDetail
} from "../../../../stores/Admin/Article/actions";
import {getArticleType} from "../../../../stores/Common/ArticleType/actions";
import {compose} from "redux";
import Loader from "../../../../components/Loader";
import './style.scss'
import {getCountryList} from "../../../../stores/Common/Country/actions";
import FullTextContent from "./FullTextContent";

function PublishArticleEdit({getArticleDetail, updateArticlePublishedData, fetchArticleTypes, getCountryList}) {
    let {articleId} = useParams();
    const navigate = useNavigate();

    const {
        isJournalArticleDetailFetching,
        isJournalArticleDetailFetchingError,
        article,
        isArticlePublishedUpdating,
        isArticleUpdated
    } = useSelector(state => state?.JournalArticleReducer);

    useEffect(() => {
        getCountryList()
    }, []);

    const {CountryList} = useSelector(state => state?.CountryReducer);


    useEffect(() => {
        getArticleDetail(articleId)
    }, [articleId]);

    const [affiliations, setAffiliations] = useState([]);

    useEffect(() => {
        setAffiliations(article?.article_affiliations)
    }, [article?.article_affiliations]);

    const [authors, setAuthors] = useState([]);
    useEffect(() => {
        if (article?.article_authors) {
            let authorData = [];
            article.article_authors.map((article_author) => {
                authorData.push({
                    id: article_author.id,
                    email: article_author?.author?.user?.email,
                    first_name: article_author?.author?.first_name,
                    last_name: article_author?.author?.last_name,
                    country: article_author?.author?.country,
                    affiliation_no: article_author?.affiliation_no,
                    orcid: article_author?.author?.orcid,
                    is_main: article_author?.is_main
                })
            });
            setAuthors(authorData)
        }
    }, [article?.article_authors]);

    useEffect(() => {
        if (isArticleUpdated) {
            navigate(`/admin/articles`)
        }
    }, [isArticleUpdated]);

    useEffect(() => {
        fetchArticleTypes();
    }, []);
    const {articleTypeList} = useSelector(state => state?.ArticleTypeReducer);

    const [formValues, setFormValues] = useState([]);
    useEffect(() => {
        if (article?.article_published?.article_published_content) {
            setFormValues(article?.article_published?.article_published_content)
        }
    }, [article?.article_published?.article_published_content]);

    const onSubmit = () => {
        const formData = new FormData();
        formData.append('article_id', articleId)
        formData.append('article_type', values?.article_type ? values?.article_type : article?.article_type)
        formData.append('article_mode', values?.article_mode)
        formData.append('title', values?.title ? values?.title : article?.title)
        formData.append('abstract', values?.abstract)
        formData.append('citation', values?.citation)
        formData.append('pdf', values?.pdf)
        formData.append('xml_path', values?.xml_path ? values.xml_path : '')
        formData.append('references', values?.references)
        formData.append('pages', values?.pages)
        formData.append('volume', values?.volume)
        formData.append('issue', values?.issue)
        formData.append('article_month', values?.article_month)
        formData.append('received_date', moment(values?.received_date).format("DD-MM-YYYY"))
        formData.append('accepted_date', moment(values?.accepted_date).format("DD-MM-YYYY"))
        formData.append('published_date', moment(values?.published_date).format("DD-MM-YYYY"))
        formData.append('doi', values?.doi)
        formData.append('doi_url', values?.doi_url)
        formData.append('keyword', values?.keyword)
        formData.append('section_data', JSON.stringify(formValues))
        formData.append('authors', JSON.stringify(authors))
        formData.append('affiliations', JSON.stringify(affiliations))
        updateArticlePublishedData({formData, id:article?.article_published.id});

    }


    const {
        values,
        setValues,
        errors,
        handleSubmit,
        touched,
        clearFormState,
    }
        = useValidator({
        initialValues: {
            article_type: "",
            article_mode: "",
            title: "",
            abstract: "",
            citation: "",
            pdf: "",
            pdf_file_path: "",
            xml_path: "",
            xml_file_path: "",
            references: "",
            pages: "",
            volume: "",
            issue: "",
            article_month: "",
            received_date: "",
            accepted_date: "",
            published_date: "",
            doi: "",
            doi_url: "",
            keyword: "",
        },
        validationSchema: Yup.object({
            article_mode: Yup.string().required('Article mode is required'),
            abstract: Yup.string().required('Abstract content is required'),
            references: Yup.string().required('References is required'),
            article_month: Yup.string().required('Article month is required'),
            volume: Yup.string().required('Volume is required'),
            issue: Yup.string().required('Issue is required'),
            doi: Yup.string().required('DOI no is required'),
            doi_url: Yup.string().required('DOI URL is required'),
            keyword: Yup.string().required('Keyword is required'),
        }),
        onSubmit,
    });

    useEffect(() => {
        setValues({
            ...values,
            article_type: article.article_type,
            title: article.title,
            abstract: article.abstract,
            received_date: moment(article?.received_date).toDate(),
            accepted_date: moment(article?.accepted_date).toDate(),
            published_date: moment(article?.article_published?.published_date).toDate(),
            citation: article?.article_published?.citation,
            article_mode: article?.article_published?.article_mode,
            volume: article?.article_published?.volume,
            issue: article?.article_published?.issue,
            pages: article?.article_published?.pages,
            article_month: article?.article_published?.article_month,
            pdf_file_path: article?.article_published?.pdf,
            xml_file_path: article?.article_published?.xml_path,
            doi: article?.article_published?.doi,
            doi_url: article?.article_published?.doi_url,
            keyword: article?.article_published?.keyword,
            references: article?.article_published?.references,
        })

    }, [article]);


    return (
        <HelmetProvider>
            <Helmet>
                <title>Article detail</title>
            </Helmet>
            {isJournalArticleDetailFetching ?
                <div className="my-5 py-5 text-center"><Loader/></div>
                :
                <main>
                    <Container className="d-flex justify-content-between">
                        <div>
                            <Breadcrumb>
                                <Breadcrumb.Item linkAs={Link}
                                                 linkProps={{to: `/admin/dashboard`}}>Home</Breadcrumb.Item>
                                <Breadcrumb.Item linkAs={Link}
                                                 linkProps={{to: `/admin/article/view/${articleId}`}}>Article
                                    Detail</Breadcrumb.Item>
                                <Breadcrumb.Item active>Publish Article</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                    </Container>
                    <Container>
                        <Card>
                            <Card.Body>
                                <Form validated={true} onSubmit={handleSubmit}>
                                    <FormWizard
                                        shape="circle"
                                        color="#8cc63f"
                                        stepSize="xs"
                                        finishButtonTemplate={(handleComplete) => (
                                            <>
                                                {
                                                    isArticlePublishedUpdating ?
                                                        <Button  className="finish-button btn-success px-5 float-end btn btn-primary rounded" type="button" size="lg" disabled>
                                                            <Spinner
                                                                as="span"
                                                                animation="border"
                                                                size="sm"
                                                                role="status"
                                                                aria-hidden="true"
                                                            /> Submitting...
                                                        </Button>
                                                        :
                                                        <Button type="submit" className="finish-button btn-success px-5 float-end btn btn-primary rounded" onClick={handleComplete}>
                                                            Submit
                                                        </Button>
                                                }
                                            </>
                                        )}
                                    >
                                        <FormWizard.TabContent title="Author details" icon="ti-user">
                                            <AuthorDetail
                                                CountryList={CountryList}
                                                affiliations={affiliations}
                                                setAffiliations={setAffiliations}
                                                authors={authors}
                                                setAuthors={setAuthors}

                                            />
                                        </FormWizard.TabContent>
                                        <FormWizard.TabContent title="Article Detail" icon="ti-settings">
                                            <ArticleDetail
                                                values={values}
                                                setValues={setValues}
                                                touched={touched}
                                                errors={errors}
                                                articleTypeList={articleTypeList}
                                            />
                                        </FormWizard.TabContent>
                                        <FormWizard.TabContent title="Full Text" icon="ti-check">
                                            <FullTextContent
                                                formValues={formValues}
                                                setFormValues={setFormValues}
                                                articleId={articleId}
                                            />
                                        </FormWizard.TabContent>
                                    </FormWizard>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Container>
                </main>
            }

        </HelmetProvider>

    )
}

function mapDispatchToProps(dispatch) {
    return {
        getArticleDetail: (articleId) => dispatch(getJournalArticleDetail(articleId)),
        updateArticlePublishedData: (data) => dispatch(articlePublishUpdate(data)),
        fetchArticleTypes: () => dispatch(getArticleType()),
        getCountryList: () => dispatch(getCountryList()),

    }
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(PublishArticleEdit);

