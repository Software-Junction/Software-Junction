import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../buildesk/buildesk.module.scss";

const uspData = [
  {
    "title": "Trusted by Leading Real Estate Companies",
    "content": "Buildesk has gained trust from prominent real estate companies, positioning itself as a reliable and preferred choice in the industry."
  },
  {
    "title": "Awards and Recognition",
    "content": "The software has received accolades, including the  <span style=\"color:#FC5185 ;\"><strong> 'Best Support 2023' </strong></span> and recognition as the 'Most Popular Software  <span style=\"color:#FC5185 ;\"><strong>2022</strong></span>.' Additionally, it is acknowledged for being recommended by users and offering the best value in fall  <span style=\"color:#FC5185 ;\"><strong>2020 </strong></span>."
  },
  {
    "title": "Advanced Web-Based Automation",
    "content": "Buildesk facilitates business process automation through its advanced web-based software solution. The solution integrates operations, finance, and inventory management, solving challenges related to departmental coordination."
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
            <h3 className="mb-3">USP of Buildesk</h3>
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
