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
            <h3>What is PeoplesHR ?</h3>
            <p>
              PeoplesHR, a leading name in the HR Tech industry across Asia
              Pacific, Africa, and the Middle East, stands out for its holistic
              Human Capital Management (HCM) solutions. With a user base
              exceeding a million in over 20 industries, PeoplesHR offers an
              end-to-end HR experience, streamlining processes from recruitment
              to retirement. What sets it apart is its commitment to data-driven
              decision-making, offering predictive analytics, interactive
              dashboards, and enterprise tools for informed HR management.
              Moreover, PeoplesHR goes beyond traditional software, providing
              plug-ins to create a comprehensive HR ecosystem, ensuring a
              seamless and enriched employee experience. Trusted by over 0
              companies across 40+ countries, PeoplesHR is the go-to solution
              for organizations seeking digital HR transformation.
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
