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
            <h3>What is Airmeet ?</h3>
            <p>
              Airmeet is a platform designed to host branded events and
              webinars, offering a seamless solution for producing captivating
              content. Users can leverage analytics tools to create, influence,
              and convert their sales pipeline effectively. With a focus on deep
              engagement, the software empowers businesses to grow better by
              providing a user-friendly interface for hosting events, managing
              content, and optimizing marketing strategies. Boasting a 4.6
              rating based on 640+ reviews, the platform ensures a top-notch
              experience for users seeking to enhance their online presence and
              customer interactions.
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
