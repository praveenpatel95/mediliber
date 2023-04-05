import {connect, useSelector} from "react-redux";
import {compose} from "redux";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {useEffect} from "react";
import {Breadcrumb, Button, Container, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencilAlt} from "@fortawesome/fontawesome-free-solid";
import moment from "moment/moment";
import {getOtherPages} from "../../../../stores/SuperAdmin/OtherPage/actions";
import Loader from "../../../../components/Loader";

function OtherPages({getPages}) {

    const {
        isOtherPageFetching,
        isOtherPageFetchingError,
        otherPages,
    } =
        useSelector(state => state?.OtherPageReducer);
    useEffect(() => {
        getPages();
    }, []);

    return (
        <HelmetProvider>
            <Helmet>
                <title>Other Pages</title>
            </Helmet>
            <main className="py-4">
                <Container className="d-flex justify-content-between">
                    <div>
                        <Breadcrumb>
                            <Breadcrumb.Item linkAs={Link}
                                             linkProps={{to: `/super-admin/dashboard`}}>Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>Other Pages</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </Container>
                <section className="my-4">
                    <Container>
                        {isOtherPageFetching ?
                            <div className="my-5 text-center">
                                <Loader/>
                            </div>
                            :
                            <div>
                                {otherPages?.length > 0 ?
                                    <Table striped bordered hover size="sm">
                                        <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Page Name</th>
                                            <th>Last Updated</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {otherPages?.map((otherPage, index) => (
                                            <tr key={otherPage?.id}>
                                                <td>{++index}</td>
                                                <td>{otherPage?.page_name}</td>
                                                <td>{moment(otherPage?.updated_at).format('DD-MMM-YYYY')}</td>
                                                <td>
                                                    <Button as={Link}
                                                            to={`/super-admin/other-page/edit/${otherPage?.id}`}
                                                            variant="info" size="sm"><FontAwesomeIcon
                                                        icon={faPencilAlt}/></Button>
                                                </td>
                                            </tr>
                                        ))}

                                        </tbody>
                                    </Table>

                                    :
                                    <p>No data found</p>
                                }
                            </div>
                        }

                        {isOtherPageFetchingError && <p>{isOtherPageFetchingError}</p>}
                    </Container>
                </section>
            </main>
        </HelmetProvider>

    )
}

function mapDispatchToProps(dispatch) {
    return {
        getPages: (data) => dispatch(getOtherPages(data)),
    }
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(OtherPages);
