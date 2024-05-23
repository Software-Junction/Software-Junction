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
            <h3>What is Administrator Plus ?</h3>
            <p>
              Administrator Plus by Accurate Infosoft, a cutting-edge Hospital
              Management System Software that stands at the forefront of
              healthcare administration. With over 25 years of expertise and 200
              successful implementations, Administrator Plus offers end-to-end
              ERP solutions, seamlessly integrating the latest technology to
              streamline hospital processes. This robust software, designed for
              multi-specialty hospitals, automates tasks such as billing,
              appointments, scheduling, and financial auditing, ensuring
              efficient management. Utilizing Microsoft technologies for the
              front end and flexible back ends like Oracle and SQL,
              Administrator Plus is the epitome of innovation, enhancing data
              security, improving patient care, and revolutionizing the
              landscape of healthcare management.
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
