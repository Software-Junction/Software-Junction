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
            <h3>What is Fantastical ?</h3>
            <p>
              Fantastical by Flexibits is a cross-platform calendar application
              that seamlessly integrates across Mac, iPad, iPhone, and Apple
              Watch. With its beautiful UI, powerful views, and time-saving
              features like event and task templates, Fantastical streamlines
              organization and productivity. The app prioritizes user privacy,
              keeping sensitive data on the device. It offers unique features
              such as conference call detection, time zone support, and widgets
              for quick access to upcoming events, tasks, and weather.
              Fantastical supports various calendar services and languages,
              making it a versatile and user-friendly scheduling solution for
              individuals and families.
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
