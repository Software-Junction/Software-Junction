import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Smooth Deployment",
    "content": "Tools and support for a seamless transition to the cloud, including diagnostic tools, industry process catalog, and support packages to assist in onboarding and education."
  },
  {
    "title": "Business Continuity",
    "content": "Continuous updates ensure the software stays modern without the need for major upgrades, while security measures provided by AWS protect the business data, ensuring uptime and reliability."
  },
  {
    "title": "Continuous Innovation",
    "content": "Future-ready capabilities and preconfiguration for faster time-to-value, emphasizing the software's commitment to staying ahead in technology trends and providing tangible business benefits."
  },
  {
    "title": "Business Partnership",
    "content": "Emphasis on building long-term relationships beyond just software provision, suggesting a collaborative approach to addressing business challenges and goals"
  }
];
{/* <span style=\"color:#FC5185 ;\"><strong> */}
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
            <h3 className="mb-3">USP of Infor CloudSuite™ ERP</h3>
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
