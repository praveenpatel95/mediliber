import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import './style.scss'
import JournalMetrics from "../../../../../components/JournalMetrics";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChartLine} from "@fortawesome/fontawesome-free-solid";

function Banner({journalDetail}){
   return (
     <div>
         <section style={{backgroundImage: `url(${journalDetail?.banner})`}}
                  className="journal-banner">
             <Container className="banner_content">
                 <Row>
                     <Col sm={8} className="pt-5 content">
                         <div dangerouslySetInnerHTML={{ __html: journalDetail?.banner_content }}></div>
                     </Col>

                 </Row>
             </Container>
         </section>
        <Container className="py-0 my-0">
            <div className="row">
                <Col sm={{span: 4, offset: 8}}>
                    <Card className="card_banner_matrix" style={{    background: "rgb(255 255 255 / 80%)"}}>
                        <Card.Body>
                            <h5><FontAwesomeIcon icon={faChartLine} /> &nbsp;Journal metrics</h5>
                            <JournalMetrics journal={journalDetail}/>
                        </Card.Body>
                        {journalDetail?.apc_visible === "Yes" &&

                            <Card.Footer className="bg_theme_color text-white">
                            <span>APC</span>
                            <span className="float-end">€{journalDetail?.apc}</span>
                        </Card.Footer>
                        }
                    </Card>
                </Col>
            </div>
        </Container>
     </div>
   )
}
export default Banner;