import {Helmet, HelmetProvider} from "react-helmet-async";
import Container from "react-bootstrap/Container";
import {Breadcrumb, Button, Card, Col, Form, Spinner} from "react-bootstrap";
import {Link, useNavigate, useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faPlus} from "@fortawesome/fontawesome-free-solid";
import {connect, useSelector} from "react-redux";
import {compose} from "redux";
import {useEffect, useState} from "react";
import ReactQuill from 'react-quill';
import {getAdminJournalPageDetail, updateAdminJournalPageDetail} from "../../../../stores/Admin/JournalPage/actions";
import Loader from "../../../../components/Loader";

function JournalPageEdit({getPageDetail, updateJournalPageDetail}) {
    let {pageId} = useParams();
    const [formValues, setFormValues] = useState([]);
    //get page detail by id
    useEffect(() => {
        if (pageId) {
            getPageDetail({id: pageId})
        }
    }, [pageId]);

    const {
        isAdminJournalPageDetailFetching, isAdminJournalPageDetailFetchingError,
        isAdminJournalPageUpdating,
        isAdminJournalPageUpdatingError,
        journalPageData, isUpdated,

    } = useSelector(state => state?.AdminJournalPageReducer);


    const navigate = useNavigate();
    useEffect(() => {
        if (isUpdated) {
            navigate('/admin/journal-pages');
        }
    }, [isUpdated]);


    useEffect(() => {
        if (journalPageData?.page_content) {
            setFormValues(journalPageData.page_content);

        }
    }, [journalPageData]);


    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }

    let handleContentChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i]['content'] = e;
        setFormValues(newFormValues);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('page_data', JSON.stringify(formValues))
        updateJournalPageDetail({formData, id: pageId})
    }

    const addNewSection = () => {
        setFormValues([...formValues, {'id':'', title:'', content:''}]);
    }

    return (
        <HelmetProvider>
            <Helmet>
                <title>Update Page Detail</title>
            </Helmet>
            <main className="py-4 bg-grey-lime">
                <Container className="d-flex justify-content-between">
                    <div>
                        <Breadcrumb>
                            <Breadcrumb.Item linkAs={Link}
                                             linkProps={{to: `/admin/dashboard`}}>Home</Breadcrumb.Item>
                            <Breadcrumb.Item linkAs={Link}
                                             linkProps={{to: `/admin/journal-pages`}}>Journal Pages</Breadcrumb.Item>
                            <Breadcrumb.Item
                                active>Update Page Detail</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <Button variant="primary" as={Link} to="/admin/journal-pages"><FontAwesomeIcon
                        icon={faArrowLeft}/> Back</Button>
                </Container>
                <section className="my-4">
                    <Container>
                        <Card>
                            <Card.Body>
                                {isAdminJournalPageDetailFetchingError &&
                                    <Form.Text
                                        className="text-danger">{isAdminJournalPageDetailFetchingError}</Form.Text>}

                                {isAdminJournalPageUpdatingError &&
                                    <Form.Text
                                        className="text-danger">{isAdminJournalPageUpdatingError}</Form.Text>}
                                {isAdminJournalPageDetailFetching ?
                                    <div className="text-center py-5">
                                        <Loader/>
                                    </div>
                                    :
                                    <Form validated={true} onSubmit={handleSubmit}>
                                        <h4>Page Name: {journalPageData?.page?.page_name}</h4>
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
                                                    <ReactQuill theme="snow"
                                                                value={form.content}
                                                                name="content"
                                                                onChange={e => handleContentChange(index, e)}
                                                    />
                                                </Form.Group>
                                            </div>
                                        )}
                                        <Form.Group as={Col} md="12" className="mb-3">
                                            <Button variant="outline-info" onClick={addNewSection}><FontAwesomeIcon icon={faPlus}/> Add New
                                                Section</Button>
                                        </Form.Group>
                                        <hr/>

                                        <div className="mt-3">
                                            {isAdminJournalPageUpdating ?

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
                                }
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
        getPageDetail: (data) => dispatch(getAdminJournalPageDetail(data)),
        updateJournalPageDetail: (data) => dispatch(updateAdminJournalPageDetail(data)),
    };
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(JournalPageEdit);