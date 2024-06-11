import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../propertyware/propertyware.module.scss";

const uspData = [
  {
    title: "Open Platform",
    content:
      "Simplifies management with open data access and two-way data exchange (Open API). Connects with other software systems to reduce duplication, minimize manual data entry, and increase efficiency.",
  },
  {
    title: "Efficiency-Driven Tools",
    content:
      "All-in-one, open-platform property management solution. Ability to create custom fields, dashboards, and reports. Streamlines business processes for increased efficiency.",
  },
];
{
  /* <span style=\"color:#f95738 ;\"><strong> */
}
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
            <h3 className="mb-3">USP of Propertyware</h3>
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
