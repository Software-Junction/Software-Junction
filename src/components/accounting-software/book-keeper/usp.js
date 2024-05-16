import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Comprehensive Customer Service",
    "content": "Provides various customer service options, including call, email, WhatsApp, and web chat, ensuring excellent support and assistance."
  },
  {
    "title": "GST Reports & Filing",
    "content": "Supports GST reporting and filing, ensuring compliance with tax regulations."
  },
  {
    "title": "Cheque Printing",
    "content": "Facilitates cheque printing, a valuable feature for businesses that require paper-based payments."
  },
  {
    "title": "Envelope Printing",
    "content": "Provides envelope printing functionality, enhancing professional correspondence."
  },
  {
    "title": "Warehouse Support",
    "content": "Offers warehouse management capabilities for businesses with multiple storage locations."
  },
  {
    "title": "Nepali Calendar Support",
    "content": "Includes support for the Nepali calendar, catering to businesses in the Nepali market."
  },
  {
    "title": "Multiple Invoice Themes",
    "content": "Provides a variety of invoice themes to match the branding and style of the business."
  },
  {
    "title": "Customizable Invoices",
    "content": "Offers the ability to customize invoices, making them unique to the business."
  },
  {
    "title": "Addon Reports",
    "content": "Offers additional reports to cater to specific business needs."
  },
  {
    "title": "Cheque Management",
    "content": "Provides a comprehensive solution for managing and tracking cheques."
  },
  {
    "title": "Integration with Tally and Busy",
    "content": "Supports data import/export from Tally and Busy, ensuring compatibility with existing accounting systems."
  },
  {
    "title": "Export to Tally",
    "content": "Allows for data export to Tally, ensuring data continuity for Tally users."
  }
];
{/* <span style=\"color:#FC5185 ;\"><strong> */}
const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Usp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of Book Keeper</h3>
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
