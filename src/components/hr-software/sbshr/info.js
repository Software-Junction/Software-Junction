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
            <h3>What is SBS HR ?</h3>
            <p>
              SBS HR, or Shreshtha Business Solutions HR, is a comprehensive HR
              outsourcing service that offers end-to-end solutions to streamline
              your organization's human resources functions. Whether you're a
              small startup or a large enterprise, SBS HR provides flexible and
              scalable HR outsourcing services. From efficient payroll services,
              including payroll calculation and statutory compliance automation,
              to global PEO and talent acquisition, SBS HR is designed to
              amplify your HR management services. With a focus on driving
              sustained growth and success, SBS HR allows your teams to process
              salaries, ensure compliance, and take actions throughout the
              month, eliminating month-end marathons.
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
