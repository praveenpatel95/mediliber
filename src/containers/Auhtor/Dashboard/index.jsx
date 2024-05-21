import {Helmet, HelmetProvider} from "react-helmet-async";
import Container from "react-bootstrap/Container";
import {Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlus} from "@fortawesome/fontawesome-free-solid";
import {connect, useSelector} from "react-redux";
import {compose} from "redux";
import {articleList} from "../../../stores/Article/actions";
import {useEffect} from "react";
import Loader from "../../../components/Loader";
import moment from "moment/moment";

function Dashboard({getArticleList}) {
    useEffect(() => {
        getArticleList();
    }, []);

    const
        {
            isArticleListFetching, isArticleListFetchingError, Articles
        }
            = useSelector(state => state?.ArticleReducer);
    return (
        <HelmetProvider>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <main className="py-4 bg-grey-lime">
                <Container className="d-flex justify-content-between">
                    <div>
                        <h4>Welcome to Author panel</h4>
                    </div>
                    <Button variant="primary" as={Link} to="/author/article/create"><FontAwesomeIcon
                        icon={faPlus}/> Submit Article</Button>
                </Container>
                <section className="my-4">
                    <Container>
                        {isArticleListFetching ?
                            <div className="my-5 text-center">
                                <Loader/>
                            </div>
                            :
                            <div>
                                {Articles?.length > 0 ?
                                    <Table striped bordered hover size="sm">
                                        <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Title</th>
                                            <th>Article Type</th>
                                            <th>Journal</th>
                                            <th>Submitted</th>
                                            <th>Status</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {Articles?.map((article, index) => (
                                            <tr key={article?.id}>
                                                <td>{++index}</td>
                                                <td>{article?.title}</td>
                                                <td>{article?.article_type}</td>
                                                <td>{article?.journal?.name}</td>
                                                <td>{moment(article?.created_at).format('DD-MMM-YYYY')}</td>
                                                <td>{article?.status}</td>
                                                {/*<td>*/}
                                                {/*    <Button as={Link}*/}
                                                {/*            to={`/super-admin/indexing/edit/${indexing?.id}`}*/}
                                                {/*            variant="info" size="sm"><FontAwesomeIcon*/}
                                                {/*        icon={faPencilAlt}/></Button>*/}
                                                {/*    &nbsp;&nbsp;*/}
                                                {/*    <Button variant="danger" onClick={() => handleDelete(indexing?.id)}*/}
                                                {/*            size="sm"><FontAwesomeIcon icon={faTrash}/></Button>*/}
                                                {/*</td>*/}
                                            </tr>
                                        ))}

                                        </tbody>
                                    </Table>

                                    :
                                    <p>No data found</p>
                                }
                            </div>
                        }

                        {isArticleListFetchingError && <p>{isArticleListFetchingError}</p>}
                    </Container>
                </section>

            </main>
        </HelmetProvider>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        getArticleList: (data) => dispatch(articleList(data)),
    }
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(Dashboard);
