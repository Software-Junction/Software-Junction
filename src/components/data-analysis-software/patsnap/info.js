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
            <h3>What is PatSnap ?</h3>
            <p>
              PatSnap is an advanced AI-powered platform revolutionizing
              collaboration between IP and R&D teams. It streamlines the
              innovation lifecycle, offering tools to ideate, validate, review,
              submit, and monitor inventions. With features like Idea,
              Refinement, Insight, Analysis, and Collaboration, it accelerates
              processes, enhances decision-making, and ensures data security,
              trusted by over 12,000 innovators worldwide. PatSnap empowers
              enterprises to eliminate workflow friction, saving time and
              resources while unlocking competitive advantages in the
              intellectual property landscape.
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
