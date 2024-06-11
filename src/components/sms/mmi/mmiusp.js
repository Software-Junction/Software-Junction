import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Efficient Communication Channels",
    "content": "The software is designed to streamline communication between parents and teachers. Through mobile or tablet platforms, it reduces data entry efforts and facilitates effective communication. Additionally, the bilingual option caters to parents from diverse linguistic backgrounds, promoting inclusive communication."
  },
  {
    "title": "Customizable to Institutional Requirements",
    "content": "MMI understands that every educational institution is unique. Hence, our School Software is agile and can be easily customized according to the specific requirements of each institution. This flexibility ensures that the software adapts seamlessly to the diverse needs of different schools."
  },
  {
    "title": "Electronic Information Storage",
    "content": "MMI's School Management Software guarantees secure and efficient electronic storage of all information. By digitizing the data management process, it eliminates the hassles associated with traditional paperwork and ensures a smooth school management system."
  },
  {
    "title": "Secure and Flexible School Accounting",
    "content": "The software is designed to provide a secure and flexible school accounting system. Schools can rely on it for effective financial management, ensuring that accounting processes are not only streamlined but also adhere to the highest standards of security."
  }
];
{/* <span style=\"color:#f95738 ;\"><strong> */}
const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Mmiusp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of MMI-School Management Software</h3>
          </Col>
          {uspData.map((item, index) => (
            <Col lg={4} className="mb-4" key={index}>
              <div
                className={`${styles["mmi-box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
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

export default Mmiusp;
