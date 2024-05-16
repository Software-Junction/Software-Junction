import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Reliability and Security",
    content:
      "MCUBE guarantees high uptime, data security, and compliance features, ensuring reliable and secure telephony solutions that adhere to regulations.",
  },
  {
    title: "Global Reachability",
    content:
      "MCUBE aims for a global presence, facilitating better communication for existing and potential partners and clients.",
  },
  {
    title: "Zero Capital Investment",
    content:
      "MCUBE enables businesses to utilize existing resources, offering a receptive approach without the burden of upfront costs.",
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
            <h3 className="mb-3">USP of MCUBE</h3>
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
