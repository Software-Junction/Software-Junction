import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Innovative Weather Integration",
    content:
      "Stay ahead of the game with AgriXP's hourly visual spray forecasts and farming weather updates. The app's integration allows farmers to plan activities based on real-time weather data, ensuring optimal crop management.",
  },
  {
    title: "Continuous Updates and Enhancements",
    content:
      "AgriXP is committed to continual improvement. With regular updates, users can access new crops, improved interfaces, and cutting-edge features to keep their farming practices up-to-date and in line with industry standards.",
  },
  {
    title: "Complete Traceability",
    content:
      "From seed supplier to buyer, AgriXP offers complete traceability. Record-keeping for pesticides, spray activities, and crop histories ensures compliance with certifications and regulatory requirements.",
  },
  {
    title: "Tailored Solutions for Different Farms",
    content:
      "While small farms enjoy AgriXP's free version, the premium version caters to medium and large farms, consultants, crop advisors, and agribusinesses. Compare versions to find the right fit for your needs.",
  },
  {
    title: "Regulatory Compliance Assistance",
    content:
      "AgriXP actively aids farmers in meeting certification and regulatory requirements, including food safety, pesticide record keeping, waiting periods, and climatic conditions. This ensures peace of mind during audits.",
  },
  {
    title: "Global Accessibility",
    content:
      "Whether in Europe or North America, AgriXP is accessible from anywhere. Its cloud-based nature ensures that your farm data is available whenever and wherever you need it.",
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
            <h3 className="mb-3">USP of AgriXP</h3>
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
