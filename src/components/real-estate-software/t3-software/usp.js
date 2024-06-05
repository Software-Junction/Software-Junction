import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../t3-software/t3-software.module.scss";

const uspData = [
  {
    "title": "Product Portfolio",
    "content": "T3 Softwares offers a diverse range of products, including CRM and ERP solutions tailored for specific industries such as Manufacturing, Hospitality, Real Estate, and more. The showcased products include ERP solutions for Production Management, Accounting, Inventory Management, Web-Based functionalities, Multi-Company management, Purchasing, Payroll, and Sales."
  },
  {
    "title": "Industry Focus",
    "content": "T3 Softwares caters to various industries, including Warehouse, Garment, Travel, Medical, Manufacturing, Banking, Real Estate, Hospitality, Paint Manufacturing, Plastic Manufacturing, Retail, Packaging, Furniture, Media, Advertising, and Aviation."
  },
  {
    "title": "Service Offerings",
    "content": "T3 Softwares provides services in CRM, ERP, Mobile CRM, and Call Center Management. The services aim to centralize and manage business operations efficiently, offering features like real-time information access and compliance monitoring."
  },
  {
    "title": "Featured Services",
    "content": "T3 emphasizes Application Outsourcing, providing flexibility to organizations while reducing overhead. Android Apps Development is highlighted as a service, positioning clients in a fast-growing market. Web Application development is offered with a detailed scoping process and Agile methodology."
  },
  {
    "title": "Business Consultancy",
    "content": "T3 Softwares Consulting specializes in Business Automation Projects, leveraging expertise and a proven track record."
  },
  {
    "title": "Product By Cities and Countries",
    "content": "T3 Softwares serves various cities and countries, showcasing a global presence in providing CRM and ERP solutions."
  },
  {
    "title": "Industry Verticals",
    "content": "The company specializes in CRM solutions for Real Estate, Pharma, Human Resource Management, and Warehouse Management."
  }
];
{/* <span style=\"color:#FC5185 ;\"><strong> */}
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
            <h3 className="mb-3">USP of T3 Softwares</h3>
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
