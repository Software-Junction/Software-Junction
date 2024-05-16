import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Integrated All-in-One Solution",
    "content": "DJUBO distinguishes itself by offering an all-encompassing hospitality management software that integrates various modules seamlessly. This eliminates the need for hotels to invest in and manage multiple standalone solutions."
  },
  {
    "title": "Focus on Online Bookings",
    "content": "DJUBO emphasizes its role as an online booking system, not just in terms of being cloud-based but also in driving more online bookings for hotels. This includes connectivity with online travel portals, meta-search engines, and the hotel's own booking engine."
  },
  {
    "title": "Interoperability",
    "content": "DJUBO places importance on the interoperability of its modules, ensuring that different components seamlessly interact with each other. This promotes a unified user experience and efficient management of all available modules through a single login."
  },
  {
    "title": "Future Roadmap",
    "content": "DJUBO's roadmap includes plans for further enhancements, such as the development of a concierge app, exploration of Internet of Things (IoT) applications, in-stay feedback solicitation, and deeper functionality in areas like accounting, store management, and more."
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
            <h3 className="mb-3">USP of DJUBO</h3>
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
