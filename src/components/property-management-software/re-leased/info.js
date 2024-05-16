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
            <h3>What is Re-Leased ?</h3>
            <p>
              Re-Leased is a Commercial Property Management Software, serving as
              the world's leading platform for property owners, managers, and
              corporate occupiers. This innovative solution empowers users to
              streamline daily operations, enhance tenant experiences, and
              maximize revenue through its connected cloud. Trusted by over 1300
              companies globally, Re-Leased offers tailored solutions for
              landlords, property managers, and corporate occupiers, supported
              by a 170+ strong global team. With features such as lease
              administration, maintenance management, arrears control, and
              portfolio analytics, Re-Leased transforms property management,
              ensuring a 360-degree view, automated reminders, and
              lightning-fast onboarding for a seamless and efficient experience.
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
