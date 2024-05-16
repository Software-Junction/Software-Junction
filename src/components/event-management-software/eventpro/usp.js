import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Efficient Venue and Catering Management",
    "content": "Venue Management: Effectively handles all aspects of venue booking, including calendar management, setup resources, catering, beverage, staffing, budgeting, and invoicing. Catering Management: Whether catering is a primary business focus or just one aspect of event planning, EventPro offers in-depth, powerful, and flexible catering-specific features."
  },
  {
    "title": "Productivity Boost",
    "content": "EventPro saves time and boosts productivity with a user-friendly interface, streamlining room scheduling, catering, and event management. The software is designed to help businesses optimize venue use, provide better service, and add more value to events."
  },
  {
    "title": "Flexible Deployment and Support Services",
    "content": "Clients can choose from On-Premise or Cloud deployment based on their specific needs. EventPro offers a range of services, including premium support, upgrade protection, training packages, data setup, configuration, user interface customization, custom report building, and software development."
  },
  {
    "title": "Testimonials and Endorsements",
    "content": "Positive testimonials from clients, such as the endorsement from Jenny McAlloon of Sunshine Convention Centre, Victoria University, highlight the software's evolution with businesses and its recommendation for all-purpose venue, catering, and events software."
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
            <h3 className="mb-3">USP of EventPro</h3>
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
