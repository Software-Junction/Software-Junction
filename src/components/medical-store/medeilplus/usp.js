import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../medeilplus/plus.module.scss";

const uspData = [
  {
    "title": "Point of Sale (POS) Integration",
    "content": "Medeil seamlessly integrates with POS systems, streamlining transactions and enhancing the overall retail experience for both customers and staff."
  },
  {
    "title": "Analytical Reporting",
    "content": "Users can generate analytical reports, aiding in business management and decision-making processes."
  },
  {
    "title": "Easy Integration",
    "content": "Medeil provides easy integration, ensuring compatibility with various systems, including electronic medical records."
  },
  {
    "title": "Professional Support and Updates",
    "content": "Medeil offers professional support and timely updates, demonstrating a commitment to customer satisfaction."
  },
  {
    "title": "Tailored for Healthcare Industry",
    "content": "Medeil is specifically tailored for healthcare, pharmaceutical, and retail industries, showcasing its specialization."
  },
  {
    "title": "Vanuston's Experience and Presence",
    "content": "The software is developed by Vanuston Intelligence, an emerging SaaS company with over 13 years of experience in the industry. The company has a global presence with offices in India and the USA."
  }
  
  
  
  
  
  
];
{/* <span style=\"color:#FC5185 ;\"><strong> */}
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
            <h3 className="mb-3">USP of Medeil Plus</h3>
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
