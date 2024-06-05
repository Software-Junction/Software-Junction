import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../ezee-absolute/ezee.module.scss";

const uspData = [
  {
    "title": "All-in-One Cashiering Center",
    "content": "The system consolidates billing and payment management into a centralized cashiering center. This streamlines financial operations by allowing the management of bills and payments for company accounts and travel agents from one place."
  },
  {
    "title": "Centralized Credit Card Center",
    "content": "The cloud-based hotel management system features a centralized credit card center. This functionality allows for the verification, capture, authorization, refund, and other credit card operations to be performed seamlessly from a single platform."
  },
  {
    "title": "Stable Hotel Channel Manager",
    "content": "The hotel channel manager is connected with <span style=\"color:#FC5185 ;\"><strong>130+</strong></span> online travel agencies (OTAs), global distribution systems (GDS), and vacation rental portals. This connectivity maximizes the hotel's reach by distributing inventory across a wide range of platforms."
  },
  {
    "title": "Smart Yield Management",
    "content": "The system automatically adjusts room rates based on occupancy levels. This smart yield management ensures that room rates are optimized according to demand, helping to maximize revenue."
  },
  {
    "title": "Direct Booking Engine",
    "content": "The booking engine enables direct reservations from the hotel's website without incurring commissions. This provides a cost-effective solution for increasing direct bookings and maintaining control over the booking process."
  },
  {
    "title": "Metasearch Engine Connectivity",
    "content": "Integration with popular metasearch engines like TripAdvisor, Trivago, and Google Hotel Ads enhances the visibility of the hotel. This connectivity helps attract more bookings by reaching potential guests on these widely used platforms."
  },
  {
    "title": "Restaurant POS Integration",
    "content": "The system integrates with popular food delivery platforms like Zomato, Swiggy, UberEats, and FoodPanda. This integration streamlines online orders and inventory management for the restaurant, providing a seamless experience for both customers and staff."
  },
  {
    "title": "Dedicated Customer Support",
    "content": "eZee Absolute offers <span style=\"color:#FC5185 ;\"><strong>24x7x365</strong></span> live support through chat, emails, and calls. This ensures that users receive ongoing assistance and support whenever they need it."
  },
  {
    "title": "Global Presence",
    "content": "With users in over <span style=\"color:#FC5185 ;\"><strong>170</strong></span> countries and serving leading properties worldwide, eZee Absolute has established a strong global presence. This wide adoption speaks to its reliability and effectiveness in catering to diverse hospitality industry needs."
  },
  {
    "title": "PCI DSS Certified and High Uptime",
    "content": "The system is PCI DSS certified, ensuring compliance with stringent security standards. Additionally, it boasts a <span style=\"color:#FC5185 ;\"><strong>99.99%</strong></span> uptime, providing users with a reliable and stable platform for their operations."
  },
  {
    "title": "Integration with Third-Party Solutions",
    "content": "eZee Absolute is integrated with over <span style=\"color:#FC5185 ;\"><strong>500</strong></span> third-party solutions. This extensive integration enhances the software's capabilities by providing users with a comprehensive ecosystem of tools and services to support their hospitality business."
  },
  {
    "title": "Tailored for Specific Markets",
    "content": "The software is customized to meet the specific norms and requirements of various countries, including India, South Africa, Oman, Malaysia, and Thailand. This customization ensures that the system aligns with local regulations and business practices."
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
            <h3 className="mb-3">USP of eZee Absolute</h3>
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
