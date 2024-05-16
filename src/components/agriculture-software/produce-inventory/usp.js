import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Accuracy and Efficiency",
    content:
      "The software emphasizes accuracy in maintaining inventory records by integrating receipts, shipments, adjustments, and transactions. This not only ensures precise accounting but also automatically generates traceability information, eliminating the need for separate efforts.",
  },
  {
    title: "Compliance with Regulations",
    content:
      "WaudWare emphasizes its commitment to meeting regulatory requirements such as the Food Safety Modernization Act (FSMA) and the Safe Food for Canadians Act (SFCA). This can be a critical factor for businesses in the produce industry to ensure compliance and avoid penalties.",
  },
  {
    title: "Proven Track Record",
    content:
      "With a history dating back to <span style=\"color:#FC5185 ;\"><strong>1989</strong></span>, WaudWare underscores its experience and reliability in providing software solutions tailored to the produce industry. This long-standing presence may instill confidence in potential customers.",
  },
  {
    title: "Customer Base",
    content:
      "The software is tailored for a range of businesses involved in the distribution of produce, including wholesalers, jobbers, distributors, brokers, growers/farmers, shippers, packers, and third-party cold storage. The diverse customer base showcases the software's adaptability to various segments of the produce industry.",
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
            <h3 className="mb-3">USP of Produce Inventory Control System</h3>
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
