import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../netsuite-openair/openair.module.scss";

const uspData = [
  {
    title: "Real-time Visibility and Anywhere Access",
    content:
      "Provides real-time visibility into project portfolio health, resource utilization, billing, and expenses. Enables anytime, anywhere access to information and tools, promoting flexibility and efficiency.",
  },
  {
    title: "Global Resource Management",
    content:
      "Supports organizations with global services pools and diverse requirements such as multi-currency, multi-subsidiary, multi-taxation, and multi-language. Enables efficient resource allocation and billing across different locations and currencies.",
  },
  {
    title: "Optimized Resource Management",
    content:
      "Manages and deploys resources based on job needs, employee skills, experience, and availability. Enhances project profitability by providing visibility into project analytics for pricing, billing rates, and staffing optimization.",
  },
  {
    title: "Accurate Project Financials",
    content:
      "Connects project activities with company financials to improve cash flow. Ensures precise accounting and billing throughout the entire project lifecycle.",
  },
  {
    title: "Faster Time to Value",
    content:
      'Leverages the experience gained from thousands of worldwide deployments over <span style="color:#f95738 ;"><strong>2 decades</strong></span>. Offers intelligent, stepped implementations for rapid business value and a predictable timeframe for going live on NetSuite.',
  },
];
{
  /* <span style=\"color:#f95738 ;\"><strong> */
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
            <h3 className="mb-3">USP of NetSuite OpenAir</h3>
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
