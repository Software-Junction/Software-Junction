import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../smart/smart.module.scss";

const uspData = [
  {
    "title": "World's Most Advanced",
    "content": "<strong>Cutting-Edge Technology :</strong> SmartLib employs state-of-the-art technology to offer the most advanced features and capabilities in the realm of library management software.<br/><br/><strong>Continuous Innovation :</strong> The commitment to being the 'world's most advanced' implies ongoing research and development efforts to stay ahead of industry trends and user needs."
  },
  {
    "title": "Best-in-Class Recognition",
    "content": "<strong>Industry Leadership :</strong> Being recognized as the best-in-class indicates that SmartLib is a leader in the library management software industry, surpassing competitors in terms of functionality, user experience, and overall performance."
  },
  {
    "title": "Comprehensive Management",
    "content": "<strong>All-Encompassing Features :</strong> SmartLib covers a wide range of library tasks, including cataloging, circulation, acquisitions, and reporting. This ensures that libraries have a single, integrated solution for all their management needs.<br/><br/><strong>Workflow Integration :</strong> The software seamlessly integrates with various library workflows, providing a unified platform for staff to perform their duties efficiently."
  },
  {
    "title": "Emphasis on Advanced Technology",
    "content": "<strong>Incorporation of AI and Automation :</strong> SmartLib's emphasis on advanced technology likely includes the incorporation of artificial intelligence (AI) and automation to enhance efficiency and decision-making within the software.<br/><br/><strong>Integration with Emerging Technologies :</strong> The software might integrate with emerging technologies, such as RFID systems or data analytics, to provide libraries with cutting-edge tools for resource management and analysis."
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
            <h3 className="mb-3">USP of SmartLib</h3>
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
