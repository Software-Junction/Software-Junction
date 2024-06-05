import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../stayflexi/flexi.module.scss";

const uspData = [
  {
    "title": "Efficient Onboarding",
    "content": "The claim of onboarding in <span style=\"color:#FC5185 ;\"><strong>10 minutes</strong></span> highlights the platform's user-friendly nature. This likely involves a straightforward setup process, intuitive interfaces, and possibly automated tools to facilitate a quick start for users."
  },
  {
    "title": "Uber for Hotels - bidflexi",
    "content": "This feature, bidflexi, is compared to Uber in that it connects unsold hotel rooms with last-minute travelers. This suggests a dynamic, on-demand model for accessing hotel accommodations, potentially at discounted rates for spontaneous bookings."
  },
  {
    "title": "Global Trust",
    "content": "The mention of over <span style=\"color:#FC5185 ;\"><strong>2000</strong></span> properties worldwide trusting Stayflexi implies a widespread adoption and acceptance within the global hospitality market. Trust is a crucial factor in the industry, and this point emphasizes the platform's reliability."
  },
  {
    "title": "Operating System for Hospitality",
    "content": "Describing Stayflexi as the \"operating system for hospitality\" suggests that it serves as a central hub for managing various aspects of a hospitality business. It aims to simplify and integrate operations, distribution, payments, and guest experiences."
  },
  {
    "title": "Automated AI-Powered PMS",
    "content": "The Operations Hub features an AI-powered Property Management System (PMS), emphasizing automation to streamline property operations. This could include tasks such as room bookings, check-ins, and other operational processes, reducing the need for manual intervention."
  },
  {
    "title": "Sales Optimization",
    "content": "The Sales Hub focuses on driving additional revenue through direct bookings. It aims to streamline sales processes across online channels, offline channels, and corporate accounts, potentially maximizing revenue streams for the properties."
  },
  {
    "title": "Guest Journey Streamlining",
    "content": "The Guest Hub is designed to enhance the entire guest journey. This includes providing flexible reservation options and improving post-stay feedback, indicating a focus on delivering a seamless and positive guest experience."
  },
  {
    "title": "Payment Automation and Protection",
    "content": "The Payments Hub automates payment processes, aiming to reduce last-minute cancellations. It supports multiple currencies and payment methods, providing flexibility to accommodate a diverse range of guests. The <span style=\"color:#FC5185 ;\"><strong>360-degree</strong></span> chargeback protection indicates a commitment to securing financial transactions."
  },
  {
    "title": "Flexibility for Different Property Types",
    "content": "Stayflexi is adaptable to various types of properties, including hotels, vacation rentals, groups, camp sites, and hostels. This showcases versatility and the ability to cater to the specific needs of different types of hospitality businesses."
  },
  {
    "title": "Extensive Integrations",
    "content": "The platform integrates with over <span style=\"color:#FC5185 ;\"><strong>100</strong></span> booking channels and supports <span style=\"color:#FC5185 ;\"><strong>50+</strong></span> currencies. This interoperability is essential for hoteliers, allowing them to seamlessly connect with various tools and platforms, facilitating efficient business operations."
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
            <h3 className="mb-3">USP of Stayflexi</h3>
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
