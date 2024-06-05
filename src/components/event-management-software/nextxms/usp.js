import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../nextxms/nxt.module.scss";

const uspData = [
  {
    "title": "360-Degree Monitoring",
    "content": "Full observability with automatic device discovery, mapping, and zoning.\nMulti-platform solution with multi-tenant capabilities."
  },
  {
    "title": "Expert Support",
    "content": "Dedicated expert support packages tailored to business requirements."
  },
  {
    "title": "Highly Customizable",
    "content": "Adaptable to various projects, from petrol pipe monitoring to ATM management.\nOffers a wide range of actions, flexible thresholds, and custom scripting."
  },
  {
    "title": "Scalable and Secure",
    "content": "Works in-premise or remotely with strong security measures.\nGranular access controls and encrypted communications."
  },
  {
    "title": "Industry Focus",
    "content": "High Achiever in Network Monitoring for\nNetwork and infrastructure monitoring\nApplication and server monitoring\nService monitoring for MSPs, ISPs, WISPs\nATM and payment switches monitoring\nIndustrial equipment monitoring"
  },
  {
    "title": "Enterprise Edition Benefits",
    "content": "All-Powerful NetXMS Enterprise Edition\nLonger support cycles\nReliable new feature releases\nIncreased confidence with the Enterprise edition service package"
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
            <h3 className="mb-3">USP of NetXMS</h3>
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
