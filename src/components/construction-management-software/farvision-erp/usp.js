import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Industry-Specific Modules",
    content:
      "The software offers specialized modules tailored for different sectors within the real estate and construction industry, including Real Estate, Property Manager, HRMS, Urban Infrastructure, Facility Management, and Manufacturing for RMC Batching Plant.",
  },
  {
    title: "Integration Across Departments",
    content:
      "Farvision ERP integrates functions across all departments, promoting a cohesive approach to business operations. This leads to enhanced efficiency and streamlined processes.",
  },
  {
    title: 'Certification as "CREDAI Preferred ERP Partner"',
    content:
      'Farvision ERP has been certified as the "CREDAI Preferred ERP Partner" for the years <span style="color:#FC5185 ;"><strong>2014-15</strong></span> and <span style="color:#FC5185 ;"><strong>2015-16</strong></span>. This certification highlights the trust and preference it has gained within the real estate industry.',
  },
  {
    title: "Long-standing Experience",
    content:
      'Gamut Infosystems Ltd. has over <span style="color:#FC5185 ;"><strong>30 years</strong></span> of experience, establishing them as a trusted ERP provider in India. The company\'s expertise contributes to the reliability of Farvision ERP.',
  },
  {
    title: "Global Presence",
    content:
      'Farvision ERP is used in over <span style="color:#FC5185 ;"><strong>7 countries</strong></span>, emphasizing its adaptability to diverse business environments and its acceptance on a global scale.',
  },
];
{
  /* <span style=\"color:#FC5185 ;\"><strong> */
}
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
            <h3 className="mb-3">USP of Farvision ERP</h3>
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
