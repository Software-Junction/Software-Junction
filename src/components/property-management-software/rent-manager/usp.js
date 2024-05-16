import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Proven Track Record",
    content:
      'The statement "Rent Manager is proven property management software" implies a track record of success and reliability within the industry.',
  },
  {
    title: "Integrated Technology Ecosystem",
    content:
      "Rent Manager boasts an ever-growing network of integrated technology providers. This emphasizes the software's compatibility and ability to integrate seamlessly with other tools, offering users the freedom to choose and build their own best-in-class solution.",
  },
  {
    title: "Customer Focus and Support",
    content:
      "The customer support section highlights a commitment to customer success. Services such as onboarding, one-on-one training, and ongoing call-in support indicate a customer-centric approach.",
  },
  {
    title: "User Testimonials",
    content:
      "Testimonials from a user like Olive Bark LLC. reinforce the software's positive impact, citing automation of tasks and time-saving benefits.",
  },
  {
    title: "Freedom of Choice",
    content:
      "Rent Manager promotes the freedom of choice for users to build their own best-in-class solution. This implies flexibility in selecting and integrating additional tools or technologies that suit their business needs.",
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
            <h3 className="mb-3">USP of Rent Manager</h3>
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
