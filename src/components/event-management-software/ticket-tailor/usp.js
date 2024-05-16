import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Unbeatable Value",
    "content": "Flexible and fair pricing with no contracts or tiers. Claims to save <span style=\"color:#FC5185 ;\"><strong>73%</strong></span> on ticketing compared to a lead competitor."
  },
  {
    "title": "More than Ticketing",
    "content": "Ticket Tailor positions itself as a carbon-neutral B Corp, aiming to have a positive impact on the planet. Balances profit with purpose."
  },
  {
    "title": "Discover Live Events",
    "content": "Highlights various events using Ticket Tailor, showcasing its versatility."
  },
  {
    "title": "Data Security",
    "content": "Priority on data security with features like <span style=\"color:#FC5185 ;\"><strong>2 Factor</strong></span> Authentication, regular pen-testing, and sophisticated data encryption processes."
  },
  {
    "title": "Payments Compliance",
    "content": "All transactions processed by world-leading online payment providers, Stripe or PayPal. Adheres to the latest PCI DSS security measures."
  },
  {
    "title": "Uptime and Reliability",
    "content": "Boasts <span style=\"color:#FC5185 ;\"><strong>99.99%</strong></span> uptime, claiming better performance than Facebook, Twitter, and Eventbrite."
  },
  {
    "title": "Integration Compatibility",
    "content": "Works seamlessly with various online tools, including custom websites and CRM platforms."
  },
  {
    "title": "Getting Started",
    "content": "Offers free account setup, and the first <span style=\"color:#FC5185 ;\"><strong>5</strong></span> tickets are free to help users get started. Provides a demo call option with the team."
  },
  {
    "title": "Calculations",
    "content": "Provides a comparison of Ticket Tailor's pricing against Eventbrite's, claiming significant cost savings."
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
            <h3 className="mb-3">USP of Ticket Tailor</h3>
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
