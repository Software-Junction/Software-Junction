import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../captainbiz/cap.module.scss";

const uspData = [
  {
    "title": "Comprehensive Solution",
    "content": "CaptainBiz is an all-in-one GST billing software that offers complete business accounting, inventory management, and online billing functionalities. It serves as a one-stop solution for small businesses in India."
  },
  {
    "title": "Trusted by Businesses",
    "content": "With over <span style=\"color:#FC5185 ;\"><strong>46,000</strong></span> small and medium-sized businesses (SMBs) across India using CaptainBiz, it has gained trust in the market. Additionally, being recommended by the Goods & Services Tax Network (GSTN) adds to its credibility."
  },
  {
    "title": "Industry-Specific Solutions",
    "content": "CaptainBiz caters to businesses across various sectors, including manufacturing, trading, and services. It understands and addresses the specific needs of each industry, providing tailored solutions for cost control, sales enhancement, and margin management."
  },
  {
    "title": "GST Compliance",
    "content": "CaptainBiz is endorsed by GSTN, indicating its compliance with Goods and Services Tax regulations. This is crucial for businesses in India to ensure accurate and hassle-free tax filing."
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
            <h3 className="mb-3">USP of CaptainBiz</h3>
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
