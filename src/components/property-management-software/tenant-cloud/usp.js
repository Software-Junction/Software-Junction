import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Streamlined Rental Processes",
    content:
      "The platform facilitates various rental processes such as online rent collection, paperless lease agreements with e-signatures, customizable rental applications, and easy accounting with features like automatic invoicing, late fees, and receipts.",
  },
  {
    title: "Built-in Tenant Screening",
    content:
      "TenantCloud provides a built-in tenant screening feature, allowing landlords to run comprehensive background, credit, or full tenant checks on applicants directly within the application.",
  },
  {
    title: "Collaborative Tools",
    content:
      "TenantCloud facilitates collaboration by allowing multiple users, including landlords, tenants, and service professionals, to have their own accounts and access relevant features. This makes it easy for everyone involved in property management to stay connected.",
  },
  {
    title: "Customizable Reports",
    content:
      "TenantCloud allows users to generate customized reports, including essential financial reports like the <span style=\"color:#FC5185 ;\"><strong> 1099 Tax Form </strong></span>, Rent Roll Report, Rentability Report, and Profit/Loss Statement.",
  },
  {
    title: "Versatility Across User Types",
    content:
      "TenantCloud caters to various user types, including landlords, property managers, tenants, and service professionals, providing tailored features for each category.",
  },
  {
    title: "Compliance with Regulations",
    content:
      "The platform offers landlord forms and documents that are necessary for compliance with local, state, and federal laws governing landlord-tenant relationships.",
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

const Usp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of TenantCloud</h3>
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
