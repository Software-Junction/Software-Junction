import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../meri-dairy/meri-dairy.module.scss";

const uspData = [
  {
    title: "Ease of Use",
    content:
      "Allows for daily milk entries shift-wise (morning and evening). Entry can be made by ID or customer name. Text message (SMS) notifications to customers with each entry. Option to connect a mobile Bluetooth printer for printing.",
  },
  {
    title: "Customization",
    content:
      "Flexible rate chart updates based on Fat and SNF (Solid-Not-Fat) or fixed prices. Record keeping for milk sale and purchase in a mobile application. Multiple rate charts available for different categories.",
  },
  {
    title: "Security",
    content:
      "Data is stored securely on AWS Cloud servers. Accessible with a mobile number and password, ensuring data recovery even if the phone is lost or damaged. Capability to add a delivery boy for efficient milk delivery.",
  },
  {
    title: "Multi-Language Support",
    content:
      "Supports nine languages, including seven Indian languages and two international languages. Enables users to manage their dairy business activities in their preferred language.",
  },
  {
    title: "Payment Register",
    content:
      "Easy-to-use payment register for dairy software. Customizable for <span style=\"color:#f95738 ;\"><strong>10 days</strong></span> or <span style=\"color:#f95738 ;\"><strong>30 days</strong></span> based on user requirements.",
  },
];
{
  /* <span style=\"color:#f95738 ;\"><strong> */
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
            <h3 className="mb-3">USP of Meri Dairy</h3>
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
