import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Convenience and Ease of Use",
    content:
      "CrazyCall emphasizes simplicity and convenience in making calls, with features like Click to Call and Auto Dialer, making it easy for users to initiate and manage calls without hassle.",
  },
  {
    title: "Automation for Efficiency",
    content:
      "CrazyCall enables users to automate call processes, such as lead generation through Callback Widget and making hundreds of calls with a single click using the Auto Dialer. This automation streamlines workflows, increasing productivity and efficiency.",
  },
  {
    title: "Cost-Effectiveness",
    content:
      "Mateusz Brzeski from Contact Solutions highlights a <span style=\"color:#FC5185 ;\"><strong> 40% cost reduction</strong></span> compared to other calling software, indicating CrazyCall's affordability and transparency in pricing, which could be a significant USP for businesses looking to cut costs without compromising on quality.",
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
            <h3 className="mb-3">USP of CrazyCall</h3>
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
