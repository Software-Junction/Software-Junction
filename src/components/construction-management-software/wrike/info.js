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
            <h3>What is Wrike ?</h3>
            <p>
              Wrike is a work management platform, trusted by over 20,000
              organizations worldwide, offering enhanced collaboration,
              time-saving automation, and 360° visibility. Teams using Wrike
              experience a significant reduction in emails, streamlining work
              processes to drive efficiency across all departments. The platform
              ensures improved visibility, alignment, and the elimination of
              wasted efforts through automated workflows. With a focus on
              delivering business outcomes faster, Wrike aligns strategy with
              execution, supported by 400+ integrations for seamless project
              management. Its versatility, unique customization features, and
              user testimonials emphasize its effectiveness in maximizing team
              performance and accelerating growth.
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
