import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Branded Apps",
    "content": "Schools can have their own branded app listed in the Google Play Store with the school's name and logo, providing a distinct digital presence."
  },
  {
    "title": "Automation",
    "content": "Offers data entry automation through tight integrations with various technologies such as GPS, barcode, attendance machines, and mobile phones, streamlining administrative tasks."
  },
  {
    "title": "Compliance",
    "content": "Generates reports, certificates, and receipts in accordance with the guidelines of educational boards such as CBSE, ICSE, IB, and State Boards, ensuring regulatory compliance."
  },
  {
    "title": "Multilingual",
    "content": "Supports multiple languages, with Unicode compatibility in forms, reports, and apps, catering to diverse linguistic preferences."
  },
  {
    "title": "3rd Party Aware",
    "content": "Excel-friendly software, facilitating easy data import from existing software and export to Tally, ensuring compatibility with widely used third-party tools."
  },
  {
    "title": "Experience",
    "content": "<span style=\"color:#f95738 ;\"><strong>Developed since 2008,</strong></span> eSchoolApp has undergone continuous evolution based on feedback from millions of end-users. This extensive experience contributes to a highly evolved, tried, and tested product."
  }
  
];
{/* <span style=\"color:#f95738 ;\"><strong> */}
const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Escusp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of eSchoolApp</h3>
          </Col>
          {uspData.map((item, index) => (
            <Col lg={4} className="mb-4" key={index}>
              <div
                className={`${styles["esc-box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
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

export default Escusp;
