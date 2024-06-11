import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from '../hubspot/hub.module.scss'

const uspData = [
  {
    "title": "Comprehensive Free Solution",
    "content": "HubSpot CRM offers a complete set of tools for various teams, addressing diverse business needs, and it's entirely free."
  },
  {
    "title": "Unlimited and Timeless",
    "content": "Enjoy unlimited data and support for up to <span style=\"color:#f95738 ;\"><strong>1,000,000</strong></span> contacts, without any time limitations."
  },
  {
    "title": "Time-Saving Tools",
    "content": "Equipped with tools like a meeting scheduler, email template builder, live chat software, and an AI email writer to streamline the sales process."
  },
  {
    "title": "Scalable for Enterprise",
    "content": "Beyond the free CRM, HubSpot offers premium enterprise software for marketing, sales, customer service, content management, and operations."
  }
];
{/* <span style=\"color:#f95738 ;\"><strong> */}
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
            <h3 className="mb-3">USP of HubSpot CRM</h3>
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
