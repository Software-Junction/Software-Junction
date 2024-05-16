import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Cost-Effective Solution for Micro and Small Enterprises",
    "content": "eLite ERP is positioned as a smart windows-based ERP solution tailored for Micro and Small enterprises. It emphasizes being a cost-effective option, enabling these businesses to transition from manual processes to a fully integrated business solution without incurring excessive expenses."
  },
  {
    "title": "Global Business Support",
    "content": "Features like multi-location and multi-currency support highlight eLite ERP's capability to help businesses conduct operations globally and across different countries."
  },
  {
    "title": "360° Development, Control, and Operational Efficiency",
    "content": "The ERP solution aims to provide a comprehensive solution for businesses by offering <span style=\"color:#FC5185 ;\"><strong>360°</strong></span> development, control, management, and operational efficiency. This implies that eLiteERP covers various aspects of business processes and activities."
  },
  {
    "title": "Built on Latest Microsoft .NET Platform",
    "content": "The use of the latest Microsoft .NET platform and in-built integration with MS Office suggests that eLite ERP is technologically up-to-date, ensuring compatibility and seamless integration with widely used business tools."
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
            <h3 className="mb-3">USP of eLiteERP</h3>
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
