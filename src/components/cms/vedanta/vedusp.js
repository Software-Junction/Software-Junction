import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Specialization and Experience",
    content:
    "With a focus on school management, college management, business accounting, ERP, inventory management, and more, Advanta brings a wealth of specialization and experience to each software solution. This targeted approach results in software that is finely tuned to meet the unique requirements of each sector."
  },
  {
    title: "Versatility with Modules",
    content:
    "<span style=\"color:#f95738 ;\"><strong>Featuring 28 modules</strong></span>, Advanta's software provides a versatile and customizable experience. Users can tailor the software to their specific needs, choosing only the modules that are relevant to their operations. This adaptability ensures a streamlined and efficient workflow."
  },
  {
    title: "Comprehensive Support",
    content:
    "<strong>Notice Board & Real-Time Notifications :</strong> Keep students and professors informed with on-demand notifications.<br/><strong>Bio-Metric Integration :</strong> Automate student and staff attendance with biometric device integration."
  }
  
];

const renderHTML = (rawHTML) => {
  return React.createElement("p", { dangerouslySetInnerHTML: { __html: rawHTML } });
};


const Vedusp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of Vedanta School ERP</h3>
          </Col>
          {uspData.map((item, index) => (
            <Col lg={4} className="mb-4" key={index}>
              <div
                className={`${styles["ved-box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
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

export default Vedusp;
