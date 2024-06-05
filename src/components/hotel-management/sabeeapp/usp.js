import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../sabeeapp/sabee.module.scss";

const uspData = [
  {
    "title": "All-in-One Solution",
    "content": "SabeeApp provides a complete software suite, covering essential aspects of hotel operations, including Property Management System (PMS), Booking Engine, Channel Manager, SabeePay (payment solutions), Smart Solutions (digital hotel smartphone applications), and Unified Inbox for centralized guest communication."
  },
  {
    "title": "Commission-Free Direct Bookings",
    "content": "The Booking Engine enables hotels to turn their websites into successful sales channels, boosting direct, commission-free reservations by <span style=\"color:#FC5185 ;\"><strong>20%.</strong></span>"
  },
  {
    "title": "Global Provider",
    "content": "SabeeApp is positioned as a global provider, supporting hoteliers in <span style=\"color:#FC5185 ;\"><strong>70+</strong></span> countries. It has earned the trust of major players in the travel industry, as indicated by partnerships with brands like Agoda, Booking.com, Airbnb, and Expedia."
  },
  {
    "title": "Personalized Onboarding and Multilingual Support",
    "content": "SabeeApp offers personalized onboarding to make the implementation process hassle-free and secure. The dedicated Support Team provides assistance in six different languages, enhancing the customer experience."
  },
  {
    "title": "Marketplace and Open API",
    "content": "The software integrates with a variety of hotel tech solutions through its Marketplace, and it offers an Open API for those who want to build their own integrations, providing flexibility and scalability."
  },
  {
    "title": "Continuous Innovation",
    "content": "SabeeApp highlights its commitment to bringing together innovative tech integrations, OTAs, and industry-leading partners to adapt to changes in the hotel industry, ensuring that the property management system helps businesses thrive."
  },
  {
    "title": "Focus on Guest Journey",
    "content": "SabeeApp places importance on the guest journey, offering tools from online check-in to keyless door opening to create a personalized and memorable experience for guests."
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
            <h3 className="mb-3">USP of SabeeApp</h3>
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
