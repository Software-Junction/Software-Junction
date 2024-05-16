import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Effortless Floor Plan Management",
    "content": "Interactively manage your floor plans, receive instant updates, and facilitate real-time stall bookings. Raise personalized invoices effortlessly with our intuitive tools."
  },
  {
    "title": "Global Reach with Security",
    "content": "Access global audiences seamlessly while ensuring the highest standards of security. Simple integration processes make your events accessible to a broader audience."
  },
  {
    "title": "Ticketing Excellence",
    "content": "Sell tickets round the clock, cross-sell during registration, generate e-tickets, and receive instant payments. Our platform simplifies the ticketing process, making it efficient and user-friendly."
  },
  {
    "title": "Education Management",
    "content": "Accept student applications online, collect fees instantly with multiple payment options, and generate student reports effortlessly. Streamline your educational processes with EventAvenue."
  },
  {
    "title": "Donation Collection Made Easy",
    "content": "Collect donations globally with multiple payment options, backed by in-built data storage facilities. For certified NGOs, leverage FIRC for <span style=\"color:#FC5185 ;\"><strong>80G</strong></span> compliance effortlessly."
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
            <h3 className="mb-3">USP of EventAvenue</h3>
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
