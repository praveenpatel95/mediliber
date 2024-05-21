import {Helmet, HelmetProvider} from "react-helmet-async";
import {Link, useNavigate} from "react-router-dom";
import Container from "react-bootstrap/Container";
import {Breadcrumb, Button, Card, Col, Form, Row, Spinner} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faPlus} from "@fortawesome/fontawesome-free-solid";
import {connect, useSelector} from "react-redux";
import useValidator from "../../../../utils/useValidator";
import * as Yup from "yup";
import {compose} from "redux";
import {useEffect, useState} from "react";
import {journalList} from "../../../../stores/Common/Journal/actions";
import './style.scss'
import {getCountryList} from "../../../../stores/Common/Country/actions";
import {articleCreate} from "../../../../stores/Article/actions";
import {getAuthorProfile} from "../../../../stores/Author/Profile/actions";

function ArticleCreate({
                           getJournalList, getCountryList, articleSave, fetchAuthorProfile
                       }) {

    const {isArticleCreating, isArticleCreatingError, isArticleCreated} = useSelector(state => state?.ArticleReducer)

    useEffect(() => {
        fetchAuthorProfile();
    }, []);

    useEffect(() => {
        getJournalList();
    }, []);

    useEffect(() => {
        getCountryList();
    }, []);

    const {
        user
    } = useSelector(state => state?.AuthReducer);


    const {
        AuthorProfile
    } = useSelector(state => state?.AuthorReducer)

    const {CountryList} = useSelector(state => state?.CountryReducer);

    const {journals} = useSelector(state => state?.CommonJournalReducer)

    const [authors, setAuthors] = useState([
        {
            'id': '',
            email: user?.email,
            first_name: AuthorProfile?.first_name,
            last_name: AuthorProfile?.last_name,
            affiliation: AuthorProfile?.affiliation,
            country: AuthorProfile?.country,
            isMain: true
        }
    ]);

    // useEffect(() => {
    //     if(AuthorProfile){
    //         setAuthors(auth)
    //     }
    // }, [AuthorProfile])
    const onSubmit = () => {
        const formData = new FormData();
        formData.append('journal_id', values?.journal_id)
        formData.append('article_type', values?.article_type)
        formData.append('title', values?.title)
        formData.append('abstract', values?.abstract)
        formData.append('manuscript_path', values?.manuscript_path)
        formData.append('cover_letter_path', values?.cover_letter_path)
        formData.append('supplemental_files_path', values?.supplemental_files_path)
        formData.append('authors', JSON.stringify(authors))
        articleSave(formData);
    }

    const navigate = useNavigate();
    useEffect(() => {
        if (isArticleCreated) {
            navigate('/author/dashboard');

        }
    }, [isArticleCreated]);


    const {
        values,
        setValues,
        errors,
        handleSubmit,
        touched,
        clearFormState
    }
        = useValidator({
        initialValues: {
            journal_id: "",
            article_type: "",
            title: "",
            abstract: "",
            manuscript_path: "",
            cover_letter_path: "",
            supplemental_files_path: "",
        },
        validationSchema: Yup.object({
            journal_id: Yup.number().required('Journal is required'),
            article_type: Yup.string().required('Journal type is required'),
            title: Yup.string().required('Title name is required'),
            abstract: Yup.string().required('Abstract content is required'),
        }),
        onSubmit,
    });

    const articleTypes = [
        'Review Article',
        'Research Article',
    ];

    const addNewAuthor = () => {
        setAuthors([...authors, {
            'id': '',
            email: '',
            first_name: '',
            last_name: '',
            affiliation: '',
            country: '',
            isMain: false
        }]);
    }

    const handleAuthorChange = (i, e) => {
        let newAuthorValues = [...authors];
        newAuthorValues[i][e.target.name] = e.target.value;
        setAuthors(newAuthorValues);
    }

    return (
        <HelmetProvider>
            <Helmet>
                <title>Create New Article</title>
            </Helmet>
            <main className="py-4 bg-grey-lime">
                <Container className="d-flex justify-content-between">
                    <div>
                        <Breadcrumb>
                            <Breadcrumb.Item linkAs={Link}
                                             linkProps={{to: `/author/dashboard`}}>Dashboard</Breadcrumb.Item>
                            <Breadcrumb.Item
                                active>Create New Article</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <Button variant="primary" as={Link} to="/author/dashboard"><FontAwesomeIcon
                        icon={faArrowLeft}/> Back</Button>
                </Container>
                <section className="my-4">
                    <Container>
                        <Card>
                            <Card.Body>
                                {isArticleCreatingError &&
                                    <Form.Text className="text-danger">{isArticleCreatingError}</Form.Text>}
                                <Form validated={true} onSubmit={handleSubmit}>
                                    <Row>
                                        <Form.Group as={Col} md="6" className="mb-3">
                                            <Form.Label>Journal <span className="text-danger">*</span></Form.Label>
                                            <Form.Select
                                                value={values?.journal_id}
                                                onChange={e => setValues({
                                                    ...values,
                                                    journal_id: e.target.value
                                                })}
                                                required
                                            >
                                                <option value="">--Select--</option>
                                                {journals?.map((journal) => (
                                                    <option value={journal?.id}>{journal?.name}</option>
                                                ))}

                                            </Form.Select>

                                            {touched?.journal_id && errors?.journal_id ? (
                                                <Form.Text className="text-danger">{errors?.journal_id}</Form.Text>
                                            ) : (
                                                ''
                                            )}
                                        </Form.Group>
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
                                                <option value="">--Select--</option>
                                                {articleTypes?.map((articleType) => (
                                                    <option>{articleType}</option>
                                                ))}

                                            </Form.Select>

                                            {touched?.article_type && errors?.article_type ? (
                                                <Form.Text className="text-danger">{errors?.article_type}</Form.Text>
                                            ) : (
                                                ''
                                            )}
                                        </Form.Group>
                                    </Row>
                                    <Form.Group as={Col} md="12" className="mb-3">
                                        <Form.Label>Article Title <span className="text-danger">*</span></Form.Label>
                                        <Form.Control
                                            type="text"
                                            required
                                            placeholder="Enter article title"
                                            value={values?.title}
                                            onChange={e => setValues({...values, title: e.target.value})}
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" className="mb-3">
                                        <Form.Label>Abstract <span className="text-danger">*</span></Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter abstract"
                                            value={values?.abstract}
                                            onChange={e => setValues({...values, abstract: e.target.value})}
                                            as="textarea"
                                            required
                                        />
                                    </Form.Group>
                                    <h5>Upload Files:</h5>
                                    <hr/>
                                    <Row>
                                        <Form.Group as={Col} md="4" className="mb-3">
                                            <Form.Label>Manuscript File</Form.Label>
                                            <Form.Control
                                                type="file"
                                                required={true}
                                                onChange={e => setValues({
                                                    ...values,
                                                    manuscript_path: e.target.files[0]
                                                })}
                                                accept="application/pdf, application/docx, application/doc, application/txt, application/rdf, application/odt"
                                            />
                                            {touched?.manuscript_path && errors?.manuscript_path ? (
                                                <Form.Text className="text-danger">{errors?.manuscript_path}</Form.Text>
                                            ) : (
                                                ''
                                            )}
                                        </Form.Group>
                                        <Form.Group as={Col} md="4" className="mb-3">
                                            <Form.Label>Cover Letter</Form.Label>
                                            <Form.Control
                                                type="file"
                                                accept="image/*"
                                                onChange={e => setValues({
                                                    ...values,
                                                    cover_letter_path: e.target.files[0]
                                                })}
                                            />
                                            {touched?.cover_letter_path && errors?.cover_letter_path ? (
                                                <Form.Text
                                                    className="text-danger">{errors?.cover_letter_path}</Form.Text>
                                            ) : (
                                                ''
                                            )}
                                        </Form.Group>
                                        <Form.Group as={Col} md="4" className="mb-3">
                                            <Form.Label>Supplemental Files</Form.Label>
                                            <Form.Control
                                                type="file"
                                                accept="image/*"
                                                onChange={e => setValues({
                                                    ...values,
                                                    supplemental_files_path: e.target.files[0]
                                                })}
                                            />
                                            {touched?.supplemental_files_path && errors?.supplemental_files_path ? (
                                                <Form.Text
                                                    className="text-danger">{errors?.supplemental_files_path}</Form.Text>
                                            ) : (
                                                ''
                                            )}
                                        </Form.Group>
                                        <h5 className="mt-3">Authors detail:
                                            <small onClick={addNewAuthor}
                                                   className="theme_text_color ps-3 cursor_pointer"><FontAwesomeIcon
                                                icon={faPlus}/> Add New
                                                Author</small></h5>
                                        <hr/>
                                        {authors?.map((author, index) => {
                                            const sNo = index + 1;
                                            return (
                                                <Row className="author_section">
                                                    <Col sm={1} className="pt-4"><small>#{sNo} {author?.isMain && <label className="badge bg-primary">Main</label>}</small></Col>
                                                    <Form.Group as={Col} md="2" className="mb-3">
                                                        <Form.Label>Email</Form.Label>
                                                        <Form.Control
                                                            type="email"
                                                            readOnly={author?.isMain}
                                                            required={true}
                                                            value={author?.email}
                                                            name="email"
                                                            onChange={e => handleAuthorChange(index, e)}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="2" className="mb-3">
                                                        <Form.Label>First Name</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            required={true}
                                                            value={author?.first_name}
                                                            name="first_name"
                                                            onChange={e => handleAuthorChange(index, e)}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="2" className="mb-3">
                                                        <Form.Label>Last Name</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            required={true}
                                                            value={author?.last_name}
                                                            name="last_name"
                                                            onChange={e => handleAuthorChange(index, e)}

                                                        />
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="3" className="mb-3">
                                                        <Form.Label>Affiliation</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            required={true}
                                                            value={author?.affiliation}
                                                            name="affiliation"
                                                            onChange={e => handleAuthorChange(index, e)}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="2" className="mb-3">
                                                        <Form.Label>Country</Form.Label>
                                                        <Form.Select
                                                            value={author?.country}
                                                            name="country"
                                                            onChange={e => handleAuthorChange(index, e)}
                                                            required
                                                        >
                                                            <option value="">--Select--</option>
                                                            {CountryList?.map((country, key) => (
                                                                <option key={key}>{country?.country_name}</option>
                                                            ))}

                                                        </Form.Select>

                                                    </Form.Group>
                                                    <hr/>
                                                </Row>

                                            )
                                        })}
                                    </Row>
                                    <div className="mt-3">
                                        {isArticleCreating ?

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
                                                    Submit
                                                </Button>

                                            </div>

                                        }
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Container>
                </section>
            </main>

        </HelmetProvider>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        fetchAuthorProfile: () => dispatch(getAuthorProfile()),
        getJournalList: () => dispatch(journalList()),
        getCountryList: () => dispatch(getCountryList()),
        articleSave: (data) => dispatch(articleCreate(data)),
    };
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(ArticleCreate);
