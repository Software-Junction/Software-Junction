import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../shawman/shaw.module.scss";

const uspData = [
  {
    "title": "Centralized Operations with Head Office and Unit Concept",
    "content": "The concept of Head Office and unit management allows for centralized control of rates and business processes across a chain of hotels. This ensures consistency and streamlined operations for multi-location businesses."
  },
  {
    "title": "Integrated Modules for Complete Property Management",
    "content": "ShawMan PMS offers a modern solution with integrated modules covering every aspect of property management. This includes room management, guest preferences, reservations, and information analysis."
  },
  {
    "title": "Central Reservation System for Online Bookings",
    "content": "The Central Reservation System facilitates online bookings from travel agents and individual travelers over the Internet. This ensures efficient reservation handling and seamless communication between the central system and specific properties."
  },
  {
    "title": "Revenue Generation Tool - \"Book Our Table\"",
    "content": "ShawMan PMS includes a revenue-generating feature called \"Book Our Table,\" providing a simple and effective way to enhance income. This feature likely streamlines the reservation process and contributes to increased revenue for the hospitality business."
  },
  {
    "title": "Long-standing Industry Leadership",
    "content": "ShawMan Technologies, the provider of ShawMan PMS, has been a leader in the HoReCa (Hotel, Restaurant, and Catering) industry for more than <span style=\"color:#FC5185 ;\"><strong>25 years.</strong></span> This extensive experience signifies reliability and expertise in delivering technology solutions."
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
            <h3 className="mb-3">USP of ShawMan PMS</h3>
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
