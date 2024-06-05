import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../astral/astral.module.scss";

const uspData = [
  {
    "title": "Expertise in Development",
    "content": "The company emphasizes its development process, indicating a focus on guiding clients from the initial idea through design, construction, and execution. They claim to offer suggestions and answer questions to ensure the client's solution works efficiently with the latest technology."
  },
  {
    "title": "User-Centric Design",
    "content": "Astral Technologies highlights the importance of user experience in their development process. They mention that their applications not only look good but also provide a great user experience, enabling users to be efficient and effective in their tasks."
  },
  {
    "title": "Diverse Portfolio",
    "content": "The company showcases a diverse portfolio, featuring projects such as Construction ERP Software, Multi-Location Inventory Tracking System, Portal Development, and Cafe Management System. This diversity suggests adaptability and expertise across various domains."
  },
  {
    "title": "Global Reach",
    "content": "While specific projects are highlighted in locations like Saudi Arabia, Navi Mumbai, Kolkata, India, and Bhutan, the company's global reach is implied through its capability to develop solutions for clients worldwide."
  },
  {
    "title": "Range of Services",
    "content": "In addition to product offerings, Astral Technologies provides a range of services, including Application Development, ERP/CRM Solutions, Web, and Enterprise Portal Development, Website Design & Development, Ecommerce Development, and Mobile Apps for both Android and IOS platforms."
  }
];
{/* <span style=\"color:#FC5185 ;\"><strong> */}
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
            <h3 className="mb-3">USP of Astral Technologies</h3>
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
