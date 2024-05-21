import {Button, Col, Form, Row, Spinner} from "react-bootstrap";
import {
    articleFileUpload,
    articleFileUploadDelete,
    getArticleFileUpload
} from "../../../../stores/Admin/Article/actions";
import {connect, useSelector} from "react-redux";
import {compose} from "redux";
import {useEffect, useRef, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/fontawesome-free-solid";

function ArticleUpload({
                           uploadArticleFile,
                           articleId,
                           deleteUploadedFile,
                           getUploadedFile
                       }) {
    const {articleFiles, isArticleFileUploading} = useSelector(state => state?.JournalArticleReducer);

    const [values, setValues] = useState(
        {
            description: '',
            article_file: '',
            file_type: '',
        }
    );
    const handleFileUpload = () => {
        const formData = new FormData();
        formData.append('title', values.description)
        formData.append('article_file', values.article_file)
        formData.append('article_id', articleId)
        formData.append('type', values.file_type)
        uploadArticleFile(formData)
    }

    useEffect(() => {
        getUploadedFile(articleId)
    }, [articleId]);

    const removeFile = (id) => {
        if (parseInt(id)) {
            deleteUploadedFile(id)
        }
    }


    return (
        <div>
            <h5>Upload Files</h5>
            <Row>
                <Col sm={12} className="mb-3">
                    <Form.Control
                        value={values?.description}
                        placeholder="Enter description"
                        onChange={e => setValues({...values, description: e.target.value})}
                    />
                </Col>
                <Col sm={6}>
                    <Form.Control
                        type="file"
                        onChange={e => setValues({...values, article_file: e.target.files[0]})}
                    />
                </Col>
                <Col sm={4}>
                    <Form.Select
                        onChange={e => setValues({...values, file_type: e.target.value})}
                        value={values?.file_type}
                    >
                        <option value="">--File Type--</option>
                        <option>Figure</option>
                        <option>Table</option>
                    </Form.Select>
                </Col>
                <Col sm={2}>
                    {isArticleFileUploading ?
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
                            <Button variant="primary" type="submit" size="lg"
                                    onClick={handleFileUpload}
                            >
                                Submit
                            </Button>
                        </div>

                    }
                </Col>
            </Row>
            <br/>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>S.No</th>
                    <th>File Path Link</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th>View File</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {articleFiles?.map((articleFile, index) => (
                    <tr>
                        <td>{index + 1}</td>
                        <td>file/{articleFile.id}</td>
                        <td>{articleFile.type}</td>
                        <td>{articleFile.title}</td>
                        <td><a href={articleFile.file_path} className="theme_text_color" target='_blank'>View</a></td>
                        <td><Button variant='danger' size="sm"
                                    onClick={() => removeFile(articleFile?.id)}><FontAwesomeIcon
                            icon={faTrash}/></Button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        uploadArticleFile: (data) => dispatch(articleFileUpload(data)),
        deleteUploadedFile: (id) => dispatch(articleFileUploadDelete(id)),
        getUploadedFile: (articleId) => dispatch(getArticleFileUpload(articleId)),
    }
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(ArticleUpload);