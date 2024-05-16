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
            <h3>What is hedgehog lab ?</h3>
            <p>
              hedgehog lab is a tech solution that blends consultancy, design,
              and development to tackle complex business challenges.
              Specializing in mobile and web apps, AI, data engineering, and
              digital transformation, this human-centered global tech
              consultancy partners with industry leaders to create impactful
              solutions. With a focus on diverse sectors like financial
              services, healthcare, and retail, they offer a range of services,
              including UX research, product strategy, and enterprise software
              development. Their dedication to human progress through technology
              is evident in their innovative projects, making them a go-to
              choice for those seeking transformative and socially impactful
              digital solutions.
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
