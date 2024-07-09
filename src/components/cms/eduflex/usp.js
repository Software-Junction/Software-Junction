import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from '../eduflex/flex.module.scss'

const uspData = [
  {
    title: "Service Oriented Approach",
    content:
      "The unique operational concept of a 'Service Oriented Approach' sets Eduflex apart. This approach prioritizes efficient service delivery, ensuring that distributed and synchronized data are readily available to students, parents, staff, and management at an accelerated speed.",
  },
  {
    title: " Fastest Implementation",
    content:
      "Eduflex prides itself on being the fastest to implement, recognizing the urgency educational institutions often face. This means schools, colleges, kindergartens, and universities can quickly benefit from the advantages of Eduflex without prolonged implementation periods.",
  },
  {
    title: "Single, Secure Shared Database",
    content:
      "The integration of all modules into a single, secure shared database ensures data consistency and security. Eduflex minimizes redundancies and provides a centralized hub for information, reducing the need for multiple systems and enhancing data integrity.",
  },
  {
    title: "Customizable Modules for Diverse Needs",
    content:
      "Eduflex recognizes the diverse needs of educational institutions and offers customizable modules. Whether it's admissions, fee management, timetable creation, or other specific requirements, Eduflex adapts to the unique needs of each institution.",
  },
];

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
            <h3 className="mb-3">USP of Eduflex</h3>
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
