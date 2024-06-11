import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../qmarksoft/qmark.module.scss";

const uspData = [
  {
    "title": "No Installation Hassle",
    "content": "Users are relieved from the burden of software installation. This feature ensures that users can start using the software immediately without the need for time-consuming installations."
  },
  {
    "title": "Security and Data Safety",
    "content": "The software emphasizes the importance of data security, featuring multi-user and multi-level security measures. This ensures that lab data is kept confidential and protected from unauthorized access."
  },
  {
    "title": "Advanced Reporting Features",
    "content": "The software boasts advanced reporting formats, providing labs with instant report generation capabilities. Additionally, the absence of data limits allows for efficient and limitless reporting."
  },
  {
    "title": "Offline Capability",
    "content": "The offline version of the software allows users to have complete control over their data, even in the absence of an internet connection. This can be crucial for ensuring uninterrupted lab operations."
  },
  {
    "title": "Multifunctional Features",
    "content": "The software is equipped with a variety of features such as unlimited data management, barcode and QR code usage, SMS, email, and WhatsApp integration, PDF generation, incentive reports, agent management, and more. These features aim to streamline lab operations and enhance efficiency."
  },
  {
    "title": "Customization and Branding",
    "content": "Users have the flexibility to customize the software according to their preferences. This includes setting fonts, sizes, colors, logos, and more. The availability of white-label branding allows users to tailor the software to their specific branding requirements."
  },
  {
    "title": "Comprehensive Reporting and Analysis",
    "content": "The software provides a rich set of admin reports, allowing for detailed reporting on various aspects of lab operations. Features like TAT reports, incentive analysis, and expense management contribute to comprehensive reporting and analysis."
  },
  {
    "title": "Franchisee and Market Place Integration",
    "content": "For scalability and reach, the software includes a franchisee management system with dedicated portals. Additionally, a marketplace website integration allows for broader access and streamlined operations."
  },
  {
    "title": "Educational and Health Features",
    "content": "Qmarksoft offers a range of software solutions beyond pathology, catering to schools, hospitals, educational institutes, and other related industries."
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
            <h3 className="mb-3">USP of Qmarksoft</h3>
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
