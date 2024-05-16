import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Mobile Application for Real-Time Communication",
    content:
      "Tactive includes a mobile application for real-time data communication and remote location monitoring, enabling users to stay connected and informed while on the go.",
  },
  {
    title: "Integrated Platform for Seamless Operations",
    content:
      "Tactive offers a single integrated platform, eliminating the need to link random software for different tasks. This integration enhances efficiency and streamlines workflow processes.",
  },
  {
    title: "Specialized Modules for Different Roles",
    content:
      "The software provides specific modules catering to the needs of different roles within the construction business, including CEOs/Management, CFO/Finance Head, Regional Heads/Project Managers, Procurement Head/Purchase Managers/Equipment Managers, and Budget/Execution/Scheduling Teams.",
  },
  {
    title: "Advanced Financial Tracking",
    content:
      "Enables real-time monitoring of profitability, budget variance, job cost reports, fund utilization tracking, cash flow analysis, and monitoring of payables and receivables.",
  },
  {
    title: "Project and Inventory Management",
    content:
      "Offers features for project status tracking, material availability overview, and a comprehensive view of inventory status. It also facilitates easy creation and quick submission of responses to budget inquiries.",
  },
  {
    title: "Client Testimonials and Case Studies",
    content:
      "Positive testimonials from clients such as NCC Limited, Angel Constructions, and URC Construction Pvt Ltd, along with case studies from URCC and KNK, serve as endorsements of the software's effectiveness and customer satisfaction.",
  },
  {
    title: "Renowned Industry Partnerships and Reviews",
    content:
      "Tactive has been featured in various industry reviews and platforms such as GoodFirms, Softwareworld, Credly, Clutch, and Top Developers, indicating industry recognition and credibility.",
  },
  {
    title: "Continuous Improvement and Upgradation",
    content:
      "Tactive showcases a commitment to continuous improvement with the renaming of URC Infotec & CIMS ERP to Tactive, suggesting ongoing efforts to enhance and evolve their solutions.",
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
            <h3 className="mb-3">USP of Tactive</h3>
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
