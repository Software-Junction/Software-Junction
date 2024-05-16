import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "AI-driven Solutions",
    content:
      "With 'The House of AI', Exotel integrates advanced AI technology to enhance productivity, efficiency, and modernize customer conversations, both with agents and bots.",
  },
  {
    title: "Scale and Efficiency",
    content:
      "Exotel boasts impressive metrics, including resolving billions of queries through AI bots, engaging with millions of people annually, and supporting thousands of agents on the cloud.",
  },
  {
    title: "Trust and Data Security",
    content:
      "Exotel prioritizes data security, being PCI-DSS and ISO <span style=\"color:#FC5185 ;\"><strong>27001:2013</strong></span> compliant, ensuring peace of mind for businesses entrusting their customer data.",
  },
  {
    title: "Cloud-first Infrastructure",
    content:
      "Built on a cloud-first operator infrastructure (Exosphere), Exotel ensures high uptimes, connectivity, and reliability through patented monitoring technology and backup routes.",
  },
  {
    title: "Industry-specific Solutions",
    content:
      "Exotel provides tailored solutions for various industries, including banking, logistics, healthcare, and hyperlocal businesses, catering to specific needs and challenges.",
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
            <h3 className="mb-3">USP of Exotel</h3>
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
