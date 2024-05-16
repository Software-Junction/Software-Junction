import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "All-Encompassing Suite",
    "content": "Romio Technologies offers an all-encompassing suite of software solutions tailored for the Hospitality and F&B industry. From POS and billing to ERP, CRM, HRM, and Accounting, they provide a one-stop-shop for businesses in this sector."
  },
  {
    "title": "Tailored for Diverse Businesses",
    "content": "Romio Technologies caters to a diverse range of businesses, including restaurants, QSRs, fine dining establishments, food courts, cafes, pubs, bakeries, food trucks, malls, hotels, and more. Their software is adaptable and scalable to meet the unique needs of various types of establishments."
  },
  {
    "title": "Integration Capabilities",
    "content": "The billing and ERP software solutions seamlessly integrate with various elements such as food aggregators, messaging systems, and payment gateways. This integration streamlines operations and ensures efficiency in managing different aspects of the business."
  },
  {
    "title": "Proven Track Record",
    "content": "Romio Technologies boasts an impressive list of clients, including well-known brands such as Krispy Kreme Doughnuts, PVR, DLF, and more. Client testimonials further affirm the company's reliability and success in delivering effective solutions."
  },
  {
    "title": "11 Years of Expertise",
    "content": "With over <span style=\"color:#FC5185 ;\"><strong> 11 years </strong></span> of experience, Romio Technologies brings a wealth of knowledge to the table. Their longevity in the industry signifies stability, expertise, and a deep understanding of the challenges faced by businesses in the Hospitality and F&B sector."
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
            <h3 className="mb-3">USP of Romio Technologies</h3>
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
