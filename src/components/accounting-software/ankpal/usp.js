import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../ankpal/ank.module.scss";

const uspData = [
  {
    "content": "It's accessibility and the journal voucher feature which is a must for accounting"
  },
  {
    "content": "Mainly Focus on Support to Software users. And excellent working Environment culture for Employes.ERP software as it's Easy to access, user friendly and value for money"
  },
  {
    "content": "The ease of accessing things. Channelized Sales and Purchases. Account integration. Direct salary components. Manual management of bank transaction integration. I am using these sections daily and my work is being completed smoothly without any errors. The customer support team is very kind and helpful at any point in time. They care for me and they have answered my silly questions very politely."
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
            <h3 className="mb-3">USP of Ankpal</h3>
          </Col>
          {uspData.map((item, index) => (
            <Col lg={4} className="mb-4" key={index}>
              <div
                className={`${styles["box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
              >
                {/* <h5>{item.title}</h5>
                <br /> */}
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
