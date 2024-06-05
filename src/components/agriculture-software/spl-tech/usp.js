import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../spl-tech/spl-tech.module.scss";

const uspData = [
  {
    title: "Pioneering Laser Land Leveling Technology",
    content:
      "SPL Technologies Pvt. Ltd. is noted as the first to introduce Laser Land Leveling technology for farm fields/lands in India. This technology is designed to enhance farming efficiency.",
  },
  {
    title: "Agriculture Machines & Tools",
    content:
      "The company is involved in manufacturing and exporting various agriculture machines and tools, such as Laser Land Levelers, Plot Combines, Seeders, Precision Plot Seeders, Tractors, and more.",
  },
  {
    title: "Diverse Product Range",
    content:
      "The product range includes <span style=\"color:#FC5185 ;\"><strong>Scanalyzer 3D</strong></span>, Scanalyzer HTS, Scanalyzer PL, Scanalyzer Field, Laser Transmitters (Dual Grade and Single Grade), Laser Plain Receivers, Control Boxes, and other tools related to precision agriculture and water management.",
  },
  {
    title: "Phenomics/Phenotyping Solutions",
    content:
      "SPL Technologies provides solutions in the field of plant phenomics and phenotyping, including technologies like <span style=\"color:#FC5185 ;\"><strong>Scanalyzer 3D</strong></span>, HTS, PL, and Field.",
  },
  {
    title: "Information Management and Yield Monitoring",
    content:
      "The company offers Information Management Solutions, Plant/Crop Sensors, Yield Monitoring Systems, Guidance, and Steering tools.",
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
            <h3 className="mb-3">USP of SPL Technologies</h3>
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
