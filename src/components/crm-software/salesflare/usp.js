import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Automated Efficiency",
    "content": "Salesflare automates the creation of an address book from your business email inbox and calendar, saving time on manual data management."
  },
  {
    "title": "Intelligent Suggestions",
    "content": "Receive smart suggestions for adding new accounts and contacts based on your interactions, eliminating the need for manual memory recall."
  },
  {
    "title": "Email Sequences",
    "content": "Engage with leads and customers at scale through personalized email sequences, optimizing follow-ups until successful contact."
  },
  {
    "title": "Email and Web Tracking",
    "content": "Track email opens, link clicks, and website interactions to understand customer engagement and tailor your approach accordingly."
  },
  {
    "title": "Integrated Tools",
    "content": "Deeply integrate with LinkedIn, Gmail, Outlook, and more, ensuring a cohesive workflow and maximizing productivity."
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
            <h3 className="mb-3">USP of Salesflare</h3>
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
