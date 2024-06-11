import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../proqsmart/pro.module.scss";

const uspData = [
  {
    "title": "Efficiency and Cost Savings",
    "content": "ProQsmart promises to streamline CapEx procurement processes, enabling faster project deliveries by awarding contracts to the right vendors at the right price and on time. It claims to save upwards of <span style=\"color:#f95738 ;\"><strong>40%</strong></span> on procurement time and <span style=\"color:#f95738 ;\"><strong>10%</strong></span> on direct costs."
  },
  {
    "title": "AI-Powered Automation",
    "content": "The platform leverages the power of AI to automate processes and provide intelligent insights, facilitating more informed procurement decisions. This implies reduced manual effort and enhanced decision-making capabilities."
  },
  {
    "title": "Transparency and Compliance",
    "content": "ProQsmart emphasizes transparency and maximum savings, boasting a <span style=\"color:#f95738 ;\"><strong>65%</strong></span> reduction in touchpoints, <span style=\"color:#f95738 ;\"><strong>36%</strong></span> time saved, and improved compliance. This suggests enhanced transparency in procurement processes and better adherence to regulatory requirements."
  },
  {
    "title": "Ease of Use and Customization",
    "content": "With a focus on ease of use and customization, ProQsmart claims to offer a <span style=\"color:#f95738 ;\"><strong>50%</strong></span> faster implementation process and a <span style=\"color:#f95738 ;\"><strong>40%</strong></span> boost in customization potential without any coding required. This implies a user-friendly interface and flexibility to adapt to diverse business needs."
  },
  {
    "title": "Testimonials and Success Stories",
    "content": "The inclusion of testimonials from Megha Vijay, Head of Projects & Cost Management at Muffin Group, highlights real-world success stories and endorsements, adding credibility to the software's claims."
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
            <h3 className="mb-3">USP of ProQsmart</h3>
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
