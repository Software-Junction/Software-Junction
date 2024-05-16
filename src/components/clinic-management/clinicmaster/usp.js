import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Patient-Centered Approach",
    "content": "The platform focuses on enhancing patient engagement and satisfaction by offering features such as patient portals, electronic medical record (EMR) access, and secure communication."
  },
  {
    "title": "Efficient and Secure",
    "content": "The platform ensures efficiency through features like online appointment booking, simplified billing processes, and secure payment options. Additionally, Clinicmaster prioritizes data security by encrypting all data before storage and hosting on Microsoft Azure servers."
  },
  {
    "title": "Proven Track Record",
    "content": "Clinicmaster boasts an impressive track record with over <span style=\"color:#FC5185 ;\"><strong>15,000</strong></span> professionals using their EMR system, handling more than <span style=\"color:#FC5185 ;\"><strong>31,130</strong></span> chart entries daily. The platform bills over <span style=\"color:#FC5185 ;\"><strong>$1 billion</strong></span> in medical services annually and facilitates over <span style=\"color:#FC5185 ;\"><strong>9.5 million</strong></span> appointments each year."
  },
  {
    "title": "Engaging Content",
    "content": "The website features engaging content, including a demo booking option, a tour, and a newsletter subscription, demonstrating a commitment to user experience and ongoing communication."
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
            <h3 className="mb-3">USP of Clinicmaster</h3>
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
