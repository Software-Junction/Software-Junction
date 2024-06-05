import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../active-net/act.module.scss";

const uspData = [
  {
    "title": "Integrated and Comprehensive Solution",
    "content": "ACTIVE Net® offers a unified solution for managing various aspects of recreation, including classes, facilities, memberships, camps, and more. The software integrates multiple functions into one user-friendly system, eliminating the need for organizations to use multiple systems for different tasks."
  },
  {
    "title": "Child Care Management with Safety Features",
    "content": "ACTIVE Net® includes features for managing child care programs, preschools, before and after school care, and summer camps. The software streamlines administrative work and ensures child safety with features such as medical alerts and authorizations."
  },
  {
    "title": "League Management Efficiency",
    "content": "From collegiate intramural leagues to youth leagues, ACTIVE Net® streamlines the management of leagues throughout the season. This includes registration, scheduling, field reservations, and more, saving time for both staff and participants."
  },
  {
    "title": "Robust Reporting Capabilities",
    "content": "The software provides extensive reporting features, allowing organizations to analyze their operations from multiple perspectives. This data-driven approach helps in identifying trends, improving targeted marketing, and making informed decisions."
  },
  {
    "title": "Fundraising and Donation Management",
    "content": "ACTIVE Net® includes fundraising software to help organizations reach their fundraising goals more efficiently. The software enables the setup of campaigns, provides customizable dashboards for quick views, and allows for online donation collection."
  },
  {
    "title": "Club Management for Health and Fitness",
    "content": "Web-based club management software facilitates the efficient running of health and fitness clubs. It includes features for handling multiple locations, membership management, and offers marketing resources to attract more members."
  },
  {
    "title": "Equipment and Locker Rentals Integration",
    "content": "ACTIVE Net® integrates equipment and locker rentals into its recreation management software, allowing users to check out items and associate them with customer accounts. This integration saves time and reduces errors in managing rental services."
  },
  {
    "title": "Success Stories (Case Studies)",
    "content": "The software showcases real-world success stories, such as the Town of Saugeen Shores in Ontario, Canada, and the Village of Hawthorn Woods, Illinois. These case studies highlight improvements in customer accessibility, increased enrollment, and revenue growth after adopting ACTIVE Net®."
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
            <h3 className="mb-3">USP of ACTIVE Net</h3>
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
