import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../sirvoy-booking-system/sir.module.scss";

const uspData = [
  {
    "title": "Commission-Free Direct Bookings",
    "content": "The Booking Engine allows accommodation providers to accept commission-free direct bookings through their own websites. The responsive design ensures that guests can make bookings easily using any device."
  },
  {
    "title": "Seamless Channel Management",
    "content": "Sirvoy's Channel Manager facilitates direct connections to major booking channels and travel websites, including Booking.com, Expedia, Airbnb, Google Hotel Ads, and more. Two-way integrations save time by automatically updating availability and bookings across all channels."
  },
  {
    "title": "Global Reach and Multilingual Support",
    "content": "Sirvoy serves thousands of hotels in over <span style=\"color:#f95738 ;\"><strong>115</strong></span> countries, with its Booking Engine available in <span style=\"color:#f95738 ;\"><strong>20+</strong></span> languages. This global reach enhances the software's applicability to diverse hospitality markets."
  },
  {
    "title": "Free Trial Period",
    "content": "Potential users can try Sirvoy free for <span style=\"color:#f95738 ;\"><strong>14</strong></span> days to explore its features and determine the most suitable plan for their property. This demonstrates confidence in the product and allows users to experience its benefits firsthand."
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
            <h3 className="mb-3">USP of Sirvoy Booking System</h3>
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
