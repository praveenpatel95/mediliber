import {Helmet, HelmetProvider} from "react-helmet-async";
import Container from "react-bootstrap/Container";
import {Breadcrumb, Button, Card, Col, Form, Spinner} from "react-bootstrap";
import {Link, useNavigate, useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faPlus} from "@fortawesome/fontawesome-free-solid";
import {connect, useSelector} from "react-redux";
import {compose} from "redux";
import {useEffect, useState} from "react";
import {getOtherPageDetail, updateOtherPageDetail} from "../../../../../stores/SuperAdmin/OtherPage/actions";
import Loader from "../../../../../components/Loader";

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {CKEditor} from "@ckeditor/ckeditor5-react";
function OtherPageEdit({getPageDetail, updatePageDetail}) {
    let {pageId} = useParams();
    const [formValues, setFormValues] = useState([]);
    //get page detail by id
    useEffect(() => {
        if (pageId) {
            getPageDetail({id: pageId})
        }
    }, [pageId]);

    const {
        isOtherPageDetailFetching,
        isOtherPageDetailFetchingError,
        otherPageData,
        isUpdated,
        isOtherPageUpdating,
        isOtherPageUpdatingError


    } = useSelector(state => state?.OtherPageReducer);


    const navigate = useNavigate();
    useEffect(() => {
        if (isUpdated) {
            navigate('/super-admin/other-pages');
        }
    }, [isUpdated]);

    useEffect(() => {
        if (otherPageData?.content) {
            setFormValues(otherPageData.content);
        }
    }, [otherPageData]);


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
        updatePageDetail({formData, id: pageId})
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
                                             linkProps={{to: `/super-admin/other-pages`}}>Other Pages</Breadcrumb.Item>
                            <Breadcrumb.Item
                                active>Update Page Detail</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <Button variant="primary" as={Link} to="/super-admin/other-pages"><FontAwesomeIcon
                        icon={faArrowLeft}/> Back</Button>
                </Container>
                <section className="my-4">
                    <Container>
                        <Card>
                            <Card.Body>
                                {isOtherPageDetailFetchingError &&
                                    <Form.Text
                                        className="text-danger">{isOtherPageDetailFetchingError}</Form.Text>}

                                {isOtherPageUpdatingError &&
                                    <Form.Text
                                        className="text-danger">{isOtherPageUpdatingError}</Form.Text>}
                                {isOtherPageDetailFetching ?
                                    <div className="text-center py-5">
                                        <Loader/>
                                    </div>
                                    :
                                    <Form validated={true} onSubmit={handleSubmit}>
                                        <h4>Page Name: {otherPageData?.page_name}</h4>
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
                                                        onChange={ ( event, editor ) => {
                                                            handleContentChange(index, editor.getData())
                                                        } }
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
                                            {isOtherPageUpdating ?

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
        getPageDetail: (data) => dispatch(getOtherPageDetail(data)),
        updatePageDetail: (data) => dispatch(updateOtherPageDetail(data)),
    };
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(OtherPageEdit);