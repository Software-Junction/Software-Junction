import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const Info = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <h3>What is Procore ?</h3>
            <p>
              Procore is a top-rated construction management platform designed
              to streamline and enhance the construction process. Tailored for
              owners, general contractors, and subcontractors, Procore offers a
              comprehensive suite of solutions, including project management,
              quality and safety monitoring, and financial management. With
              real-time visibility and seamless integration with 500+
              applications, Procore enables effective collaboration, risk
              mitigation, and timely project delivery. Trusted by over 1,000,000
              projects in 150+ countries, Procore stands out for its commitment
              to advancing the construction industry, fostering a global
              community, and providing unparalleled customer support.
            </p>
            <div
              className={`${styles["priceplan-box"]} box bg-light  rounded-4 p-3 mb-4 border`}
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
              className={styles["info-img"]}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Info;
