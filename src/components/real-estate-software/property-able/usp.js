import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../simplifyem/simplifyem.module.scss";

const uspData = [
  {
    title: "Increased Margins and Revenues",
    content:
      "Key advantages of the Property Able app include increased margins, collections, and revenues for medium and large real estate consultants and agents. The solution is positioned as a tool to help businesses grow by enhancing efficiency and facilitating better customer service.",
  },
  {
    title: "All-in-One Solution",
    content:
      "Property Able consolidates various tools into a single solution, including collaboration, listing, website integration, call management, commissions, and service request management. This all-in-one approach simplifies the management of multiple aspects of real estate operations.",
  },
  {
    title: "ISO 27001 Certified and Verisign Secured",
    content:
      "The software platform is presented as secure and trustworthy, with <span style=\"color:#FC5185 ;\"><strong>ISO 27001</strong></span> certification and Verisign security, ensuring the confidentiality of customer information.",
  },
  {
    title: "Global Presence",
    content:
      "The presence of corporate headquarters in Singapore and operations in Thailand highlights the software's global reach and international standing.",
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
            <h3 className="mb-3">USP of Property Able</h3>
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
