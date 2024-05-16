import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Astralusp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of Astral Technologies</h3>
          </Col>
          <Col lg={4} className="mb-4">
            <div
              className={`${styles["ast-box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
            >
              <h5>Comprehensive Cross-Functional System</h5>
              <br />
              <p>
                The School Management System by Astral Technologies is described
                as a cross-functional enterprise system. This means it goes
                beyond basic functionalities and incorporates a range of
                modules. These modules collectively support various internal
                processes within educational institutes.
              </p>
            </div>
          </Col>
          <Col lg={4} className="mb-4">
            <div
              className={`${styles["ast-box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
            >
              <h5>Flexible Deployment Options</h5>
              <br />
              <p>
                Astral's Inventory Management System is web-based and
                cloud-ready. This flexibility allows users to choose between
                hosting the application on their own servers or deploying it on
                the cloud with a service provider of their choice. This
                adaptability caters to diverse infrastructure preferences.
              </p>
            </div>
          </Col>
          <Col lg={4} className="mb-4">
            <div
              className={`${styles["ast-box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
            >
              <h5>User-friendly Platform for Stakeholders</h5>
              <br />
              <p>
                The School Management System offers user-friendly dashboards
                tailored for different roles. These roles include Management,
                Principal, Staff, Students, Parents, and Teachers. Each
                stakeholder has a customized interface that caters to their
                specific needs, making the platform accessible and easy to use.
              </p>
            </div>
          </Col>
          <Col lg={4} className="mb-4">
            <div
              className={`${styles["ast-box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
            >
              <h5>Secure and Private Database</h5>
              <br />
              <p>
                Emphasizing data security, Astral Technologies ensures that the
                School Management System comes with an exclusive private and
                secure database. This feature safeguards sensitive information
                and maintains the confidentiality and integrity of the data
                stored.
              </p>
            </div>
          </Col>
          <Col lg={4} className="mb-4">
            <div
              className={`${styles["ast-box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
            >
              <h5>Reduced Administrative Costs</h5>
              <br />
              <p>
                The system aims to bring down administrative costs by automating
                various tasks such as fee administration and payroll management.
                Automation reduces manual efforts, minimizes errors, and
                contributes to overall cost efficiency in managing
                administrative processes.
              </p>
            </div>
          </Col>
          <Col lg={4} className="mb-4">
            <div
              className={`${styles["ast-box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
            >
              <h5>Endless Possibilities for Knowledge Sharing</h5>
              <br />
              <p>
                The platform is designed to leverage internet technology for
                exposure, knowledge gaining, and sharing within the educational
                community. This implies that the system provides a platform for
                collaboration and information exchange, fostering a culture of
                continuous learning and growth.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Astralusp;
