import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../picatic-e-ticket/pic.module.scss";

const uspData = [
  {
    "title": "Multi-faceted Platform",
    "content": "Picatic's platform isn't limited to ticket sales; it encompasses a wide array of functionalities. Event organizers can not only sell tickets but also efficiently promote their events and manage event spaces, creating a one-stop solution for all event-related needs."
  },
  {
    "title": "Founded on Experience",
    "content": "With a foundation established in <span style=\"color:#f95738 ;\"><strong>2012</strong></span>, Picatic has a substantial track record in the industry. This longevity suggests a wealth of experience and expertise in catering to the diverse needs of event organizers."
  },
  {
    "title": "Strategic Investor Backing",
    "content": "The company has garnered support from notable investors such as BDC Capital, Highline VC, and Sequoia Capital. This backing not only indicates the confidence of industry experts but also suggests a strong financial foundation for the platform's continued growth and development."
  },
  {
    "title": "AdTech and E-commerce Integration",
    "content": "Picatic's presence in AdTech and E-commerce verticals suggests a tech-savvy approach, potentially incorporating advanced marketing and digital solutions into its platform for more effective event promotion and management."
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
            <h3 className="mb-3">USP of Picatic E-Ticket</h3>
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
