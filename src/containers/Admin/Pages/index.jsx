import {connect, useSelector} from "react-redux";
import {compose} from "redux";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {useEffect} from "react";
import Loader from "../../../components/Loader";
import {Breadcrumb, Button, Container, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencilAlt} from "@fortawesome/fontawesome-free-solid";
import {getAdminJournalPages} from "../../../stores/Admin/JournalPage/actions";
import moment from "moment/moment";

function JournalPages({getJournalPages}) {

    const {isAdminJournalPageFetching,
        isAdminJournalPageFetchingError,
        journalPages,

    } =
        useSelector(state => state?.AdminJournalPageReducer);

    useEffect(() => {
        getJournalPages();
    }, []);

    return (
        <HelmetProvider>
            <Helmet>
                <title>Journal Pages</title>
            </Helmet>
            <main className="py-4">
                <Container className="d-flex justify-content-between">
                    <div>
                        <Breadcrumb>
                            <Breadcrumb.Item linkAs={Link}
                                             linkProps={{to: `/admin/dashboard`}}>Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>Journal Pages</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </Container>
                <section className="my-4">
                    <Container>
                        {isAdminJournalPageFetching ?
                            <div className="my-5 text-center">
                                <Loader/>
                            </div>
                            :
                            <div>
                                {journalPages?.length > 0 ?
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
                                        {journalPages?.map((journalPage, index) => (
                                            <tr key={journalPage?.id}>
                                                <td>{++index}</td>
                                                <td>{journalPage?.page?.page_name}</td>
                                                <td>{moment(journalPage?.updated_at).format('DD-MMM-YYYY')}</td>
                                                <td>
                                                    <Button as={Link}
                                                            to={`/admin/journal-page/edit/${journalPage?.id}`}
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

                        {isAdminJournalPageFetchingError && <p>{isAdminJournalPageFetchingError}</p>}
                    </Container>
                </section>
            </main>
        </HelmetProvider>

    )
}

function mapDispatchToProps(dispatch) {
    return {
        getJournalPages: (data) => dispatch(getAdminJournalPages(data)),
    }
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(JournalPages);
