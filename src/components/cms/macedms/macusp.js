import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const uspData = [
  {
    "title": "Seamless Integration of Educational Functionalities",
    "content": "Mac EDMS stands out by seamlessly integrating educational functionalities through the latest technology. Offers a customized School Management System catering to <span style=\"color:#f95738 ;\"><strong>150+ different School management products at once.</strong></span>"
  },
  {
    "title": "Intelligent Automation for Efficiency",
    "content": "Unique intelligence feature aids in creating informed policies, automating repetitive tasks, and enhancing overall efficiency.<span style=\"color:#f95738 ;\"><strong> 98% reduction in paper costs</strong></span> through a paperless administration system."
  },
  {
    "title": "Comprehensive Suite of Products",
    "content": "Provides one of the most comprehensive suites for managing educational institutes effectively.<span style=\"color:#f95738 ;\"><strong> Covers 20+ modules,</strong></span> including SMS communication, online finance, online payment, student evaluation, vehicle tracking, mobile applications, online classes, notice board, library management, and WhatsApp integration."
  },
  {
    "title": "Data-Driven Decision Making",
    "content": "Generates reports for evidence-based decisions, including monetary and improvement analyses. Aims at efficient working of staff and students by providing accurate reports for various aspects such as attendance, financials, and evaluations."
  },
  {
    "title": "Proven Track Record and Trust",
    "content": "<span style=\"color:#f95738 ;\"><strong>Trusted by over 1000 clients</strong></span> in India and the UAE. Successfully deployed in <span style=\"color:#f95738 ;\"><strong>nearly 150+ school boards, with 100% customer satisfaction.</strong></span>"
  }
];
const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Macusp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of MAC EDMS</h3>
          </Col>
          {uspData.map((item, index) => (
            <Col lg={4} className="mb-4" key={index}>
              <div
                className={`${styles["mac-box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
              >
                <h5>{item.title}</h5>
                <br />
                {/* <p dangerouslySetInnerHTML={{ __html: item.content }} /> */}
                {renderHTML(item.content)}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Macusp;
