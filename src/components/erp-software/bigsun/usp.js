import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../bigsun/big.module.scss";

const uspData = [
  {
    "title": "Tailored Industry Solutions",
    "content": "We provide industry-specific ERP solutions designed to address the unique challenges and requirements of manufacturing, media, and NBFC sectors."
  },
  {
    "title": "Extensive Experience",
    "content": "With over a decade of experience in the field, BIGSUN is a trusted expert in ERP implementation, ensuring successful outcomes for mid to large-sized businesses."
  },
  {
    "title": "Personalized Support",
    "content": "Despite our extensive reach and reliability, we provide personalized support, ensuring that every client receives the attention and assistance they need for successful ERP implementation and usage."
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
            <h3 className="mb-3">USP of BIGSUN</h3>
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
