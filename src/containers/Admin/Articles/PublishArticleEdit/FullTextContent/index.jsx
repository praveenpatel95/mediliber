import {Button, Col, Form, Row} from "react-bootstrap";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/fontawesome-free-solid";
import ArticleUpload from "../../ArticleUpload";

function FullTextContent({setFormValues, formValues, uploadArticleFile, articleId}) {
    const addNewSection = () => {
        setFormValues([...formValues, {
            id: 'new', title: '', content: ''
        }
        ]);
    }

    const handleContentChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i]['content'] = e;
        setFormValues(newFormValues);
    }

    const handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }

    return (
        <>
            <ArticleUpload articleId={articleId}/>
            <hr />
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
                            editor={ClassicEditor}

                            onReady={editor => {
                            }}
                            onChange={(event, editor) => {
                                handleContentChange(index, editor.getData());
                            }}
                            config={{
                                simpleUpload: {
                                    uploadUrl: 'http://127.0.0.1:8000/images'
                                },
                            }}


                        />
                    </Form.Group>
                </div>
            )}
            <Form.Group as={Col} md="12" className="mb-3">
                <Button variant="outline-info" onClick={addNewSection}><FontAwesomeIcon icon={faPlus}/> Add New
                    Section</Button>
            </Form.Group>
        </>
    )
}
export default FullTextContent;
