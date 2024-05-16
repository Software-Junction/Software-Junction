import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Innovative WeighTrack Technology",
    content:
      "Plan-A-Head offers a cutting-edge infield weighing device, the WeighTrack, which automates the recording of harvested nuts' weight directly from the fields. The use of GSM technology ensures seamless and real-time data transfer, eliminating the need for manual data collection.",
  },
  {
    title: "Comprehensive Data Analysis",
    content:
      "The software provides in-depth analysis of various data, including block records, soil analyses, operations, spray instructions, yields, and weather data. Global GAP data support allows users to meet international auditing standards.",
  },
  {
    title: "Integration and Efficiency",
    content:
      "Plan-A-Head Macadamia is designed to integrate seamlessly with other Plan-A-Head modules, preventing duplication of administrative efforts. The software streamlines production, payroll, and financial processes, enhancing overall operational efficiency.",
  },
  {
    title: "Over Three Decades of Expertise",
    content:
      "With more than <span style=\"color:#FC5185 ;\"><strong>32 years</strong></span> of experience in the field, Plan-A-Head brings a wealth of knowledge and expertise to the development of the Macadamia software. The longevity of their presence in the industry establishes trust among farmers who rely on their software solutions.",
  },
  {
    title: "End-to-End Agricultural Management",
    content:
      "The software covers a wide range of functionalities, including harvesting data collection, field information storage, soil and disease analysis, inventory management, rainfall recording, Global GAP compliance, income and expense reports, scouting records, and factory result integration.",
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
            <h3 className="mb-3">USP of Macadamia Management System</h3>
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
