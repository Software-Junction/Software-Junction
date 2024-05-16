import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Artificial Intelligence Integration",
    "content": "Pocket HRMS is the only HRMS in India with Microsoft GenAI and smHRt® AI. Revolutionizes employee management by leveraging AI-enabled HR operations for a futuristic approach."
  },
  {
    "title": "Advanced Technology and Intuitive User Experience",
    "content": "Offers advanced technology paired with an intuitive user experience tailored for modern HR professionals. Ensures a seamless and efficient HR management process through the integration of cutting-edge technology."
  },
  {
    "title": "Customer Testimonials",
    "content": "Positive feedback from clients like Ignatius Software, TESSOL, and EvolveBack emphasizes the ease of data monitoring and HR analytics facilitated by Pocket HRMS. Highlights the excellent service support provided by the support team."
  },
  {
    "title": "Futuristic Vision for Digital Bharat 2.0",
    "content": "Positions itself as a key player in contributing to the vision of Digital Bharat <span style=\"color:#FC5185 ;\"><strong>2.0.</strong></span> Aligns with the future of the HR industry by incorporating AI and cloud-based technology."
  },
  {
    "title": "Global Presence",
    "content": "Indicates a presence in major cities across India, including Mumbai, Delhi, Chennai, Bangalore, Hyderabad, Pune, Kolkata, Jaipur, Indore, and Ahmedabad. Offers accessibility and support to a wide geographical audience."
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
            <h3 className="mb-3">USP of Pocket HRMS</h3>
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
