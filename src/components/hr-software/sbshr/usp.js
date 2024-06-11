import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../sbshr/sbs.module.scss";

const uspData = [
  {
    "title": "End-to-End HR Outsourcing",
    "content": "We provide a holistic solution covering every aspect of HR outsourcing, ensuring that your organization's human resources functions are seamlessly managed from start to finish."
  },
  {
    "title": "Streamlined Payroll Services",
    "content": "Say goodbye to month-end marathons. Our software allows your teams to process salaries, make changes, and take actions throughout the month, eliminating the stress of piled-up paperwork on the last day."
  },
  {
    "title": "Automated Statutory Compliance",
    "content": "SBS automates every step of compliance, including PF calculations, Tax, TDS, LWF, and more. Forget about worries related to authorities, deadlines, or manual work - our software ensures complete compliance effortlessly."
  },
  {
    "title": "Global PEO and Talent Acquisition",
    "content": "Explore our services for Global Professional Employer Organization (PEO) and seamless Talent Acquisition. Our expertise in these areas amplifies your HR management services, driving sustained growth and success for your organization on a global scale."
  },
  {
    "title": "Supportive HR Resources",
    "content": "Access our rich HR resources, including a blog, videos, HR library, HR calculator, and job listings. Stay informed and empowered with the tools you need for effective HR management."
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
            <h3 className="mb-3">USP of SBS HR</h3>
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
