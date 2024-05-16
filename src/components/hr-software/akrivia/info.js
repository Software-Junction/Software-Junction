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
            <h3>What is Akrivia HCM ?</h3>
            <p>
              Akrivia HCM is an enterprise-level Human Capital Management (HCM)
              software designed to streamline and optimize the entire employee
              lifecycle. With 20+ modules and 100+ features, it offers a
              comprehensive solution for managing recruitment, time and
              attendance, leave, core HR, employee engagement, performance,
              learning, payroll, and expenses. The platform stands out with its
              configurable nature, enhanced employee experience, consumer-grade
              user interface, seamless integrations, and robust data security.
              Akrivia HCM is recognized as a leader in the industry, offering a
              consultative approach, AI-enabled chatbot, and multi-currency
              payroll capabilities across 15 countries.
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
