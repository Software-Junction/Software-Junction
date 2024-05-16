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
            <h3>What is Alpha Software ?</h3>
            <p>
              Alpha Software provides a unified mobile and web app development
              and deployment platform with distinct "no-code" and "low-code"
              components. With Alpha TransForm's no-code solution, both business
              users and developers can easily turn any form into a mobile app in
              minutes, leveraging the full capabilities of smartphones. For more
              complex applications, Alpha Anywhere, the low-code environment,
              allows IT developers to build web and mobile business apps from
              scratch, integrate data with existing systems, and enhance
              security measures.
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
