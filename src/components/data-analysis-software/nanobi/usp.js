import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../nanobi/nan.module.scss";

const uspData = [
  {
    "title": "Patented Nanomart Neural Metadata Technology",
    "content": "Utilizing proprietary Nanomart Neural Metadata, the platform facilitates rapid organization of data into marts, enhancing data retrieval efficiency through advanced algorithms."
  },
  {
    "title": "Quick Data Mart Assembly and Deletion",
    "content": "Users can swiftly create and remove data marts, allowing for dynamic adaptation to changing data requirements without disrupting existing structures."
  },
  {
    "title": "Overlay External Data on Internal Data",
    "content": "The platform enables users to overlay external data onto internal datasets, providing insights into the impact of external factors on business trends or customer behavior."
  },
  {
    "title": "Alert Triggering Rules",
    "content": "Users can define rules triggering alerts for changes in key business metrics, facilitating proactive decision-making and action based on real-time data insights."
  },
  {
    "title": "Domain-Rich Preconfigured Solutions",
    "content": "Nanobi offers preconfigured analytical solutions tailored to specific business domains, providing users with ready-to-use tools to address common industry challenges."
  },
  {
    "title": "Consultative Approach and Analytics Maturity Assessment",
    "content": "Nanobi takes a consultative approach, working closely with clients to understand their needs and offer customized solutions, supported by an Analytics Maturity Assessment Model for tailored implementation guidance."
  }
];
{/* <span style=\"color:#f95738 ;\"><strong> */}
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
            <h3 className="mb-3">USP of Nanobi</h3>
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
