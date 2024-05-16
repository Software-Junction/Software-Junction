import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "BI Solution",
    "content": "Intellicus offers a comprehensive business intelligence solution that covers data discovery, transformation, visualization, and insights generation, catering to various functions and hierarchies within enterprises."
  },
  {
    "title": "Data Integration and Automation",
    "content": "Intellicus enables users to unify data from multiple sources seamlessly, simplifying the analytics process. It also offers automated data workflows, reducing manual efforts and accelerating processes."
  },
  {
    "title": "Speed and Scalability",
    "content": "With Intellicus, users can expedite implementation, obtaining their first reports and dashboards in as early as <span style=\"color:#FC5185 ;\"><strong>15 days.</strong></span> Moreover, it provides scalability, allowing businesses to migrate BI workloads to a more scalable and cost-effective platform."
  },
  {
    "title": "Modular and Customizable Solution",
    "content": "Intellicus is highlighted as a customizable and modular solution, making it suitable for a wide range of enterprises, from large corporations to small-scale businesses."
  },
  {
    "title": "Global Adoption",
    "content": "The software's popularity is underlined by its adoption by more than <span style=\"color:#FC5185 ;\"><strong>17,000</strong></span> enterprises worldwide, indicating its versatility and effectiveness across diverse industries and scales."
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
            <h3 className="mb-3">USP of Minitab</h3>
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
