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
            <h3>What is MightyCall ?</h3>
            <p>
              MightyCall is a cloud-based call center solution tailored for
              small and mid-sized businesses. With built-in AI, it ensures
              optimal call quality by monitoring and adjusting connections,
              while maintaining competitive pricing. Offering world-class
              security and reliability certified by PCI-DSS and AWS, it
              guarantees data protection and FCC compliance. Integrated with
              popular apps and CRM systems, MightyCall streamlines business
              communications efficiently and organically, empowering users to
              customize their communication workflows with ease.
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
