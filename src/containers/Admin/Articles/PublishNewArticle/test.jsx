import {Helmet, HelmetProvider} from "react-helmet-async";
import Loader from "../../../../components/Loader";
import {Badge, Breadcrumb, Button, Card, Col, Container, Form, Row, Spinner} from "react-bootstrap";
import {Link, useNavigate, useParams} from "react-router-dom";
import {connect, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {articlePublishCreate, getJournalArticleDetail} from "../../../../stores/Admin/Article/actions";
import moment from "moment/moment";
import {compose} from "redux";
import useValidator from "../../../../utils/useValidator";
import * as Yup from "yup";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import DatePicker from "react-datepicker";
import {getArticleType} from "../../../../stores/Common/ArticleType/actions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/fontawesome-free-solid";

function PublishNewArticle({getArticleDetail, articlePublishCreate, fetchArticleTypes}) {
    let {articleId} = useParams();

    const {
        isJournalArticleDetailFetching,
        isJournalArticleDetailFetchingError,
        article,
        isArticlePublishCreating,
        isArticlePublishCreatingError,
        isArticleUpdated
    } = useSelector(state => state?.JournalArticleReducer);

    useEffect(() => {
        getArticleDetail(articleId)
    }, [articleId]);

    const navigate = useNavigate();
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
    const addNewSection = () => {
        setFormValues([...formValues, {'id':'', title:'', content:''}]);
    }

    const handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }

    const handleContentChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i]['content'] = e;
        setFormValues(newFormValues);
    }

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
        formData.append('references', values?.reference)
        formData.append('pages', values?.pages)
        formData.append('volume', values?.volume)
        formData.append('issue', values?.issue)
        formData.append('article_month', values?.article_month)
        formData.append('received_date', moment(values?.received_date).format("DD-MM-YYYY"))
        formData.append('accepted_date', moment(values?.accepted_date).format("DD-MM-YYYY"))
        formData.append('published_date', moment(values?.published_date).format("DD-MM-YYYY"))
        formData.append('doi', values?.doi)
        formData.append('doi_url', values?.doi_url)
        formData.append('keyword', values?.keywords)
        formData.append('section_data', JSON.stringify(formValues))
        articlePublishCreate(formData);

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
            xml_path: "",
            reference: "",
            pages: "",
            volume: "",
            issue: "",
            article_month: "",
            received_date: "",
            accepted_date: "",
            published_date: "",
            doi: "",
            doi_url: "",
            keywords: "",
        },
        validationSchema: Yup.object({
            article_mode: Yup.string().required('Article mode is required'),
            abstract: Yup.string().required('Abstract content is required'),
            reference: Yup.string().required('Reference is required'),
            article_month: Yup.string().required('Article month is required'),
            volume: Yup.string().required('Volume is required'),
            issue: Yup.string().required('Issue is required'),
            doi: Yup.string().required('DOI no is required'),
            doi_url: Yup.string().required('DOI URL is required'),
            keywords: Yup.string().required('Keywords is required'),
        }),
        onSubmit,
    });

    useEffect(() => {
        setValues({
            ...values,
            article_type: article.article_type,
            title: article.title,
            abstract: article.abstract,
            received_date: moment(article?.created_at).toDate(),
        })

    }, [article]);


    const articleModes = [
        'Press',
        'Current',
        'Archive',
    ];


    return (
        <HelmetProvider>
            <Helmet>
                <title>Article detail</title>
            </Helmet>
            {isJournalArticleDetailFetching ?
                <div className="my-5 py-5 text-center"><Loader/></div>
                :
                <main className="py-4">
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
                    <section className="my-4">
                        <Container>
                            <Row>
                                <Col sm={8}>
                                    <Card>
                                        <Card.Body>
                                            <Form validated={true} onSubmit={handleSubmit}>

                                                <Form.Group as={Col} md="12" className="mb-3">
                                                    <Form.Label>Article Title <span
                                                        className="text-danger">*</span></Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        required
                                                        placeholder="Enter article title"
                                                        value={values?.title}
                                                        onChange={e => setValues({...values, title: e.target.value})}
                                                    />

                                                    {touched?.title && errors?.title ? (
                                                        <Form.Text
                                                            className="text-danger">{errors?.title}</Form.Text>
                                                    ) : (
                                                        ''
                                                    )}
                                                </Form.Group>
                                                <Form.Group as={Col} md="12" className="mb-3">
                                                    <Form.Label>Abstract <span
                                                        className="text-danger">*</span></Form.Label>
                                                    <CKEditor
                                                        data={values?.abstract}
                                                        editor={ClassicEditor}
                                                        onChange={(event, editor) => {
                                                            setValues({...values, abstract: editor.getData()})
                                                        }}

                                                    />
                                                    {touched?.abstract && errors?.abstract ? (
                                                        <Form.Text
                                                            className="text-danger">{errors?.abstract}</Form.Text>
                                                    ) : (
                                                        ''
                                                    )}
                                                </Form.Group>
                                                <Form.Group as={Col} md="12" className="mb-3">
                                                    <Form.Label>Citation <span
                                                        className="text-danger">*</span></Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Enter citation"
                                                        value={values?.citation}
                                                        required
                                                        onChange={e => setValues({
                                                            ...values,
                                                            citation: e.target.value
                                                        })}
                                                        as="textarea"
                                                    />
                                                    {touched?.citation && errors?.citation ? (
                                                        <Form.Text
                                                            className="text-danger">{errors?.citation}</Form.Text>
                                                    ) : (
                                                        ''
                                                    )}
                                                </Form.Group>

                                                <Row>
                                                    <Form.Group as={Col} md="6" className="mb-3">
                                                        <Form.Label>Article Type <span className="text-danger">*</span></Form.Label>
                                                        <Form.Select
                                                            value={values?.article_type}
                                                            onChange={e => setValues({
                                                                ...values,
                                                                article_type: e.target.value
                                                            })}
                                                            required
                                                        >
                                                            {articleTypeList?.map((articleType) => (
                                                                <option>{articleType.article_type}</option>
                                                            ))}


                                                        </Form.Select>

                                                        {touched?.article_type && errors?.article_type ? (
                                                            <Form.Text
                                                                className="text-danger">{errors?.article_type}</Form.Text>
                                                        ) : (
                                                            ''
                                                        )}
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="6" className="mb-3">
                                                        <Form.Label>Article Mode <span className="text-danger">*</span></Form.Label>
                                                        <Form.Select
                                                            value={values?.article_mode}
                                                            onChange={e => setValues({
                                                                ...values,
                                                                article_mode: e.target.value
                                                            })}
                                                            required
                                                        >
                                                            <option value="">--Select--</option>
                                                            {articleModes?.map((articleMode) => (
                                                                <option>{articleMode}</option>
                                                            ))}

                                                        </Form.Select>

                                                        {touched?.article_mode && errors?.article_mode ? (
                                                            <Form.Text
                                                                className="text-danger">{errors?.article_mode}</Form.Text>
                                                        ) : (
                                                            ''
                                                        )}
                                                    </Form.Group>

                                                </Row>
                                                <Row>
                                                    <Form.Group as={Col} md="6" className="mb-3">
                                                        <Form.Label>Volume <span
                                                            className="text-danger">*</span></Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Enter volume no"
                                                            value={values?.volume}
                                                            required
                                                            onChange={e => setValues({
                                                                ...values,
                                                                volume: e.target.value
                                                            })}
                                                        />
                                                        {touched?.volume && errors?.volume ? (
                                                            <Form.Text
                                                                className="text-danger">{errors?.volume}</Form.Text>
                                                        ) : (
                                                            ''
                                                        )}
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="6" className="mb-3">
                                                        <Form.Label>Issue <span
                                                            className="text-danger">*</span></Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Enter issue"
                                                            value={values?.issue}
                                                            required onChange={e => setValues({
                                                            ...values,
                                                            issue: e.target.value
                                                        })}
                                                        />
                                                        {touched?.issue && errors?.issue ? (
                                                            <Form.Text
                                                                className="text-danger">{errors?.issue}</Form.Text>
                                                        ) : (
                                                            ''
                                                        )}
                                                    </Form.Group>
                                                </Row>
                                                <Row>
                                                    <Form.Group as={Col} md="6" className="mb-3">
                                                        <Form.Label>Pages</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Ex. 101-109"
                                                            value={values?.pages}
                                                            onChange={e => setValues({
                                                                ...values,
                                                                pages: e.target.value
                                                            })}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="6" className="mb-3">
                                                        <Form.Label>Article Month</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Ex Jan-Feb"
                                                            required={true}
                                                            value={values?.article_month}
                                                            onChange={e => setValues({
                                                                ...values,
                                                                article_month: e.target.value
                                                            })}
                                                        />
                                                        {touched?.article_month && errors?.article_month ? (
                                                            <Form.Text
                                                                className="text-danger">{errors?.article_month}</Form.Text>
                                                        ) : (
                                                            ''
                                                        )}
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="6" className="mb-3">
                                                        <Form.Label>PDF</Form.Label>
                                                        <Form.Control
                                                            type="file"
                                                            required={true}
                                                            onChange={e => setValues({
                                                                ...values,
                                                                pdf: e.target.files[0]
                                                            })}
                                                            accept="application/pdf"
                                                        />
                                                        {touched?.pdf && errors?.pdf ? (
                                                            <Form.Text className="text-danger">{errors?.pdf}</Form.Text>
                                                        ) : (
                                                            ''
                                                        )}
                                                    </Form.Group>

                                                    <Form.Group as={Col} md="6" className="mb-3">
                                                        <Form.Label>XML File</Form.Label>
                                                        <Form.Control
                                                            type="file"
                                                            onChange={e => setValues({
                                                                ...values,
                                                                xml_path: e.target.files[0]
                                                            })}
                                                            accept="xml"
                                                        />

                                                    </Form.Group>
                                                </Row>
                                                <Row>
                                                    <Form.Group as={Col} md="4" className="mb-3">
                                                        <Form.Label>Received Date</Form.Label>
                                                        <DatePicker
                                                            className="form-control"
                                                            selected={values?.received_date}
                                                            dateFormat="dd-MMM-yyyy"
                                                            required
                                                            onChange={(date) => setValues({
                                                                ...values,
                                                                received_date: date
                                                            })}
                                                        />
                                                        {touched?.received_date && errors?.received_date ? (
                                                            <Form.Text
                                                                className="text-danger">{errors?.received_date}</Form.Text>
                                                        ) : (
                                                            ''
                                                        )}
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="4" className="mb-3">
                                                        <Form.Label>Accepted Date</Form.Label>
                                                        <DatePicker
                                                            className="form-control"
                                                            selected={values?.accepted_date}
                                                            dateFormat="dd-MMM-yyyy"
                                                            required
                                                            onChange={(date) => setValues({
                                                                ...values,
                                                                accepted_date: date
                                                            })}
                                                        />
                                                        {touched?.accepted_date && errors?.accepted_date ? (
                                                            <Form.Text
                                                                className="text-danger">{errors?.accepted_date}</Form.Text>
                                                        ) : (
                                                            ''
                                                        )}
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="4" className="mb-3">
                                                        <Form.Label>Published Date</Form.Label>
                                                        <DatePicker
                                                            className="form-control"
                                                            selected={values?.published_date}
                                                            dateFormat="dd-MMM-yyyy"
                                                            required
                                                            onChange={(date) => setValues({
                                                                ...values,
                                                                published_date: date
                                                            })}
                                                        />
                                                        {touched?.published_date && errors?.published_date ? (
                                                            <Form.Text
                                                                className="text-danger">{errors?.published_date}</Form.Text>
                                                        ) : (
                                                            ''
                                                        )}
                                                    </Form.Group>
                                                </Row>
                                                <Row>
                                                    <Form.Group as={Col} md="6" className="mb-3">
                                                        <Form.Label>DOI</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Enter doi no"
                                                            value={values?.doi}
                                                            required
                                                            onChange={e => setValues({
                                                                ...values,
                                                                doi: e.target.value
                                                            })}
                                                        />
                                                        {touched?.doi && errors?.doi ? (
                                                            <Form.Text
                                                                className="text-danger">{errors?.doi}</Form.Text>
                                                        ) : (
                                                            ''
                                                        )}
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="6" className="mb-3">
                                                        <Form.Label>DOI Url</Form.Label>
                                                        <Form.Control
                                                            type="url"
                                                            placeholder="Enter issue"
                                                            value={values?.doi_url}
                                                            required onChange={e => setValues({
                                                            ...values,
                                                            doi_url: e.target.value
                                                        })}
                                                        />
                                                        {touched?.doi_url && errors?.doi_url ? (
                                                            <Form.Text
                                                                className="text-danger">{errors?.doi_url}</Form.Text>
                                                        ) : (
                                                            ''
                                                        )}
                                                    </Form.Group>
                                                </Row>
                                                <Form.Group as={Col} md="12" className="mb-3">
                                                    <Form.Label>Keywords <span
                                                        className="text-danger">*</span></Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        required
                                                        placeholder="Enter article title"
                                                        value={values?.keywords}
                                                        onChange={e => setValues({...values, keywords: e.target.value})}
                                                    />
                                                    {touched?.keywords && errors?.keywords ? (
                                                        <Form.Text
                                                            className="text-danger">{errors?.keywords}</Form.Text>
                                                    ) : (
                                                        ''
                                                    )}
                                                </Form.Group>
                                                <Form.Group as={Col} md="12" className="mb-3">
                                                    <Form.Label>Reference <span
                                                        className="text-danger">*</span></Form.Label>
                                                    <CKEditor
                                                        data={values?.reference}
                                                        editor={ClassicEditor}
                                                        onChange={(event, editor) => {
                                                            setValues({...values, reference: editor.getData()})
                                                        }}
                                                    />
                                                    {touched?.reference && errors?.reference ? (
                                                        <Form.Text
                                                            className="text-danger">{errors?.reference}</Form.Text>
                                                    ) : (
                                                        ''
                                                    )}
                                                </Form.Group>

                                                {formValues?.map((form, index) =>
                                                    <div className="form_list">
                                                        <Form.Group as={Col} md="12" className="mb-3">
                                                            <Form.Label>Section Title</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter section title"
                                                                value={form.title}
                                                                name="title"
                                                                onChange={e => handleChange(index, e)}
                                                                required
                                                            />

                                                        </Form.Group>

                                                        <Form.Group as={Col} md="12" className="mb-3">
                                                            <Form.Label>Section Content</Form.Label>
                                                            <CKEditor
                                                                data={form.content}
                                                                editor={ ClassicEditor }
                                                                onReady={ editor => {
                                                                } }
                                                                onChange={ ( event, editor ) => {
                                                                    handleContentChange(index, editor.getData());
                                                                } }
                                                            />
                                                        </Form.Group>
                                                    </div>
                                                )}
                                                <Form.Group as={Col} md="12" className="mb-3">
                                                    <Button variant="outline-info" onClick={addNewSection}><FontAwesomeIcon icon={faPlus}/> Add New
                                                        Section</Button>
                                                </Form.Group>
                                                <div className="mt-3">
                                                    {isArticlePublishCreating ?

                                                        <Button variant="primary" type="button" size="lg" disabled>
                                                            <Spinner
                                                                as="span"
                                                                animation="border"
                                                                size="sm"
                                                                role="status"
                                                                aria-hidden="true"
                                                            /> Submitting...
                                                        </Button>
                                                        :
                                                        <div>
                                                            <Button variant="primary" type="submit" size="lg">
                                                                Publish Article
                                                            </Button>

                                                        </div>

                                                    }
                                                </div>
                                            </Form>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={4}>
                                    <Card>
                                        <Card.Header>
                                            {moment(article?.created_at).format('DD-MMM-YYYY')}
                                            <Badge bg="default"
                                                   className={`${article?.status} ms-4`}> {article?.status}</Badge>
                                        </Card.Header>
                                        <Card.Body>
                                            {article?.article_authors?.map((articleAuthor, index) => (
                                                <span key={articleAuthor?.id}>
                                                    {articleAuthor?.author?.first_name + " " + articleAuthor?.author?.last_name}<sup>{articleAuthor?.affiliation_no}</sup>,
                                                </span>
                                            ))}
                                            {article?.article_affiliations?.map((article_affiliation, index) => (
                                            <p>
                                                <sup>{index +1 }</sup> {article_affiliation.affiliation}
                                            </p>
                                            ))}


                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>

                        </Container>
                    </section>

                </main>
            }
        </HelmetProvider>

    )
}

function mapDispatchToProps(dispatch) {
    return {
        getArticleDetail: (articleId) => dispatch(getJournalArticleDetail(articleId)),
        articlePublishCreate: (data) => dispatch(articlePublishCreate(data)),
        fetchArticleTypes: () => dispatch(getArticleType()),
    }
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(PublishNewArticle);