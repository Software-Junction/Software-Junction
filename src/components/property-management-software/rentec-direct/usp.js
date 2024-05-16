import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Top-Rated Property Management Software",
    content:
      "Rentec Direct is positioned as the most recommended property management software. It emphasizes unlimited free US-based support, indicating a commitment to customer assistance.",
  },
  {
    title: "Pricing",
    content:
      'Pricing starts at <span style="color:#FC5185 ;"><strong>$45/month</strong></span> for landlords and <span style="color:#FC5185 ;"><strong>$55/month</strong></span> for property managers. The transparent pricing structure provides clarity for potential users.',
  },
  {
    title: "Tenant Screening",
    content:
      'Offers instant credit, criminal, and eviction reports for comprehensive tenant screening. Pricing for reports is specified at <span style="color:#FC5185 ;"><strong>$18</strong></span> each.',
  },
  {
    title: "Segregates Solutions",
    content:
      "Segregates solutions for property managers and DIY landlords. Lists key features such as tenant portal, professional website, online tenant payments, property, and tenant accounting, and more.",
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
            <h3 className="mb-3">USP of Rentec Direct </h3>
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
