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
            <h3>What is Chetu ?</h3>
            <p>
              Chetu's Agriculture Software Development is a comprehensive suite
              of solutions that leverages advanced AgTech technologies to
              transform farming operations. From precision agriculture and
              intelligent chemical spraying to AI-driven crop monitoring and
              autonomous harvesting, Chetu's software enhances efficiency,
              productivity, and sustainability in agriculture. The platform
              covers areas such as Land Management, Farm Management, Livestock
              Management, Seed-to-Sale solutions, and Agriculture Drones. With
              expertise in AI, machine learning, and smart farming, Chetu
              provides tailored software solutions that empower farmers to
              optimize resource usage, increase yields, and stay compliant with
              regulatory standards.
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
