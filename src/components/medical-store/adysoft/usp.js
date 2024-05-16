import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Alternate Medicine Suggestions",
    "content": "Provides the ability to find alternate medicines based on factors like type, generics, and formula, offering flexibility and options for medical practitioners."
  },
  {
    "title": "Profit and Loss Analysis",
    "content": "Offers detailed insights into the profit and loss associated with each medicine, enabling better financial management for the medical store."
  },
  {
    "title": "GST Ready",
    "content": "Specifically designed to meet the requirements of GST compliance, making it suitable for Pharma retailers, wholesalers, chemists, druggists, medicine shops, and various other medical establishments."
  },
  {
    "title": "Expertise in Software Development",
    "content": "Developed by Adysoft, a company with expertise in software development, offering a range of services including software prototyping, implementation, testing, debugging, installation, and maintenance."
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
            <h3 className="mb-3">USP of Adysoft Medical Store Management</h3>
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
