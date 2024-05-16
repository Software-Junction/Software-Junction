import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Unifying Marketing, Sales, and Support Teams",
    "content": " <span style=\"color:#FC5185 ;\"><strong>Aavaz 360</strong></span> facilitates collaboration among different departments within a company. Marketing, sales, and support functions work together seamlessly, sharing insights and information to provide consistent and effective customer experiences."
  },
  {
    "title": "Breaking Down Barriers to Multi-channel Conversations",
    "content": "This feature ensures that businesses can communicate with their customers across different channels such as email, phone, social media, and more. <span style=\"color:#FC5185 ;\"><strong> Aavaz 360</strong></span> removes obstacles that might hinder communication, ensuring a smooth flow of interactions."
  },
  {
    "title": "Creating Fluid and Engaging Experiences",
    "content": "By facilitating smooth conversations across channels, <span style=\"color:#FC5185 ;\"><strong>Aavaz 360 </strong></span>helps businesses create engaging experiences for their customers. This includes personalized interactions tailored to individual needs, enhancing customer satisfaction and loyalty."
  },
];
{
  /* <span style=\"color:#FC5185 ;\"><strong> */
}
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
            <h3 className="mb-3">USP of Aavaz</h3>
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
