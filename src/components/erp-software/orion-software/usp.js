import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Integration",
    "content": "Orion Software provides integration capabilities through utility programs and APIs based on SOAP or Restful Web services, enabling seamless integration with clients' existing accounting software, whether on-premise or cloud-based."
  },
  {
    "title": "Efficiency Experts",
    "content": "Orion Software positions themselves as partners dedicated to optimizing clients' efficiency. They offer deep industry knowledge and technological expertise to streamline operations, enhance productivity, and foster growth in the construction business."
  },
  {
    "title": "Newsletter Subscription",
    "content": "They offer a newsletter subscription service to keep clients updated with the latest news, tips, special offers, and industry-related insights."
  },
  {
    "title": "Social Media Engagement",
    "content": "Orion Software encourages clients to follow them on social media platforms for further engagement and updates."
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
            <h3 className="mb-3">USP of Orion Software's ERP solution</h3>
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
