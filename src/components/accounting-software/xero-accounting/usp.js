import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Collaboration and Multi-User Access",
    "content": "Real-time collaboration with multiple users."
  },
  {
    "title": "Integrations",
    "content": "Extensive integration options with other business software."
  },
  {
    "title": "Automatic Bank Feeds",
    "content": "Streamlined bank transaction reconciliation."
  },
  {
    "title": "Mobile Accessibility",
    "content": "Manage finances on the go with mobile apps."
  },
  {
    "title": "Reporting and Analytics",
    "content": "Robust reporting and analytics for data-driven decisions."
  },
  {
    "title": "Security and Data Protection",
    "content": "Strong emphasis on data security and encryption."
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
            <h3 className="mb-3">USP of Xero Accounting</h3>
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
