import {Helmet, HelmetProvider} from "react-helmet-async";
import Container from "react-bootstrap/Container";
import {Breadcrumb, Button, Card, Col, Form, Spinner} from "react-bootstrap";
import {Link, useNavigate, useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/fontawesome-free-solid";
import {connect, useSelector} from "react-redux";
import {compose} from "redux";
import {useEffect, useState} from "react";
import {webpageGetDetail, webpageUpdateDetail} from "../../../../../stores/SuperAdmin/WebPage/actions";
import Loader from "../../../../../components/Loader";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {CKEditor} from "@ckeditor/ckeditor5-react";

function MainPageEdit({getPageDetail, updatePageDetail}) {


    let {pageId} = useParams();
    //get page detail by id
    useEffect(() => {
        if (pageId) {
            getPageDetail({id: pageId})
        }
    }, [pageId]);

    const {
        isWebpageGetFetching,
        isWebpageGetFetchingError,
        webpageData,
        isWebpageUpdating,
        isWebpageUpdatingError,
        isWebpageUpdated,

    } = useSelector(state => state?.WebpageReducer);


    const navigate = useNavigate();
    useEffect(() => {
        if (isWebpageUpdated) {
            navigate('/super-admin/main-pages');
        }
    }, [isWebpageUpdated]);

    const [pageTitle, setPageTitle] = useState('')
    const [bannerContent, setBannerContent] = useState('')
    const [pageContent, setPageContent] = useState('')
    const [banner, setBanner] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('page_title', pageTitle);
        formData.append('banner', banner);
        formData.append('banner_content', bannerContent);
        formData.append('page_content', pageContent);
        updatePageDetail({formData,id:pageId});
    }

    useEffect(() => {
        if (webpageData?.id) {
            setPageTitle(webpageData?.page_title)
            setBannerContent(webpageData?.banner_content)
            setPageContent(webpageData?.page_content)
        }
    }, [webpageData]);

    const handleImage = (file) => {
        setBanner(file)
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
                                             linkProps={{to: `/super-admin/dashboard`}}>Home</Breadcrumb.Item>
                            <Breadcrumb.Item linkAs={Link}
                                             linkProps={{to: `/super-admin/main-pages`}}>Main Pages</Breadcrumb.Item>
                            <Breadcrumb.Item
                                active>Update Page Detail</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <Button variant="primary" as={Link} to="/super-admin/main-pages"><FontAwesomeIcon
                        icon={faArrowLeft}/> Back</Button>
                </Container>
                <section className="my-4">
                    <Container>
                        <Card>
                            <Card.Body>
                                {isWebpageGetFetchingError &&
                                    <Form.Text
                                        className="text-danger">{isWebpageGetFetchingError}</Form.Text>}

                                {isWebpageUpdatingError &&
                                    <Form.Text
                                        className="text-danger">{isWebpageUpdatingError}</Form.Text>}
                                {isWebpageUpdating ?
                                    <div className="text-center py-5">
                                        <Loader/>
                                    </div>
                                    :
                                    <Form validated={true} onSubmit={handleSubmit}>

                                        <Form.Group as={Col} md="12" className="mb-3">
                                            <Form.Label>Page Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter journal name"
                                                value={pageTitle}
                                                onChange={e => setPageTitle(e.target.value)}
                                                required
                                            />

                                        </Form.Group>
                                        <Form.Group as={Col} md="12" className="mb-3">
                                            <Form.Label>Banner</Form.Label>
                                            <Form.Control
                                                type="file"
                                                required={pageId ? false : true}
                                                accept="image/*"
                                                onChange={e => handleImage(e.target.files[0])}
                                            />
                                            {webpageData?.banner &&
                                                <a href={webpageData?.banner} target="_blank">Uploaded Banner</a>}

                                        </Form.Group>
                                        <Form.Group as={Col} md="12" className="mb-3">
                                            <Form.Label>Banner Content</Form.Label>
                                            <CKEditor
                                                editor={ ClassicEditor }
                                                data={bannerContent}
                                                onChange={ ( event, editor ) => {
                                                    setBannerContent(editor.getData());
                                                } }
                                            />


                                        </Form.Group>
                                        <Form.Group as={Col} md="12" className="mb-3">
                                            <Form.Label>Page Content</Form.Label>
                                            <CKEditor
                                                editor={ ClassicEditor }
                                                data={pageContent}
                                                onChange={ ( event, editor ) => {
                                                    setPageContent(editor.getData());
                                                } }

                                                // onChange={(e) => setBannerContent(e)}
                                            />

                                        </Form.Group>

                                        <div className="mt-3">
                                            {isWebpageUpdating ?

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
        getPageDetail: (data) => dispatch(webpageGetDetail(data)),
        updatePageDetail: (data) => dispatch(webpageUpdateDetail(data)),
    };
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(MainPageEdit);