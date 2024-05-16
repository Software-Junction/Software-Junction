import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const Pusinfo = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <h3>What is Campus 365 ?</h3>
            <p>
              Campus 365 is a pinnacle in institution and school ERP software,
              serving as a holistic solution for educational entities globally.
              With an intuitive interface, it seamlessly automates the entire
              organizational value chain, covering admissions, fee management,
              exam analysis, attendance tracking, and library integration.
              Boasting powerful features and adaptable dashboards, Campus 365
              suits institutions of all sizes, eliminating the need for
              extensive customization. Trusted by over 2,000 institutes across
              20+ countries, it facilitates educational excellence through
              paperless admissions, real-time exam insights, automated fee
              processing, and seamless collaboration among students, parents,
              and teachers.
            </p>
            <div
              className={`${styles["pus-priceplan-box"]} box bg-light  rounded-4 p-3 mb-4 border`}
            >
              <h5>Pricing Plans :</h5>
              <p>
                <Link href="#idpricing">View Detailed pricing</Link>
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <Image
              src="/images/astralss.png"
              alt="astralss"
              height="10"
              width="600"
              className={styles["pus-info-img"]}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Pusinfo;
