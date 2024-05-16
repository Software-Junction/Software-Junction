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
            <h3>What is greytHR ?</h3>
            <p>
              greytHR is an cloud-based HR platform catering to over 20,000
              companies in 250+ cities. This comprehensive solution seamlessly
              integrates Performance Management, Employee Self Service (ESS),
              HRMS, Payroll Management, Leave Management, and Attendance
              Management. It empowers businesses by saving time, ensuring
              statutory compliance, and promoting transparent policy
              implementation. With a user-friendly interface and proactive
              customer support, greytHR simplifies HR operations, enabling
              companies to focus on growth. The platform also provides valuable
              resources through the greytHR Academy, greytribe Community, and a
              resource library, making it an indispensable tool for effective HR
              and payroll administration.
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
