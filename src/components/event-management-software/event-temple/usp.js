import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Award-Winning Solution",
    "content": "Highlight the fact that Event Temple has been voted <span style=\"color:#FC5185 ;\"><strong>#1</strong></span> in the world for Best Event Management and Best Group Sales for Hotels in <span style=\"color:#FC5185 ;\"><strong>2021</strong></span>, <span style=\"color:#FC5185 ;\"><strong>2022</strong></span>, and <span style=\"color:#FC5185 ;\"><strong>2023</strong></span>. The consecutive wins establish credibility and excellence in the industry."
  },
  {
    "title": "Time and Revenue Optimization",
    "content": "Position Event Temple as a solution that helps hotels and venues save time and increase revenue. The claim of saving <span style=\"color:#FC5185 ;\"><strong>5 hours</strong></span> per week on sales and operations admin tasks can be a compelling factor."
  },
  {
    "title": "Efficient CRM and Sales Automation",
    "content": "Highlight the CRM capabilities, particularly the ability to generate digital proposals, contracts, and invoices within <span style=\"color:#FC5185 ;\"><strong>30 seconds</strong></span>. Stress the <span style=\"color:#FC5185 ;\"><strong>50%</strong></span> faster response time to inquiries compared to competitors and the <span style=\"color:#FC5185 ;\"><strong>three times</strong></span> more follow-ups, showcasing efficiency in the sales process."
  },
  {
    "title": "Customer Testimonials",
    "content": "Leverage positive customer testimonials to showcase real-world success stories. Highlight statements from satisfied users such as Rick King, Sandy Lunger McDavid, and Jasmin Marcus, to build trust and credibility."
  },
  {
    "title": "Global Trust",
    "content": "Mention that Event Temple is trusted by thousands of users in <span style=\"color:#FC5185 ;\"><strong>40</strong></span> countries, reinforcing its global reputation."
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
            <h3 className="mb-3">USP of Event Temple</h3>
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
