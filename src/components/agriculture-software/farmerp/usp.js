import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Global Reach and Experience",
    content:
      "Serving agribusinesses in <span style=\"color:#FC5185 ;\"><strong>25+ countries since 2001</strong></span>. International presence and experience in diverse agricultural landscapes.",
  },
  {
    title: "Commitment to Sustainable Agriculture",
    content:
      "Guided by the United Nations' Sustainable Development Goals (SDGs) – Zero Hunger and Climate Change. Proud member of GLOBALG.A.P and Sustainable Rice Platform, showcasing a commitment to food safety and sustainability.",
  },
  {
    title: "Specialized Solutions for Fresh Fruit and Vegetable Businesses",
    content:
      "Empowering FFV enterprises with advanced technology solutions. Catering to corporate and individual operators, contract farming companies, exporters, and co-operatives in the FFV sector.",
  },
  {
    title: "Focus on Food Safety",
    content:
      "Being a Global GAP member, FarmERP is committed to ensuring sustainable resource management and <span style=\"color:#FC5185 ;\"><strong>100% safe</strong></span> food production. Emphasis on safe and responsible agricultural practices.",
  },
  {
    title: "Climate Resilience and Carbon Footprint Reduction",
    content:
      "Smart farm management tool to make businesses resilient to climate change. Focus on curbing carbon footprint, aligning with environmental sustainability.",
  },
  {
    title: "Success Stories and Case Studies",
    content:
      "Highlighting successful collaborations with leading enterprises in the agricultural sector. Demonstrating tangible benefits, such as reduced pest threats and streamlined administration activities.",
  },
  {
    title: "Diverse Industry Verticals Covered",
    content:
      "Serving a wide range of agribusinesses, from contract farmers, exporters & packhouses to governing bodies and financial institutions. Tailored solutions for specific verticals, including plantation and farm management, contract farming, and more.",
  },
  {
    title: "Collaboration with Agricultural Stakeholders",
    content:
      "Collaboration with entities such as ICAR, NGOs, and agricultural consultants to enhance coordination and knowledge sharing. Engaging with research and development programs to contribute to agricultural advancements.",
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
            <h3 className="mb-3">USP of FarmERP</h3>
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
