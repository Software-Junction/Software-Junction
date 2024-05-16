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
            <h3>What is MAXQDA ?</h3>
            <p>
              MAXQDA is the qualitative data analysis software, seamlessly
              integrating AI for streamlined analysis. It offers versatile
              solutions for organizing, analyzing, and visualizing data,
              catering to various research methodologies. With user-friendly
              interfaces, comprehensive tutorials, and robust customer support,
              MAXQDA ensures efficient collaboration and learning. Trusted by
              researchers worldwide, it facilitates mixed methods analysis,
              interview transcriptions, literature reviews, and more, making it
              indispensable for academia and industry alike.
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
