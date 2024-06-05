import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../in4Suite/in4suite.module.scss";

const uspData = [
  {
    "title": "Complete Business Visibility",
    "content": "In4Suite® provides complete visibility into all aspects of your Real Estate and Construction business, allowing you to streamline processes, improve efficiencies, manage complexities, and increase revenue."
  },
  {
    "title": "Third-Party Integrations",
    "content": "The platform seamlessly integrates with popular tools such as Tally, Qlik, QuickBooks, SAP FICO, Salesforce, CTI, and Oracle Financials, enhancing overall efficiency and connectivity."
  },
  {
    "title": "World-Class Customer Support",
    "content": "In4Suite® Global Support is highlighted as a crucial aspect, ensuring customers have access to the best expertise in the industry for a smooth and pleasant support experience."
  },
  {
    "title": "Global Presence",
    "content": "In4Velocity is a leading ERP software and solutions provider with a global presence, serving Real Estate, Construction, and Infrastructure businesses in various countries, including India, the UK, UAE, Saudi Arabia, Egypt, Bahrain, Qatar, Turkey, Middle East, South Africa, Kenya, Nigeria, Congo, Rwanda, Uganda, Ghana, Tanzania, Sudan, Morocco, Zambia, Malaysia, Indonesia, Philippines, Cambodia, Vietnam, Thailand, Singapore, Bangladesh, Myanmar."
  },
  {
    "title": "Experienced Team",
    "content": "The Lead Product Expert, Ashok Kumar, assures potential clients that In4Suite® is the best ERP for Real Estate businesses and invites them to request a free demo for a quick and informative overview."
  }
];
{/* <span style=\"color:#FC5185 ;\"><strong> */}
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
            <h3 className="mb-3">USP of In4Suite</h3>
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
