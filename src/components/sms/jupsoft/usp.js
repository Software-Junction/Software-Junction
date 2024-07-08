import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../jupsoft/jup.module.scss";

const uspData = [
  {
    "title": "Flexibility and Adaptability",
    "content": "Customizable Implementation: Jupsoft recognizes that each school is unique. The software allows for customized implementation, enabling schools to choose and add features and modules based on their specific requirements. This adaptability ensures that the software caters to the diverse needs of different educational institutions."
  },
  {
    "title": "Paperless and Green Initiative",
    "content": "Environmental Friendliness: Jupsoft eConnect-K12 contributes to a green initiative by significantly reducing paperwork. By promoting a paperless environment, the software helps schools save resources, time, and money while also aligning with sustainability goals."
  },
  {
    "title": "Trusted by a Large User Base",
    "content": "Proven Track Record: The software has earned the trust of <span style=\"color:#f95738 ;\"><strong>over 300</strong></span> schools and colleges, serving more than 500,000 students and teachers. This track record establishes Jupsoft eConnect-K12 as a reliable and preferred choice in the education sector."
  },
  {
    "title": "Integration Capabilities",
    "content": "Seamless Integration: Jupsoft eConnect-K12 seamlessly integrates with various tools and technologies. Examples include Tally for financial management, GPS for real-time fleet tracking, and barcode/RFID for efficient document management. This integration enhances the overall functionality and effectiveness of the software."
  },
  {
    "title": "Proven Industry Expertise",
    "content": "Established Reputation: Jupsoft Technologies, <span style=\"color:#f95738 ;\"><strong>established in 2004,</strong></span> has become a major player in the IT industry. The company specializes in providing integrated modules for educational institutions, showcasing technical expertise and a commitment to delivering projects on time and within budget. Positive long-term working relationships with clients further attest to the company's reputation and reliability."
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
            <h3 className="mb-3">USP of Jupsoft eConnect</h3>
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
