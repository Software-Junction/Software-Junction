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
            <h3>What is SimplifyAnalytics ?</h3>
            <p>
              SimplifyAnalytics is an intuitive web analytics platform offering
              visitor tracking, session replays, heatmaps, goal tracking, and
              real-time analytics. It prioritizes efficient, privacy-conscious
              data analysis and offers diverse subscription plans, including a
              free option and agency plans. Designed for businesses of all
              sizes, it provides comprehensive insights into website
              performance, empowering users to make informed decisions and
              optimize user experiences. With its lightweight mode,
              SimplifyAnalytics ensures fast website performance while
              delivering essential analytics features. Trusted by professionals
              across various industries, it stands as a reliable alternative to
              traditional analytics tools like Google Analytics.
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
