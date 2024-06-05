import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../icrm/ic.module.scss";

const uspData = [
  {
    "title": "Seamless Integration",
    "content": "iCRM seamlessly integrates within Gmail and Outlook for a hassle-free CRM experience."
  },
  {
    "title": "Critical Information Management",
    "content": "Empowers users to build and maintain critical information, enhancing deal closure and customer relationship management."
  },
  {
    "title": "Free Trial",
    "content": "Start your free trial today to experience the benefits of iCRM firsthand."
  },
  {
    "title": "Exclusive Email Platform Usage",
    "content": "Manage leads and nurture customer relationships directly within your favorite email platforms."
  }
];
{/* <span style=\"color:#FC5185 ;\"><strong> */}
const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Usp = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of iCRM</h3>
          </Col>
          {uspData.map((item, index) => (
            <Col lg={4} className="mb-4" key={index}>
              <div
                className={`${styles["box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
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

export default Usp;
