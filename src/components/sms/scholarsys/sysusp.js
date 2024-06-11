import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Innovative Technology Leadership",
    "content": "With a dedicated team of <span style=\"color:#f95738 ;\"><strong>50+ professionals,</strong></span> ScholarSYS stands out for its commitment to innovation and technology. Regular updates and a forward-thinking approach place it at the forefront of advancements in school management software."
  },
  {
    "title": "Paperless Automation and Modern Solutions",
    "content": "ScholarSYS excels in automating processes like admission management, academics, exams, and finance, contributing to a paperless environment. This is especially crucial in the current context, where digital solutions have become essential post-Covid-19."
  },
  {
    "title": "Data Management and Analysis",
    "content": "The integrated data management software tackles the challenge of manual data handling. ScholarSYS enables schools to efficiently manage records, files, classes, subjects, and teachers, facilitating easy analysis for informed decision-making."
  },
  {
    "title": "Finance Management with Tally Integration",
    "content": "ScholarSYS stands out in financial management with features like fee collection through a payment gateway, income-expense management, and seamless integration with Tally for efficient ledger syncing and financial reporting."
  },
  
];
{/* <span style=\"color:#f95738 ;\"><strong> */}
const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Sysusp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of ScholarSYS</h3>
          </Col>
          {uspData.map((item, index) => (
            <Col lg={4} className="mb-4" key={index}>
              <div
                className={`${styles["sys-box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
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

export default Sysusp;
