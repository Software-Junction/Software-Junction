import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../winhms/winhms.module.scss";

const uspData = [
  {
    title: "Comprehensive Module Integration",
    content:
      "WINHMS offers a complete suite of modules covering both front and back-office operations, material management, point-of-sale, and specialized modules. This ensures that all aspects of hotel management are efficiently addressed from a single platform.",
  },
  {
    title: "Material Management and Cost Control",
    content:
      "The Material Management module, covering purchasing, inventory, and F&B costing, underscores the software's attention to controlling and optimizing material usage, contributing to cost management for the property.",
  },
  {
    title: "Point-of-Sale Excellence",
    content:
      "The Point-of-Sale module is positioned as a critical component that enriches the guest experience at F&B outlets. This emphasizes the software's role in enhancing the overall dining experience for guests.",
  },
  {
    title: "Testimonials and Client Satisfaction",
    content:
      "Positive testimonials from clients, including well-known hotels such as Ramada, Grandeur Hotel, and Rose Garden Hotel Apartments, serve as a testament to the software's reliability, customer service, and its positive impact on day-to-day hotel operations.",
  },
  {
    title: "Proven Track Record",
    content:
      'Having been in business since <span style="color:#f95738 ;"><strong>2000</strong></span>, WINHMS has served over <span style="color:#f95738 ;"><strong>1400</strong></span> clients across <span style="color:#f95738 ;"><strong>20+</strong></span> countries, showcasing its longevity and successful implementation on a global scale.',
  },
  {
    title: "Responsive Customer Support",
    content:
      "The presence of dedicated sales and support teams in India and the UAE, along with provided contact information, highlights the software's commitment to providing reliable customer support.",
  },
];
{
  /* <span style=\"color:#f95738 ;\"><strong> */
}
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
            <h3 className="mb-3">USP of WINHMS</h3>
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
