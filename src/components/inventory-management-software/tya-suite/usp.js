import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Automation of Inventory Flow",
    "content": "The platform automates the entire inventory flow, starting from the requisition stage to stock issues. This automation not only enhances efficiency but also contributes to reducing working capital by streamlining the processes involved in inventory management."
  },
  {
    "title": "Working Capital Reduction",
    "content": "The software explicitly mentions its impact on working capital reduction. This is a crucial benefit for businesses as it implies better financial management and optimization of resources, ultimately contributing to increased profitability."
  },
  {
    "title": "Integration with Procurement and Sales Order Management",
    "content": "Although not explicitly detailed in the provided content, the inclusion of Procurement Software and Sales Order Management in the product lineup suggests a holistic approach to business operations. The ability to integrate various aspects such as procurement, sales, and inventory management can lead to a more cohesive and efficient overall business process."
  }
];
{
  /* <span style=\"color:#FC5185 ;\"><strong> */
}
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
            <h3 className="mb-3">USP of TYASuite's Inventory Management Software</h3>
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
