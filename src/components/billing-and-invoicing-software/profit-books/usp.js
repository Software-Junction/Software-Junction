import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Online Payment Integration",
    content:
      "Facilitates online payments, allowing users to accept credit/debit card, net banking, or wallet payments directly through the invoicing system.",
  },
  {
    title: "Customization Options",
    content:
      "Users can tailor invoices to their brand, choosing from templates, adding logos, and incorporating custom fields for additional details.",
  },
  {
    title: "Expense Management",
    content:
      "Beyond invoicing, ProfitBooks enables users to record daily business expenses and manage payables efficiently.",
  },
  {
    title: "Automatic Tax Calculations",
    content:
      "The software automatically calculates taxes, ensuring accuracy in financial records and providing peace of mind.",
  },
  {
    title: "Detailed Sales Reports",
    content:
      "Provides actionable insights through detailed sales reports, empowering users to make informed decisions for improved team performance and profitability.",
  },
  {
    title: "Customer Success Focus",
    content:
      "Emphasizes customer success through multi-language in-app chat, a Support Center, a YouTube channel with demos and tutorials, and a business blog.",
  },
  {
    title: "Free Access and Support",
    content:
      "Offers free access to the invoicing system and comprehensive support through various channels, including in-app chat, a Support Center, a YouTube channel, and a business blog.",
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
            <h3 className="mb-3">USP of ProfitBooks</h3>
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
