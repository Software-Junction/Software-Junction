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
            <h3>What is Quirkos ?</h3>
            <p>
              Quirkos is a qualitative analysis software designed to simplify
              the interpretation of qualitative text data. With its intuitive
              interface and essential tools, researchers can easily organize,
              categorize, and filter their data, allowing for quick
              understanding and identification of patterns. Offering both
              cloud-based collaboration and offline options, Quirkos ensures
              seamless teamwork and accessibility across various devices.
              Affordable and accessible, Quirkos provides an indispensable tool
              for researchers, empowering them to delve deep into their data and
              uncover valuable insights efficiently.
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
