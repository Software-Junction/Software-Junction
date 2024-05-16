import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Simplicity and User-Friendly Interface",
    "content": "Giddh offers an intuitive and easy-to-use interface, ideal for users with limited accounting knowledge."
  },
  {
    "title": "Cloud-Based Accessibility",
    "content": "Giddh is accessible from anywhere with an internet connection, providing flexibility and convenience."
  },
  {
    "title": "Integration Capabilities",
    "content": "Giddh can integrate with various business tools and software, automating data transfer and enhancing efficiency."
  },
  {
    "title": "Multi-User Collaboration",
    "content": "Multiple users can collaborate on accounting tasks, improving teamwork and productivity."
  },
  {
    "title": "Customization and Scalability",
    "content": "Giddh can be tailored to meet the unique needs of businesses and can scale with their growth."
  },
  {
    "title": "Real-Time Updates",
    "content": "Giddh provides real-time financial updates and reporting for informed decision-making."
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
            <h3 className="mb-3">USP of Giddh</h3>
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
