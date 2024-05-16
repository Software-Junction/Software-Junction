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
            <h3>What is Keka ?</h3>
            <p>
              Keka is an award-winning HR and payroll software designed to
              empower businesses of all sizes, ranging from 20 to 20,000
              employees. With a comprehensive suite of features, including
              payroll automation, people analytics, performance management, and
              hiring tools, Keka enables companies to adapt, evolve, and scale
              in today's dynamic business environment. Loved by over 4,000
              companies worldwide, Keka fosters high-performance cultures by
              centralizing employee information, automating HR processes, and
              providing valuable insights to drive smarter decisions. Whether in
              technology, manufacturing, finance, or retail, Keka offers
              industry-specific human capital management solutions to connect
              and optimize workforce experiences
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
