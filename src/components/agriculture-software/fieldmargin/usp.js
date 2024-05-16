import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Efficient Farm Mapping",
    content:
      "Map your farm quickly in just<span style=\"color:#FC5185 ;\"><strong> 30 minutes</strong></span>. Add detailed features such as crops, rotations, fences, gateways, buildings, and water pipes.",
  },
  {
    title: "Livestock Management",
    content:
      "Set up and manage herds easily on your farm map. Track animal numbers, calculate grazing days, and monitor pasture rest days.",
  },
  {
    title: "Streamlined Field Jobs Planning",
    content:
      "Check and record inputs like seed, spray, or fertilizer. Save time on administrative tasks, assign jobs to team members, and set planned dates for tasks.",
  },
  {
    title: "Global Adoption",
    content:
      "Trusted by thousands of farms worldwide. Over <span style=\"color:#FC5185 ;\"><strong> 50 million</strong></span> hectares mapped, showcasing its reliability and scalability.",
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
            <h3 className="mb-3">USP of FieldMargin</h3>
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
