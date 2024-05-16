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
            <h3>What is Nitso HRMS ?</h3>
            <p>
              Nitso Technologies Pvt. Ltd. specializes in providing a suite of
              software solutions to streamline business processes. From Human
              Resource Management Software (HRMS) and Payroll Management to
              Fixed Asset Management and Employee Monitoring Software, Nitso
              Technologies aims to simplify and automate diverse workflows.
              Their applications boast a user-friendly interface, unique design,
              and easy integration with third-party applications. Whether
              through on-premises or cloud-based solutions, Nitso Technologies
              enhances workplace productivity by offering accessible,
              configurable, and state-of-the-art software that caters to the
              specific needs of businesses.
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
