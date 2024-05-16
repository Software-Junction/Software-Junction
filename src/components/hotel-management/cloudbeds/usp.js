import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Unified Hospitality Management System",
    "content": "Cloudbeds offers a powerful and intuitive platform to run various types of lodging businesses, including hotels, hostels, B&Bs, inns, motels, vacation rentals, glampsites, and apartments."
  },
  {
    "title": "Elevated Operations through Integrations",
    "content": "Cloudbeds offers an Integrations Marketplace, connecting users with specialized apps and services, such as POS, guest messaging, and contactless solutions."
  },
  {
    "title": "Open API for Custom Solutions",
    "content": "The platform provides a self-service API, offering flexibility for users to build and connect custom solutions based on their unique property needs."
  },
  {
    "title": "International Presence and Partner Ecosystem",
    "content": "Cloudbeds operates in over <span style=\"color:#FC5185 ;\"><strong>157</strong></span> countries, serves <span style=\"color:#FC5185 ;\"><strong>40+</strong></span> countries with employees, speaks <span style=\"color:#FC5185 ;\"><strong>30+</strong></span> languages, and has over <span style=\"color:#FC5185 ;\"><strong>600</strong></span> partner integrations."
  },
  {
    "title": "Global Reach and Direct Reservations",
    "content": "Cloudbeds has a wide global reach, with <span style=\"color:#FC5185 ;\"><strong>11M+</strong></span> direct reservations per year, indicating its popularity and effectiveness in the hospitality industry."
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
            <h3 className="mb-3">USP of Cloudbeds</h3>
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
