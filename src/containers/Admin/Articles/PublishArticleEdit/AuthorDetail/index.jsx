import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faTrash} from "@fortawesome/fontawesome-free-solid";
import {Button, Col, Form, Row} from "react-bootstrap";
import {connect} from "react-redux";
import {compose} from "redux";
import {articleAuthorAdminDelete} from "../../../../../stores/Admin/ArticleAuhtor/actions";


function AuthorDetail({
                          CountryList,
                          affiliations,
                          setAffiliations,
                          authors,
                          setAuthors,
                          deleteArticleAuthor

                      }) {


    const addNewAuthor = () => {
        setAuthors([...authors, {
            id: 'new',
            email: '',
            first_name: '',
            last_name: '',
            country: '',
            affiliation_no: '',
            orcid: '',
            is_main: false
        }]);
    }

    const addNewAffiliation = () => {
        setAffiliations([...affiliations, {
            id: 'new',
            affiliation: '',
            country: ''
        }]);
    }

    const handleAuthorChange = (i, e) => {
        let newAuthorValues = [...authors];
        let value = e.target.value;
        if (e.target.name === "is_main") {
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

    const removeAffiliation = (index) => {
        let newAffiliations = [...affiliations];
        newAffiliations.splice(index, 1);
        setAffiliations(newAffiliations);
    }

    const removeAuthor = (index, id) => {
        let newAuthors = [...authors];
        newAuthors.splice(index, 1);
        setAuthors(newAuthors);
        if(parseInt(id)){
            deleteArticleAuthor(id)
        }
    }

    return (
        <>
            <h5 className="mt-3">Affiliation:
                <small onClick={addNewAffiliation}
                       className="text-success ps-3 cursor_pointer"><FontAwesomeIcon
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
                    <Form.Group as={Col} md="4" className="mb-3">
                        <Form.Select
                            value={affiliation?.country}
                            name="country"
                            onChange={e => handleAffiliationChange(index, e)}
                            required
                        >
                            <option value="">--Select--</option>
                            {CountryList?.map((country, key) => (
                                <option key={key}
                                        selected={country.country_name === affiliation?.country}>{country?.country_name}</option>
                            ))}

                        </Form.Select>
                    </Form.Group>
                    {index > 0 &&
                        <Form.Group as={Col} md="1" className="mb-3">
                            <Button variant='danger' onClick={() => removeAffiliation(index)}><FontAwesomeIcon
                                icon={faTrash}/></Button>
                        </Form.Group>
                    }
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
                                name="is_main"
                                checked={author?.is_main ? true : false}
                                onChange={e => handleAuthorChange(index, e)}
                            />
                        </Col>
                        <Form.Group as={Col} md="3" className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                required={author?.is_main ? true : false}
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
                        <Form.Group as={Col} md="2" className="mb-3">
                            <Form.Label>Aff. No</Form.Label>
                            <Form.Control
                                type="text"
                                value={author?.affiliation_no}
                                name="affiliation_no"
                                required={affiliations?.length > 1 ? true : false}
                                onChange={e => handleAuthorChange(index, e)}
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="1" >
                        </Form.Group>
                        <Form.Group as={Col} md="3" className="mb-3">
                            <Form.Label>Orcid</Form.Label>
                            <Form.Control
                                type="text"
                                value={author?.orcid}
                                name="orcid"
                                onChange={e => handleAuthorChange(index, e)}
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="1" className="mb-3">
                            <Button variant='danger' className="mt-4" onClick={() => removeAuthor(index, author?.id)}><FontAwesomeIcon
                                icon={faTrash}/></Button>
                        </Form.Group>
                        <hr/>
                    </Row>

                )
            })}
        </>
    )
}
function mapDispatchToProps(dispatch) {
    return {
        deleteArticleAuthor: (articleAuthorId) => dispatch(articleAuthorAdminDelete(articleAuthorId)),
    }
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(AuthorDetail);
