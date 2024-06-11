import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../hms/hms.module.scss";

const uspData = [
  {
    "title": "Mobile App for Waiters",
    "content": "The inclusion of a dedicated Android app for waiters enhances the efficiency of restaurant operations, from taking orders to sending KOTs to the kitchen and managing seat availability."
  },
  {
    "title": "Security and Data Protection",
    "content": "THMS prioritizes the security of data, implementing robust security systems to protect sensitive information. Customers can trust that their data is safe and secure, meeting the highest standards of data protection."
  },
  {
    "title": "Training and Implementation Support",
    "content": "Clients benefit from free and multiple-time online training, and the professional team at Truelogics Infotech handles all implementation and onboarding processes without extra charges."
  },
  {
    "title": "Partnership Opportunities",
    "content": "THMS encourages collaboration through its Partners Program, aiming to join hands with new partners for mutual growth and exclusive benefits. The company values communication and collaboration, fostering a supportive community of users and partners."
  },
  {
    "title": "Proven Track Record",
    "content": "With over <span style=\"color:#f95738 ;\"><strong>4000+</strong></span> hotels and restaurants using THMS across India, Truelogics Infotech's software has a proven track record of successfully powering diverse businesses in the hospitality industry."
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
            <h3 className="mb-3">USP of The Hotel Management Software</h3>
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
