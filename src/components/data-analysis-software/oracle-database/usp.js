import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Autonomous Database",
    "content": "Oracle offers Autonomous Database, a fully automated cloud database solution that eliminates the complexity of database management tasks. It uses machine learning to automate routine operations, ensuring higher performance, reliability, security, and operational efficiency."
  },
  {
    "title": "Comprehensive Database Platform",
    "content": "Oracle Database offers a comprehensive platform with support for various data models, including relational, JSON, XML, Graph, Spatial, and text. This converged approach allows developers to work with any development style and choose the best fit for their applications."
  },
  {
    "title": "Flexible Deployment Options",
    "content": "Oracle Database can be deployed wherever needed, whether in the customer's data center, public cloud, or private cloud. This flexibility allows organizations to meet specific requirements regarding data residency, latency, and scalability."
  },
  {
    "title": "Integration with Other Services",
    "content": "Oracle Database seamlessly integrates with other Oracle Cloud services, such as Oracle Exadata, Oracle APEX Application Development, and Oracle MySQL HeatWave. This integration enables customers to build and deploy end-to-end solutions efficiently."
  },
  {
    "title": "Customer Success Stories",
    "content": "Oracle Database has a track record of success with various customers across industries, including healthcare, finance, retail, and technology. These success stories demonstrate the effectiveness of Oracle Database in solving real-world business challenges."
  }
];
{/* <span style=\"color:#FC5185 ;\"><strong> */}
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
            <h3 className="mb-3">USP of Oracle Database</h3>
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
