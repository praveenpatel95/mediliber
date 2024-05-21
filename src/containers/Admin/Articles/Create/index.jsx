import {Helmet, HelmetProvider} from "react-helmet-async";
import Container from "react-bootstrap/Container";
import {Breadcrumb, Button, Card, Col, Form, Row, Spinner} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faPlus} from "@fortawesome/fontawesome-free-solid";
import {useEffect, useState} from "react";
import useValidator from "../../../../utils/useValidator";
import * as Yup from "yup";
import {articleAdminCreate} from "../../../../stores/Admin/Article/actions";
import {connect, useSelector} from "react-redux";
import {getCountryList} from "../../../../stores/Common/Country/actions";
import {compose} from "redux";
import {getArticleType} from "../../../../stores/Common/ArticleType/actions";

function CreateArticle({articleStore, getCountryList, fetchArticleTypes}) {

    const {
        isArticleCreating,
        isArticleCreatingError,
        isArticleUpdated
    } = useSelector(state => state?.JournalArticleReducer)

    useEffect(() => {
        getCountryList();
        fetchArticleTypes();
    }, []);

    const {CountryList} = useSelector(state => state?.CountryReducer);
    const {articleTypeList} = useSelector(state => state?.ArticleTypeReducer);

    const [authors, setAuthors] = useState([
        {
            'id': '',
            email: '',
            first_name: '',
            last_name: '',
            affiliation_no: '',
            country: '',
            orcid: '',
            isMain: true
        }
    ]);


    const addNewAuthor = () => {
        setAuthors([...authors, {
            'id': '',
            email: '',
            first_name: '',
            last_name: '',
            country: '',
            affiliation_no: '',
            orcid: '',
            isMain: false
        }]);
    }

    const [affiliations, setAffiliations] = useState([{
        affiliation: '',
        country: ''
    }]);
    const addNewAffiliation = () => {
        setAffiliations([...affiliations, {
            affiliation: '',
            country: ''
        }]);
    }

    const onSubmit = () => {
        const formData = new FormData();
        formData.append('article_type', values?.article_type)
        formData.append('title', values?.title)
        formData.append('abstract', values?.abstract)
        formData.append('manuscript_path', values?.manuscript_path)
        formData.append('cover_letter_path', values?.cover_letter_path)
        formData.append('supplemental_files_path', values?.supplemental_files_path)
        formData.append('authors', JSON.stringify(authors))
        formData.append('affiliations', JSON.stringify(affiliations))
        articleStore(formData);
    }

    const navigate = useNavigate();
    useEffect(() => {
        if (isArticleUpdated) {
            navigate('/admin/articles');

        }
    }, [isArticleUpdated]);


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
            article_type: "",
            title: "",
            abstract: "",
            manuscript_path: "",
            cover_letter_path: "",
            supplemental_files_path: "",
        },
        validationSchema: Yup.object({
            article_type: Yup.string().required('Journal type is required'),
            title: Yup.string().required('Title name is required'),
            abstract: Yup.string().required('Abstract content is required'),
        }),
        onSubmit,
    });


    const handleAuthorChange = (i, e) => {
        let newAuthorValues = [...authors];
        let value = e.target.value;
        if (e.target.name === "isMain") {
            value = e.target.checked;
        }
        newAuthorValues[i][e.target.name] = value;
        setAuthors(newAuthorValues);
    }

    const handleAffiliationChange = (index, e) => {
        let newAffiliations = [...affiliations];
        newAffiliations[index][e.target.name] = e.target.value;
        setAffiliations(newAffiliations);
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
                            <Breadcrumb.Item linkAs={Link} linkProps={{to: `/admin/dashboard`}}>Home</Breadcrumb.Item>
                            <Breadcrumb.Item linkAs={Link}
                                             linkProps={{to: `/admin/articles`}}>Articles</Breadcrumb.Item>
                            <Breadcrumb.Item
                                active>Create New Article</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <Button variant="primary" as={Link} to="/admin/articles"><FontAwesomeIcon
                        icon={faArrowLeft}/> Back</Button>
                </Container>
                <section className="my-4">
                    <Container>
                        <Card>
                            <Card.Body>
                                <Form validated={true} onSubmit={handleSubmit}>
                                    <Row>
                                        <Form.Group as={Col} md="2" className="mb-3">
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
                                                {articleTypeList?.map((articleType) => (
                                                    <option>{articleType.article_type}</option>
                                                ))}

                                            </Form.Select>

                                            {touched?.article_type && errors?.article_type ? (
                                                <Form.Text className="text-danger">{errors?.article_type}</Form.Text>
                                            ) : (
                                                ''
                                            )}
                                        </Form.Group>
                                        <Form.Group as={Col} md="10" className="mb-3">
                                            <Form.Label>Article Title <span
                                                className="text-danger">*</span></Form.Label>
                                            <Form.Control
                                                type="text"
                                                required
                                                placeholder="Enter article title"
                                                value={values?.title}
                                                onChange={e => setValues({...values, title: e.target.value})}
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Row>
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
                                    </Row>
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
                                        <h5 className="mt-3">Affiliation:
                                            <small onClick={addNewAffiliation}
                                                   className="theme_text_color ps-3 cursor_pointer"><FontAwesomeIcon
                                                icon={faPlus}/> Add New
                                                Affiliation</small>
                                        </h5>
                                        {affiliations?.map((affiliation, index) => (

                                            <Row className="author_section">
                                                <Col md={1}>
                                                    <label>No. {index + 1}</label>
                                                </Col>
                                                <Form.Group as={Col} md="6" className="mb-3">
                                                    <Form.Control
                                                        type="text"
                                                        required={true}
                                                        value={affiliation.affiliation}
                                                        name="affiliation"
                                                        onChange={e => handleAffiliationChange(index, e)}
                                                    />
                                                </Form.Group>
                                                <Form.Group as={Col} md="5" className="mb-3">
                                                    <Form.Select
                                                        value={affiliation?.country}
                                                        name="country"
                                                        onChange={e => handleAffiliationChange(index, e)}
                                                        required
                                                    >
                                                        <option value="">--Select--</option>
                                                        {CountryList?.map((country, key) => (
                                                            <option key={key}>{country?.country_name}</option>
                                                        ))}

                                                    </Form.Select>
                                                </Form.Group>
                                            </Row>
                                        ))}
                                        <h5 className="mt-3">Authors detail:
                                            <small onClick={addNewAuthor}
                                                   className="theme_text_color ps-3 cursor_pointer"><FontAwesomeIcon
                                                icon={faPlus}/> Add New
                                                Author</small>
                                        </h5>
                                        <hr/>
                                        {authors?.map((author, index) => {
                                            const sNo = index + 1;
                                            return (
                                                <Row className="author_section">
                                                    <Col sm={1}>
                                                        <Form.Label>CA.</Form.Label>
                                                        <Form.Check
                                                            name="isMain"
                                                            checked={author?.isMain ? true : false}
                                                            onChange={e => handleAuthorChange(index, e)}
                                                        />
                                                    </Col>
                                                    <Form.Group as={Col} md="2" className="mb-3">
                                                        <Form.Label>Email</Form.Label>
                                                        <Form.Control
                                                            type="email"
                                                            required={index === 0 ? true : false}
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
                                                    <Form.Group as={Col} md="2" className="mt-0">
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
                                                    <Form.Group as={Col} md="1" className="mb-3">
                                                        <Form.Label>Aff. No</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            value={author?.affiliation_no}
                                                            name="affiliation_no"
                                                            onChange={e => handleAuthorChange(index, e)}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="2" className="mb-3">
                                                        <Form.Label>Orcid</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            value={author?.orcid}
                                                            name="orcid"
                                                            onChange={e => handleAuthorChange(index, e)}
                                                        />
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
                                    {isArticleCreatingError && <p className="text-danger">{isArticleCreatingError}</p>}
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
        articleStore: (data) => dispatch((articleAdminCreate(data))),
        getCountryList: () => dispatch(getCountryList()),
        fetchArticleTypes: () => dispatch(getArticleType()),
    }
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(CreateArticle);