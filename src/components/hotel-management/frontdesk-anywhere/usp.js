import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../frontdesk-anywhere/front.module.scss";

const uspData = [
  {
    "title": "Complete Property Management System (PMS)",
    "content": "<strong>Powerful Rate Management :</strong> The PMS includes a robust rate management feature. Hoteliers can set up separate room rates for different types, enabling them to sell more rooms at optimal rates every day. The system combines software recommendations with user expertise, giving control over pricing strategy."
  },
  {
    "title": "Booking Engine for Direct Revenue Boost",
    "content": "<strong>Real-Time Inventory Updates:</strong> The cloud-based PMS system ensures real-time updates of inventory. This means that when guests make bookings through the integrated booking engine, the availability is automatically adjusted across all distribution channels, preventing overbooking."
  },
  {
    "title": "Channel Manager for Extensive Reach",
    "content": "<strong>Connectivity with Major OTAs:</strong> The integrated channel manager connects with over <span style=\"color:#FC5185 ;\"><strong>350</strong></span> major distribution channels, including popular online travel agencies (OTAs) like Expedia, Booking.com, and Agoda. <br/><strong>Centralized Inventory Management:</strong> The channel manager facilitates centralized inventory management by connecting the property to <span style=\"color:#FC5185 ;\"><strong>130+</strong></span> OTAs, GDS (Global Distribution System), and vacation rental portals. This expands the property's reach and increases visibility."
  },
  {
    "title": "Custom-Made Hotel Websites",
    "content": "<strong>Unique Website Design:</strong> Frontdesk Anywhere offers custom-made hotel websites, moving away from generic templates. This unique design approach aims to enhance the property's online presence and, consequently, increase revenue."
  },
  {
    "title": "Secure Payment Processing",
    "content": "<strong>Tokenized Credit Card Numbers:</strong> The payment processing feature ensures security by receiving tokenized credit card numbers, which are stored in a secure vault. This enhances the overall safety of financial transactions."
  },
  {
    "title": "Global Presence and Recognition",
    "content": "<strong>Trusted by Hotels Worldwide:</strong> The mention of being trusted by hotels in over <span style=\"color:#FC5185 ;\"><strong>35</strong></span> countries, including notable establishments, emphasizes the global acceptance and reliability of Frontdesk Anywhere."
  },
  {
    "title": "Global Support",
    "content": "<strong>Comprehensive Support:</strong> Frontdesk Anywhere provides support in North America, Asia, and EMEA (Europe, Middle East, and Africa). This global support infrastructure ensures assistance for users across different regions."
  },
  {
    "title": "Data Security and Compliance",
    "content": "<strong>Secure Cloud Services:</strong> The platform complies with industry standards such as PCI DSS (Payment Card Industry Data Security Standard) and utilizes Microsoft Azure for secure cloud services. This commitment to data security reassures users about the protection of sensitive information."
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
            <h3 className="mb-3">USP of Frontdesk Anywhere</h3>
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
