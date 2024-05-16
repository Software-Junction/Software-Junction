import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Empowered Agents",
    content:
      "Zoho Desk provides agents with powerful tools and contextual support to enhance productivity, confidence, and organization, ensuring superior customer service at every stage of the customer journey.",
  },
  {
    title: "Built-in Analytics",
    content:
      "The platform offers built-in analytics to track customer service performance, happiness ratings, and workflow automation, enabling businesses to make data-driven decisions and continually improve their service.",
  },
  {
    title: "Extensive Integrations",
    content:
      "With over <span style=\"color:#FC5185 ;\"><strong>200 integrations</strong></span> with popular third-party apps and<span style=\"color:#FC5185 ;\"><strong> 45 native apps</strong></span>, Zoho Desk seamlessly integrates with the tools businesses use daily, extending its capabilities and enhancing efficiency.",
  },
  {
    title: "Mobile Accessibility",
    content:
      "Zoho Desk's mobile apps for Android and iOS allow agents to provide support even on the go, ensuring that customer inquiries are addressed promptly and efficiently.",
  },
  {
    title: "Customer Testimonials",
    content:
      "Positive feedback and success stories from satisfied customers such as Feedonomics and Mercedes-Benz highlight the effectiveness and impact of Zoho Desk in improving customer satisfaction and resolving complex requests.",
  },
  {
    title: "Fast Implementation and Customization",
    content:
      "Zoho Desk offers <span style=\"color:#FC5185 ;\"><strong>50% faster implementation</strong></span> compared to most customer service software, along with customizable workspaces tailored to fit any industry, brand, or department.",
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
            <h3 className="mb-3">USP of Zoho Desk</h3>
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
