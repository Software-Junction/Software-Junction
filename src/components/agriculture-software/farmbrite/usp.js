import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../farmbrite/farmbrite.module.scss";

const uspData = [
  {
    title: "Integrated Livestock and Farm Management",
    content:
      "Provides integrated livestock management with features such as record-keeping, farm mapping, tracking, breeding, health management, sales, and reporting. Farm management features simplify crop planning, yield projections, income tracking, and collaborative team efforts.",
  },
  {
    title: "Financial Tools Tailored for Farms",
    content:
      "Integrated farm accounting and bookkeeping features specifically designed for farms. Simplifies financial reporting, cash flow analysis, and eases the tax process, contributing to efficient financial management.",
  },
  {
    title: "Direct Online Sales and eCommerce Integration",
    content:
      "Complete seed-to-sale farm software with an integrated eCommerce solution. Farmers can sell products directly to consumers online, with seamless integration with crop plans and inventory for streamlined order management.",
  },
  {
    title: "Insightful Reporting and Analytics",
    content:
      "Provides over <span style=\"color:#FC5185 ;\"><strong> 40</strong></span> pre-built user-friendly farm-specific reports, integrated dashboards, and custom reports. Offers instant insight into farm operations, aiding in decision-making, organic certifications, and compliance reporting.",
  },
  {
    title: "Holistic Farm Data Management",
    content:
      "Consolidates all farm data in one place, allowing users to have a complete picture of their entire operation. Supports regenerative and bio-diverse agriculture by tracking and improving soil and livestock health.",
  },
  {
    title: "Trusted by Farmers Worldwide",
    content:
      "Developed by farmers for farmers, emphasizing a passion for helping others start and succeed in farming. Trusted by thousands of farms globally and rated as the best farm management software overall.",
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

const Usp = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of Farmbrite</h3>
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
