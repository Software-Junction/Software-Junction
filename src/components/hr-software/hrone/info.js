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
            <h3>What is HROne ?</h3>
            <p>
              HROne is an advanced HR software. Trusted by over 1100 leading
              brands, it offers a unified platform covering 127 HR processes,
              including Workforce, Payroll, Attendance, and Performance
              Management. With cloud and mobile readiness, secure Microsoft
              Azure integration, and a user-friendly interface powered by
              InboxforHRTM, HROne stands out for its simplicity and
              configurability. It is the go-to solution for HR professionals
              aiming to automate complex operations, ensuring a seamless
              employee lifecycle and freeing up valuable time for building
              exceptional workplaces.
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
