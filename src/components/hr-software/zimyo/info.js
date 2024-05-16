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
            <h3>What is Zimyo ?</h3>
            <p>
              Zimyo is an advanced Human Capital Management (HCM) solution,
              revolutionizing the HR-Tech industry with its AI-powered platform.
              Boasting a user-friendly interface, it centralizes HR operations,
              offering a comprehensive suite of modules from Core HR to
              Recruitment, Payroll, and Performance Management. With 2,000+
              satisfied customers and 5,000,000+ users globally, Zimyo ensures a
              seamless employee experience, coupled with robust data security
              measures, including VAPT, ISO, and AICPA SOC compliance. This
              cutting-edge HCM software automates tasks, optimizes processes,
              and provides valuable workforce insights, making it a leader with
              a stellar 4.6 average rating on global review platforms.
              Experience the future of HR technology today with Zimyo.
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
