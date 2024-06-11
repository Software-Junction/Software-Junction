import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../smaket/smak.module.scss";

const uspData = [
  {
    "title": "Uncompromising Data Security",
    "content": "We prioritize the security and privacy of your data. All information is stored in an encrypted and anonymized format."
  },
  {
    "title": "Automatic WhatsApp-Style Backup",
    "content": "Just like WhatsApp, we offer automatic backup for your business-related data."
  },
  {
    "title": "Seamless Data Transfer from Vyapaar & Tally",
    "content": "We make it easy for you to transition your existing data from other software, such as Vyapaar and Tally."
  },
  {
    "title": "Superfast WhatsApp Support",
    "content": "Our support team is available on WhatsApp, offering quick and efficient assistance."
  },
  {
    "title": "Dynamic Pricing for Sales Boost",
    "content": "We empower you to create custom mobile apps and websites for your business."
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
            <h3 className="mb-3">USP of Smaket</h3>
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
