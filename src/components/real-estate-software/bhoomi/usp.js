import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Separate Installation for Customization",
    "content": "Tailor the BMS to fit your business requirements with a separate installation, allowing for personalized configurations and optimizations."
  },
  {
    "title": "Cloud-Based System on Google Cloud",
    "content": "Experience the advantages of a cloud-based solution, with the BMS running on Google Cloud for reliability, accessibility, and seamless collaboration."
  },
  {
    "title": "Stringent Data Privacy Policy",
    "content": "Ensure the security of sensitive real estate data with a strict data privacy policy, instilling confidence in clients and complying with industry regulations."
  },
  {
    "title": "Reliable After Sales Policy",
    "content": "Benefit from a dependable after-sales policy, offering support and assistance to guarantee a smooth and efficient operation of the BMS for the long term."
  },
  {
    "title": "Impressive Track Record",
    "content": "<span style=\"color:#FC5185 ;\"><strong> With 18,000 </strong></span> leads handled per day, <span style=\"color:#FC5185 ;\"><strong> 800 projects </strong></span> managed till date, <span style=\"color:#FC5185 ;\"><strong>  2,500 users </strong></span> on the BMS, and <span style=\"color:#FC5185 ;\"><strong> 30,000 units </strong></span> sold till date, the BMS has a proven track record of success in the real estate industry."
  },
  {
    "title": "Startup India Recognized",
    "content": "Gain confidence in the BMS's credibility, as it is recognized by Startup India, reflecting innovation and compliance with industry standards."
  },
  {
    "title": "Media Recognition and Positive User Ratings",
    "content": "Acknowledged by Software Suggest and boasting positive user ratings, the BMS stands out as a reliable and well-regarded solution within the real estate software landscape."
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
            <h3 className="mb-3">USP of Bhoomi</h3>
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
