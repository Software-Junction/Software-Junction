import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  
    {
      "content": "Simple to use for freelancers and very small businesses."
    },
    {
      "content": "All plans include time tracking, plus the ability to add billable hours and billable expenses to invoices."
    },
    {
      "content": "Seamlessly integrates with other Zoho products and third-party apps."
    },
    {
      "content": "Mobile app lets you reply to clients' questions and notifies you when invoices have been viewed or are overdue."
    },
    {
      "content": "8 a.m. to 8 p.m. Eastern time phone support Monday through Friday."
    },
    
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
            <h3 className="mb-3">USP of Freshbooks</h3>
          </Col>
          {uspData.map((item, index) => (
            <Col lg={4} className="mb-4" key={index}>
              <div
                className={`${styles["box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
              >
                {/* <h5>{item.title}</h5>
                <br /> */}
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
