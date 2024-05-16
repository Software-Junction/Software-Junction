import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Full Stack Super App",
    content:
      "Comprehensive solution for billing, payments, accounting, inventory, and loyalty programs.",
  },
  {
    title: "Tailored for Specific Businesses",
    content:
      "Crafted for restaurants, retail, cafes, bars, bakeries, and more.",
  },
  {
    title: "One-Click Billing",
    content:
      "Streamlined process for creating and paying bills, reducing checkout times.",
  },
  {
    title: "Large Customer Base",
    content:
      'Trusted by <span style="color:#FC5185 ;"><strong>30,000+</strong></span> businesses across <span style="color:#FC5185 ;"><strong>70+</strong></span> cities.',
  },
  {
    title: "Global Presence",
    content: "Offices in India and UAE, showcasing international reach.",
  },
  {
    title: "Awards and Recognition",
    content: "Acknowledged excellence in the retail and restaurant POS space.",
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
            <h3 className="mb-3">USP of IVEPOS</h3>
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
