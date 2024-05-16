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
            <h3>What is Unity ?</h3>
            <p>
              Unity, Empowering over 20 platforms and boasting 3.6 billion
              monthly downloads, Unity is the go-to choice for 82% of the top
              100 games. Dive into a world of creativity with end-to-end tools,
              AI integration, and success stories that showcase Unity's global
              impact. Join a dynamic community, access deep resources, and
              explore subscription plans tailored for personal, pro, and
              enterprise needs. Elevate your vision and bring it to life with
              Unity – where innovation meets boundless potential."
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
