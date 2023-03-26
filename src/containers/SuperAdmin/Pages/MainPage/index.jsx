import {Helmet, HelmetProvider} from "react-helmet-async";
import Container from "react-bootstrap/Container";
import {Breadcrumb, Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencilAlt} from "@fortawesome/fontawesome-free-solid";
import {connect, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {compose} from "redux";
import {webpageList} from "../../../../stores/SuperAdmin/WebPage/actions";
import moment from "moment/moment";
import Loader from "../../../../components/Loader";

function MainPage({getPages}) {
    const {
        isWebpageListFetching,
        isWebpageListFetchingError,
        webpageList
    } = useSelector(state => state?.WebpageReducer);

    useEffect(() => {
        getPages();
    }, []);


    return (
        <HelmetProvider>
            <Helmet>
                <title>Main Pages</title>
            </Helmet>
            <main className="py-4">
                <Container className="d-flex justify-content-between">
                    <div>
                        <Breadcrumb>
                            <Breadcrumb.Item linkAs={Link} linkProps={{to: `/super-admin/dashboard`}}>Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>Main Pages</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </Container>
                <section className="my-4">
                    <Container>
                        {isWebpageListFetching ?
                            <div className="my-5 text-center">
                                <Loader/>
                            </div>
                            :
                            <div>
                                {webpageList?.length > 0 ?
                                    <Table striped bordered hover size="sm">
                                        <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Banner</th>
                                            <th>Page</th>
                                            <th>Page Title</th>
                                            <th>Updated at</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {webpageList?.map((webpage, index) => (
                                            <tr key={webpage?.id}>
                                                <td>{++index}</td>
                                                <td><img src={webpage?.banner} width={100}/></td>
                                                <td>{webpage?.page_slug}</td>
                                                <td>{webpage?.page_title}</td>
                                                <td>{moment(webpage?.updated_at).format("DD-MMM-YYYY")}</td>
                                                <td>
                                                    <Button as={Link}
                                                            to={`/super-admin/main-page/edit/${webpage?.id}`}
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

                        {isWebpageListFetchingError && <p>{isWebpageListFetchingError}</p>}
                    </Container>
                </section>
            </main>
        </HelmetProvider>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        getPages: (data) => dispatch(webpageList(data)),
    }
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(MainPage);
