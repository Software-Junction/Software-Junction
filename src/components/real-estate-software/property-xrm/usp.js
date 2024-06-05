import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../property-xrm/property-xrm.module.scss";

const uspData = [
  {
    "title": "Unified Platform",
    "content": "Our software consolidates a vast range of functionalities, from accounting and asset management to lead capture and CRM, all within a single, unified platform. This integration ensures a seamless flow of information and enhances collaboration across different departments."
  },
  {
    "title": "Advanced Analytics",
    "content": "Gain deeper insights into your business with powerful analytics tools. From CRM analytics to marketing and sales reports, our software empowers you with the data-driven decision-making capability necessary for staying ahead in today's competitive landscape."
  },
  {
    "title": "Tailored Dashboards",
    "content": "Experience a customizable and intuitive dashboard that caters to your specific needs. Whether you're focused on CRM, sales, or marketing, our software allows you to create personalized dashboards for a quick and comprehensive overview."
  },
  {
    "title": "Versatile Marketing Tools",
    "content": "Maximize your marketing efforts with integrated tools such as email marketing, SMS marketing, campaign management, and social media integration. Create personalized campaigns, track their performance, and refine your strategies for optimal results."
  },
  {
    "title": "Compliance and Security",
    "content": "Stay compliant with GDPR regulations and ensure the security of your data. Our software is built with a focus on privacy and protection, giving you peace of mind regarding sensitive information."
  }
];
{
  /* <span style=\"color:#FC5185 ;\"><strong> */
}
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
            <h3 className="mb-3">USP of Property-xRM</h3>
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
