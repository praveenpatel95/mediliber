import {Col, Form, Row} from "react-bootstrap";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import DatePicker from "react-datepicker";


function ArticleDetail({values, setValues, errors, touched, articleTypeList}) {
    const articleModes = [
        'Press',
        'Current',
        'Archive',
    ];


    return (
        <>
            <Form.Group as={Col} md="12" className="mb-3">
                <Form.Label>Article Title <span
                    className="text-danger">*</span></Form.Label>
                <Form.Control
                    type="text"
                    required
                    placeholder="Enter article title"
                    value={values?.title}
                    onChange={e => setValues({...values, title: e.target.value})}
                />

                {touched?.title && errors?.title ? (
                    <Form.Text
                        className="text-danger">{errors?.title}</Form.Text>
                ) : (
                    ''
                )}
            </Form.Group>
            <Form.Group as={Col} md="12" className="mb-3">
                <Form.Label>Abstract <span
                    className="text-danger">*</span></Form.Label>
                <CKEditor
                    data={values?.abstract}
                    editor={ClassicEditor}
                    onChange={(event, editor) => {
                        setValues({...values, abstract: editor.getData()})
                    }}

                />
                {touched?.abstract && errors?.abstract ? (
                    <Form.Text
                        className="text-danger">{errors?.abstract}</Form.Text>
                ) : (
                    ''
                )}
            </Form.Group>
            <Form.Group as={Col} md="12" className="mb-3">
                <Form.Label>Citation <span
                    className="text-danger">*</span></Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter citation"
                    value={values?.citation}
                    required
                    onChange={e => setValues({
                        ...values,
                        citation: e.target.value
                    })}
                    as="textarea"
                />
                {touched?.citation && errors?.citation ? (
                    <Form.Text
                        className="text-danger">{errors?.citation}</Form.Text>
                ) : (
                    ''
                )}
            </Form.Group>

            <Row>
                <Form.Group as={Col} md="6" className="mb-3">
                    <Form.Label>Article Type <span className="text-danger">*</span></Form.Label>
                    <Form.Select
                        value={values?.article_type}
                        onChange={e => setValues({
                            ...values,
                            article_type: e.target.value
                        })}
                        required
                    >
                        {articleTypeList?.map((articleType) => (
                            <option>{articleType.article_type}</option>
                        ))}


                    </Form.Select>

                    {touched?.article_type && errors?.article_type ? (
                        <Form.Text
                            className="text-danger">{errors?.article_type}</Form.Text>
                    ) : (
                        ''
                    )}
                </Form.Group>
                <Form.Group as={Col} md="6" className="mb-3">
                    <Form.Label>Article Mode <span className="text-danger">*</span></Form.Label>
                    <Form.Select
                        value={values?.article_mode}
                        onChange={e => setValues({
                            ...values,
                            article_mode: e.target.value
                        })}
                        required
                    >
                        <option value="">--Select--</option>
                        {articleModes?.map((articleMode) => (
                            <option>{articleMode}</option>
                        ))}

                    </Form.Select>

                    {touched?.article_mode && errors?.article_mode ? (
                        <Form.Text
                            className="text-danger">{errors?.article_mode}</Form.Text>
                    ) : (
                        ''
                    )}
                </Form.Group>

            </Row>
            <Row>
                <Form.Group as={Col} md="6" className="mb-3">
                    <Form.Label>Volume <span
                        className="text-danger">*</span></Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter volume no"
                        value={values?.volume}
                        required
                        onChange={e => setValues({
                            ...values,
                            volume: e.target.value
                        })}
                    />
                    {touched?.volume && errors?.volume ? (
                        <Form.Text
                            className="text-danger">{errors?.volume}</Form.Text>
                    ) : (
                        ''
                    )}
                </Form.Group>
                <Form.Group as={Col} md="6" className="mb-3">
                    <Form.Label>Issue <span
                        className="text-danger">*</span></Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter issue"
                        value={values?.issue}
                        required onChange={e => setValues({
                        ...values,
                        issue: e.target.value
                    })}
                    />
                    {touched?.issue && errors?.issue ? (
                        <Form.Text
                            className="text-danger">{errors?.issue}</Form.Text>
                    ) : (
                        ''
                    )}
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} md="6" className="mb-3">
                    <Form.Label>Pages</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ex. 101-109"
                        value={values?.pages}
                        onChange={e => setValues({
                            ...values,
                            pages: e.target.value
                        })}
                    />
                </Form.Group>
                <Form.Group as={Col} md="6" className="mb-3">
                    <Form.Label>Article Month</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ex Jan-Feb"
                        required={true}
                        value={values?.article_month}
                        onChange={e => setValues({
                            ...values,
                            article_month: e.target.value
                        })}
                    />
                    {touched?.article_month && errors?.article_month ? (
                        <Form.Text
                            className="text-danger">{errors?.article_month}</Form.Text>
                    ) : (
                        ''
                    )}
                </Form.Group>
                <Form.Group as={Col} md="6" className="mb-3">
                    <Form.Label>PDF {values?.pdf_file_path && (<small><a className="text-info" href={values?.pdf_file_path} target="_blank">Uploaded file</a></small>)}</Form.Label>
                    <Form.Control
                        type="file"
                        onChange={e => setValues({
                            ...values,
                            pdf: e.target.files[0]
                        })}
                        required={values?.pdf_file_path ? false : true}
                        accept="application/pdf"
                    />
                    {touched?.pdf && errors?.pdf ? (
                        <Form.Text className="text-danger">{errors?.pdf}</Form.Text>
                    ) : (
                        ''
                    )}
                </Form.Group>

                <Form.Group as={Col} md="6" className="mb-3">
                    <Form.Label>XML File {values?.xml_file_path && (<small><a className="text-info" href={values?.xml_file_path} target="_blank">Uploaded file</a></small>)}</Form.Label>
                    <Form.Control
                        type="file"
                        onChange={e => setValues({
                            ...values,
                            xml_path: e.target.files[0]
                        })}
                        accept="xml"
                    />

                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} md="4" className="mb-3">
                    <Form.Label>Received Date</Form.Label>
                    <DatePicker
                        className="form-control"
                        selected={values?.received_date}
                        dateFormat="dd-MMM-yyyy"
                        required
                        onChange={(date) => setValues({
                            ...values,
                            received_date: date
                        })}
                    />
                    {touched?.received_date && errors?.received_date ? (
                        <Form.Text
                            className="text-danger">{errors?.received_date}</Form.Text>
                    ) : (
                        ''
                    )}
                </Form.Group>
                <Form.Group as={Col} md="4" className="mb-3">
                    <Form.Label>Accepted Date</Form.Label>
                    <DatePicker
                        className="form-control"
                        selected={values?.accepted_date}
                        dateFormat="dd-MMM-yyyy"
                        required
                        onChange={(date) => setValues({
                            ...values,
                            accepted_date: date
                        })}
                    />
                    {touched?.accepted_date && errors?.accepted_date ? (
                        <Form.Text
                            className="text-danger">{errors?.accepted_date}</Form.Text>
                    ) : (
                        ''
                    )}
                </Form.Group>
                <Form.Group as={Col} md="4" className="mb-3">
                    <Form.Label>Published Date</Form.Label>
                    <DatePicker
                        className="form-control"
                        selected={values?.published_date}
                        dateFormat="dd-MMM-yyyy"
                        required
                        onChange={(date) => setValues({
                            ...values,
                            published_date: date
                        })}
                    />
                    {touched?.published_date && errors?.published_date ? (
                        <Form.Text
                            className="text-danger">{errors?.published_date}</Form.Text>
                    ) : (
                        ''
                    )}
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} md="6" className="mb-3">
                    <Form.Label>DOI</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter doi no"
                        value={values?.doi}
                        required
                        onChange={e => setValues({
                            ...values,
                            doi: e.target.value
                        })}
                    />
                    {touched?.doi && errors?.doi ? (
                        <Form.Text
                            className="text-danger">{errors?.doi}</Form.Text>
                    ) : (
                        ''
                    )}
                </Form.Group>
                <Form.Group as={Col} md="6" className="mb-3">
                    <Form.Label>DOI Url</Form.Label>
                    <Form.Control
                        type="url"
                        placeholder="Enter issue"
                        value={values?.doi_url}
                        required onChange={e => setValues({
                        ...values,
                        doi_url: e.target.value
                    })}
                    />
                    {touched?.doi_url && errors?.doi_url ? (
                        <Form.Text
                            className="text-danger">{errors?.doi_url}</Form.Text>
                    ) : (
                        ''
                    )}
                </Form.Group>
            </Row>
            <Form.Group as={Col} md="12" className="mb-3">
                <Form.Label>Keywords <span
                    className="text-danger">*</span></Form.Label>
                <Form.Control
                    type="text"
                    required
                    placeholder="Enter keyword"
                    value={values?.keyword}
                    onChange={e => setValues({...values, keyword: e.target.value})}
                />
                {touched?.keyword && errors?.keyword ? (
                    <Form.Text
                        className="text-danger">{errors?.keyword}</Form.Text>
                ) : (
                    ''
                )}
            </Form.Group>
            <Form.Group as={Col} md="12" className="mb-3">
                <Form.Label>References <span
                    className="text-danger">*</span></Form.Label>
                <CKEditor
                    data={values?.references}
                    editor={ClassicEditor}
                    onChange={(event, editor) => {
                        setValues({...values, references: editor.getData()})
                    }}
                />
                {touched?.reference && errors?.reference ? (
                    <Form.Text
                        className="text-danger">{errors?.reference}</Form.Text>
                ) : (
                    ''
                )}
            </Form.Group>
        </>
    )
}

export default ArticleDetail;