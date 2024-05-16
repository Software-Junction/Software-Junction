import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Global Trust",
    "content": "Trusted by universities and nonprofits across <span style=\"color:#FC5185 ;\"><strong>20+</strong></span> countries, Dryfta has become the go-to choice for renowned institutions like Johns Hopkins University, Delft University, and more. Its global footprint underscores its reliability and effectiveness."
  },
  {
    "title": "Revenue Optimization",
    "content": "Maximize revenue with advanced ticketing software that allows for the creation of various ticket types, memberships, workshops, and sponsorship packages. Collect payments online, manage orders, and leverage event marketing tools for increased ticket sales."
  },
  {
    "title": "Virtual Event Excellence",
    "content": "Elevate your events with Dryfta's Virtual Event Toolkit, offering high-definition livestream, interactive features, and monetization options for virtual meetings. It replaces standalone virtual meeting tools like Zoom or Google Meet."
  },
  {
    "title": "Intelligent Automation",
    "content": "From event scheduling to abstract management, Dryfta employs intelligent automation to save time and effort. Automated scheduling, reviewer assignments, and communications ensure a smoother workflow for organizers."
  },
  {
    "title": "Promotion Powerhouse",
    "content": "Boost your event's visibility with the EventBoost platform. Effortlessly submit your event to over <span style=\"color:#FC5185 ;\"><strong>100+</strong></span> high-traffic listing sites, choose tailored promotion strategies, and access real-time performance insights for data-driven decision-making."
  },
  {
    "title": "Real-Time Insights",
    "content": "Track, analyze, and optimize your event performance in real-time. Generate reports, share insights, and enhance attendee engagement with personalized communications. The platform's analytics provide a snapshot of your event's success."
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
            <h3 className="mb-3">USP of Dryfta</h3>
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
