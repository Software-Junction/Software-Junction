import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Efficient Data Processing",
    "content": "The platform boasts fast implementation, claiming to be <span style=\"color:#FC5185 ;\"><strong>30</strong></span> times faster and <span style=\"color:#FC5185 ;\"><strong>50%</strong></span> cheaper than alternatives. It can handle large volumes of data, having extracted trillions of rows."
  },
  {
    "title": "Analysis-Ready Tables",
    "content": "Panoply automatically stores raw data in analysis-ready tables, reducing the time and effort required for data preparation."
  },
  {
    "title": "Data Visualization",
    "content": "With Panoply's workbench, users can explore and visualize their data, gaining insights to drive informed decision-making."
  },
  {
    "title": "Integration with BI Tools",
    "content": "The platform seamlessly integrates with various Business Intelligence (BI) tools, allowing users to update dashboards and perform analytics using their preferred tools."
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
            <h3 className="mb-3">USP of Panoply</h3>
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
