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
            <h3>What is Exotel ?</h3>
            <p>
              Exotel is a leading Connected Customer Conversation Platform,
              offering streamlined communication solutions for businesses
              worldwide. With a focus on fostering lasting customer loyalty,
              Exotel facilitates personalized interactions across various
              channels, enhancing engagement and driving advocacy. Their
              cloud-first approach ensures reliability and flexibility,
              empowering businesses to adapt and thrive in a rapidly evolving
              environment. Trusted by over 7000 businesses in 60+ countries,
              Exotel provides innovative tools such as AI-powered chatbots,
              omnichannel engagement, and secure data management, all geared
              towards delivering seamless customer experiences.
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
