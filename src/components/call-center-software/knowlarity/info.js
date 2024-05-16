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
            <h3>What is Knowlarity ?</h3>
            <p>
              Knowlarity is a communication platform offering cloud-based
              solutions tailored for businesses of all sizes. With a focus on
              customer engagement, it provides voice, messaging, video, and
              AI-enabled services. Their highly secure and scalable platform
              integrates with leading CRMs, enabling businesses to streamline
              their communication processes. Key features include virtual
              numbers with advanced call management, partnerships catering to
              various industries, and solutions addressing specific business
              needs such as sales, customer service, and remote work. Knowlarity
              empowers businesses to connect with customers seamlessly,
              enhancing their overall communication experience.
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
