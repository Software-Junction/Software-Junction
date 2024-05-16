import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Automation of Workflows",
    content:
      "SKYLINE enables the automation of accounting workflows and optimization of facility operations. Users can seamlessly access accounting, leasing, and facilities management functions, streamlining day-to-day processes.",
  },
  {
    title: "Performance Metrics and Reporting",
    content:
      "The solution facilitates the evaluation and improvement of performance metrics and investor reporting. It empowers property owners and managers to make informed decisions based on accurate and timely financial reports.",
  },
  {
    title: "Specialized Solutions for Various Property Types",
    content:
      "SKYLINE offers specialized tools for different property types, including commercial and residential properties. It caters to the specific needs of managing office, retail, industrial, single/multi-family, condo/HOA, and student housing properties.",
  },
  {
    title: "Property Accounting and Consulting Services",
    content:
      "The software provides additional value through property accounting and consulting services. This includes monthly training sessions for employee onboarding and the option to outsource back-office accounting duties to SS&C's team of industry experts.",
  },
  {
    title: "Decades of Industry Experience",
    content:
      "SS&C SKYLINE is positioned as a pioneer in property management technology, with a track record of over three decades in delivering innovative technology solutions to commercial and residential real estate owners, investors, and managers.",
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
            <h3 className="mb-3">USP of SS&C SKYLINE </h3>
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
