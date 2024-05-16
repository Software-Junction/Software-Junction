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
            <h3>What is Clock PMS ?</h3>
            <p>
              Clock PMS+ is a cloud-based property management system designed to
              revolutionize hotel operations and enhance guest experiences.
              Since 1996, it has been trusted by leading hotels and resorts
              globally. This ultimate hotel solution empowers staff with tools
              for seamless operations, offers delightful guest journeys from
              booking to check-out, ensures competitive payment options, and
              facilitates the growth of services through integrated add-ons.
              With excellent connectivity to various applications and a
              user-friendly platform, Clock PMS+ stands as a cutting-edge
              solution for hotels aiming to stay ahead in the dynamic
              hospitality industry.
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
