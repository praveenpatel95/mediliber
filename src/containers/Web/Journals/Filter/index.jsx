import React, {useEffect, useState} from "react";
import {Card, Form} from "react-bootstrap";
import '../../../../styles/checkbox.scss'
import {connect, useSelector} from "react-redux";
import {compose} from "redux";
import Loader from "../../../../components/Loader";
import {journalList} from "../../../../stores/Common/Journal/actions";
import {webJournalCategoryList} from "../../../../stores/Common/JournalCategory/actions";

function Filter({getJournalCategory, getJournals}) {
    useEffect(() => {
        getJournalCategory();
    }, []);
    const {
        isJournalCategoryListFetching,
        isJournalCategoryListFetchingError,
        journalCategories
    } = useSelector(state => state?.WebJournalCategoryReducer);

    const [selectedCategory, setSelectedCategory] =  useState([]);
    const handleCategory = (e) => {
        const target = e.target;
        const value = target.value;
        if(target.checked){
            setSelectedCategory([...selectedCategory, value]);
        }else{
            setSelectedCategory(
                selectedCategory.filter((category) => category !== value),
            );
        }
    }

    useEffect(() => {
        getJournals({byCategory:selectedCategory})
    }, [selectedCategory]);


    return (
        <Card className="filter-card sticky-top" style={{'top': '120px'}}>
            <Card.Header className="fs-5 fw-semibold">Filter by discipline</Card.Header>

            <Card.Body>
                {isJournalCategoryListFetching ?
                    <div className="my-5 text-center">
                        <Loader/>
                    </div>
                    :
                    journalCategories?.map((category) => (
                        <Form.Group className="mb-3" controlId={category?.id}>
                            <Form.Check type="checkbox"
                                        label={category?.category_name}
                                        className="custom-checkbox"
                                        value={category?.id}
                                        onClick={e => handleCategory(e)}

                            />
                        </Form.Group>
                    ))
                }
            </Card.Body>

        </Card>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        getJournalCategory: () => dispatch(webJournalCategoryList()),
        getJournals: (data) => dispatch(journalList(data)),
    }
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(Filter);
