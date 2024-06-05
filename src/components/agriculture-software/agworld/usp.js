import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../agworld/agworld.module.scss";

const uspData = [
  {
    title: "Farm Management Ecosystem",
    content:
      "Agworld is positioned as agriculture's preferred independent farm information management ecosystem. Offers a range of solutions including Farm Planning, Budgeting, Product Input Tracking, Job Management, Compliance, Agronomy, Logistics, and Grower Services.",
  },
  {
    title: "Collaborative Data Sharing",
    content:
      "Facilitates collaboration among growers, agronomists, retailers, and contractors by allowing them to work on the same set of farm data. Enables sharing of data with various stakeholders such as farm hands, input providers, banks, accountants, and others.",
  },
  {
    title: "Data Ownership and Privacy",
    content:
      "Guarantees data ownership to users, assuring that Agworld does not sell data to third parties. Users can control access to their data, allowing them to share it with selected stakeholders and revoke access at any time.",
  },
  {
    title: "Global Reach with Local Presence",
    content:
      "Combines global reach with a local presence to ensure that users benefit from a company with extensive knowledge and experience in agriculture.",
  },
  {
    title: "Regular Product Updates and Stability",
    content:
      "Offers regular product updates to enhance solutions and maximize performance. Boasts a stable farm management ecosystem with<span style=\"color:#FC5185 ;\"><strong> 99.9% uptime</strong></span>, ensuring reliability for users.",
  },
  {
    title: "Decade of Commitment",
    content:
      "Demonstrates a decade-long commitment to improving collaboration within agriculture, emphasizing a focus on the user since the company's inception in <span style=\"color:#FC5185 ;\"><strong>2009</strong></span>.",
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
            <h3 className="mb-3">USP of Agworld Farm Management Software</h3>
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
