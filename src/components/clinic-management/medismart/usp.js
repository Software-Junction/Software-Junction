import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Unparalleled user-friendly interface",
    "content": "Medismarts EMR boasts an intuitive and user-friendly interface, ensuring that healthcare professionals can easily navigate and utilize its features."
  },
  {
    "title": "Continuous innovation and adaptability",
    "content": "The system is designed to evolve with the ever-changing healthcare landscape. Continuous updates and innovations ensure that users benefit from the latest technologies and industry best practices."
  },
  {
    "title": "Seamless integration with accounting software",
    "content": "The seamless integration with accounting software enhances the overall efficiency of financial management. This feature reduces the risk of errors associated with manual data entry and promotes accurate financial reporting."
  },
  {
    "title": "Dedicated customer support for uninterrupted service",
    "content": "Medismarts EMR provides dedicated customer support, ensuring that healthcare organizations receive prompt assistance and uninterrupted service. This commitment to customer satisfaction enhances the overall user experience."
  }
];
{/* <span style=\"color:#FC5185 ;\"><strong> */}
const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Usp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of Medismart</h3>
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
