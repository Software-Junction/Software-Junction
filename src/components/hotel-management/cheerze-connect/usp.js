import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../cheerze-connect/cheer.module.scss";

const uspData = [
  {
    "title": "360° Smart Cloud-Based System",
    "content": "Cheerze Connect operates on a cloud-based system, implying that users can access the hotel management features from anywhere with an internet connection. This provides flexibility and convenience for hoteliers managing their properties remotely."
  },
  {
    "title": "Trusted Worldwide",
    "content": "The system has a global reach, serving more than <span style=\"color:#f95738 ;\"><strong>20</strong></span> countries and over <span style=\"color:#f95738 ;\"><strong>750</strong></span> properties. The testimonials from properties like Aaravi Hotel, G5 Hotel, Rathna Residency Hotel, and Delightz Inn add credibility, showcasing that the system is trusted by a diverse range of establishments."
  },
  {
    "title": "Customizable",
    "content": "The system is designed to be adaptable, catering to the specific needs of mid-size hoteliers, resorts, and restaurants. This customization capability ensures that the software can be tailored to fit the unique requirements of different properties."
  },
  {
    "title": "User-Defined Reports",
    "content": "The system includes a user-defined report feature, which serves as a Management Information System (MIS) tool. This allows users to generate customized reports, providing valuable insights for decision-making and strategic planning."
  },
  {
    "title": "Third-Party Integrations",
    "content": "Cheerze Connect seamlessly integrates with popular third-party platforms such as TripAdvisor, Tally, OYO, and Onity. This integration capability enhances the functionality of the system by connecting it with other widely used tools and services in the hospitality industry."
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
            <h3 className="mb-3">USP of Cheerze Connect</h3>
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
