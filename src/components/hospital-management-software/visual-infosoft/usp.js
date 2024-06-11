import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../visual-infosoft/vis.module.scss";

const uspData = [
  {
    "title": "Extensive Experience",
    "content": "Visual InfoSoft Pvt. Ltd. has been dedicated to developing healthcare solutions since <span style=\"color:#f95738 ;\"><strong>1996</strong></span>, showcasing over two decades of experience in the field."
  },
  {
    "title": "Wide Range of Products",
    "content": "The company offers a comprehensive suite of <span style=\"color:#f95738 ;\"><strong>17+</strong></span> healthcare software solutions, catering to various medical specialties, including Ophthalmology, ENT, Psychiatry, Gynecology, and more."
  },
  {
    "title": "Pioneer in Pharmacy Software",
    "content": "The company introduced the first Windows-based pharmacy software in India in <span style=\"color:#f95738 ;\"><strong>2001</strong></span>, emphasizing its role as an innovator in the healthcare software space."
  },
  {
    "title": "Billing and Inventory Management",
    "content": "The software includes billing, inventory control, accounting, and MIS facilities, streamlining administrative and managerial tasks for healthcare providers, pharmacies, and distributors."
  },
  {
    "title": "Comprehensive Hospital Management System (HMS)",
    "content": "The company offers a robust HMS with <span style=\"color:#f95738 ;\"><strong>36</strong></span> different modules, covering various aspects of hospital management, making it suitable for larger healthcare facilities."
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
            <h3 className="mb-3">USP of Visual InfoSoft Pvt. Ltd</h3>
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
