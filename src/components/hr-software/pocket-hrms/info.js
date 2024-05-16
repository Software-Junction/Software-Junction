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
            <h3>What is Pocket HRMS ?</h3>
            <p>
              Pocket HRMS is an advanced cloud-based HR management software,
              uniquely tailored for the Indian market and empowered by Microsoft
              GenAI and smHRt® AI. Revolutionizing employee management, it
              offers a seamless blend of cutting-edge technology and an
              intuitive user experience for modern HR professionals. With a
              track record of serving 15+ happy clients and over a million
              satisfied users, Pocket HRMS stands out as the only smHRt HRMS in
              India, delivering futuristic solutions for payroll, attendance
              management, leave management, and more. Elevate your HR operations
              with this AI-enabled platform that ensures smHRt experiences for
              businesses across various industries.
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
