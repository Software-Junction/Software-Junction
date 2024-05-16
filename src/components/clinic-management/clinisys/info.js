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
            <h3>What is Clinisys ?</h3>
            <p>
              Clinisys is a leading clinical lab systems provider with a robust
              platform that seamlessly integrates data, serving over 3,500
              customers globally. Their Clinisys Platform™ empowers laboratories
              to enhance healthcare services through informed decision-making,
              supports advancements in life sciences research, and contributes
              to public health by enabling disease surveillance and management
              at scale. With 40 years of expertise and a team of over 1,450 lab
              professionals, Clinisys offers tailored solutions across 22
              research and test disciplines in nine industries. Their commitment
              to efficiency, productivity, and innovation positions Clinisys as
              a trusted partner in shaping a healthier and greener future.
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
