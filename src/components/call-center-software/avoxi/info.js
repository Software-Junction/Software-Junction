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
            <h3>What is AVOXI ?</h3>
            <p>
              AVOXI is an international cloud voice solution designed to
              streamline global communication for businesses. With coverage in
              over 150 countries, it offers a comprehensive platform that
              enhances customer conversations and increases uptime. AVOXI's
              intelligent SaaS platform automates processes, provides analytics
              for better insights, and enables seamless integration with
              existing contact center and communication applications. Trusted by
              over 5,000 global brands, AVOXI delivers premium call quality,
              expert support, and dedicated customer success to optimize voice
              communication strategies worldwide.
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
