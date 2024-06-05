import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../OASYS-tech/oasys.module.scss";

const uspData = [
  {
    title: "Comprehensive IT Consultancy",
    content:
      "OASYS Tech Solutions distinguishes itself by offering a comprehensive suite of IT consultancy services. From software asset management to privileged access solutions, the company provides end-to-end support, ensuring clients have a one-stop solution for their technology needs.",
  },
  {
    title: "Proven ERP (SAP) Expertise",
    content:
      "The company specializes in delivering top-notch ERP services, particularly in SAP. With a focus on deploying and maintaining software assets efficiently, OASYS Tech Solutions stands out for its expertise in implementing and optimizing SAP solutions for its clients.",
  },
  {
    title: "Global Collaboration",
    content:
      "OASYS Tech Solutions has successfully extended its reach beyond national borders by collaborating closely with affiliated companies in various international locations. This global presence enhances its ability to provide diverse and innovative solutions tailored to the unique needs of clients worldwide.",
  },
  {
    title: "11 Years of Consistent Excellence",
    content:
      "With over <span style=\"color:#FC5185 ;\"><strong> 11 years</strong></span> of industry experience, OASYS Tech Solutions has built a sterling reputation for consistently exceeding client expectations. The company's long-standing presence in the market is a testament to its reliability, expertise, and commitment to delivering exceptional service.",
  },
  {
    title: "Empanelment with Government and PSU",
    content:
      "OASYS Tech Solutions sets itself apart by being empaneled with Central, State Governments, and Public Sector Undertakings (PSUs). This accreditation underscores the company's trustworthiness and capability to deliver IT solutions to government entities, showcasing its reliability and adherence to high standards.",
  },
  {
    title: "Customer Satisfaction",
    content:
      "Boasting a  <span style=\"color:#FC5185 ;\"><strong> 99.9% </strong></span> customer satisfaction rate based on <span style=\"color:#FC5185 ;\"><strong> 750+ reviews </strong></span> and <span style=\"color:#FC5185 ;\"><strong> 20,000 objective </strong></span> resources, OASYS Tech Solutions emphasizes its commitment to delivering quality service. The high satisfaction rate reflects the company's ability to meet and exceed the expectations of its diverse client base.",
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

const Usp = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of OASYS Tech Solutions</h3>
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
