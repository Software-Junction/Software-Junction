import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../zencommerce/zencommerce.module.scss";

const uspData = [
  {
    title: "Zero Commission on Sales",
    content:
      'Unlike some e-commerce platforms, Zencommerce boasts a <span style="color:#FC5185 ;"><strong>0%</strong></span> commission on sales. This means that entrepreneurs can keep the entirety of their profits without a percentage being deducted by the platform.',
  },
  {
    title: "Graphic Themes and Payment System Included",
    content:
      "Zencommerce provides not only graphic themes for customization but also includes a payment system. This integrated approach simplifies the setup process for users, offering a streamlined experience for launching an online store.",
  },
  {
    title: "Flexibility in Design",
    content:
      "Zencommerce emphasizes the flexibility of its design, allowing users to create a visually appealing online store that adapts seamlessly to various devices such as desktops, tablets, and smartphones. This underscores the platform's commitment to providing a modern and responsive design.",
  },
  {
    title: "Over 250 Inbuilt Functions",
    content:
      'Zencommerce offers a comprehensive set of over <span style="color:#FC5185 ;"><strong>250</strong></span> inbuilt functions that can be controlled with a single mouse click. This simplifies the process for users, allowing them to focus on managing orders and growing their online business.',
  },
  {
    title: "Complete E-store Software with Integrations",
    content:
      "Zencommerce integrates with renowned Indian and international payment gateways, SMS services, and popular shipping companies. Users receive additional perks at sign-up, such as a free domain name, SMS credits, and a logistic voucher, contributing to the overall improvement of online sales.",
  },
  {
    title: "Modern Payment Solutions with Partnered Companies",
    content:
      'Zencommerce provides fast, safe, and competitive modern payment solutions with no setup fee. Partnering with reputable payment companies like CCavenue and PayU, the platform offers preferential rates starting from <span style="color:#FC5185 ;"><strong>1%</strong></span> commission, making it an attractive option for Indian e-commerce.',
  },
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
            <h3 className="mb-3">USP of Zencommerce</h3>
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
