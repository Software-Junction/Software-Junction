import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from '../advanta/advanta.module.scss';

const uspData = [
  {
    title: "Global Trust",
    content:
      "Trusted by users worldwide, Advanta Innovations has established a reputation for providing reliable and effective software solutions. The global user base attests to the software's adaptability and performance across different regions and industries.",
  },
  {
    title: "Specialization and Experience",
    content:
      "With a focus on school management, college management, business accounting, ERP, inventory management, and more, Advanta brings a wealth of specialization and experience to each software solution. This targeted approach results in software that is finely tuned to meet the unique requirements of each sector.",
  },
  {
    title: "Versatility with Modules",
    content:
      "<span style=\"color:#f95738 ;\"><strong>Featuring 28 modules</strong></span>, Advanta's software provides a versatile and customizable experience. Users can tailor the software to their specific needs, choosing only the modules that are relevant to their operations. This adaptability ensures a streamlined and efficient workflow.",
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
            <h3 className="mb-3">USP of Advanta Rapid ERP</h3>
          </Col>
          {uspData.map((item, index) => (
            <Col lg={4} className="mb-4" key={index}>
              <div
                className={`${styles["box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
              >
                <h5>{item.title}</h5>
                <br />
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
