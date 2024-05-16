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
            <h3>What is Brainvire Infotech ?</h3>
            <p>
              Brainvire Infotech offers a comprehensive suite of digital
              solutions to transform businesses through innovative technologies.
              As a globally acclaimed company, they specialize in eCommerce
              services, mobile app development, enterprise solutions, Microsoft
              partnership services, cloud management, and data-driven digital
              marketing strategies. With a portfolio featuring collaborations
              with over 200 renowned brands, Brainvire emphasizes delivering
              exceptional customer experiences. Their success stories include
              aiding Dr. Reddy's Laboratories in achieving a 360-degree platform
              transformation. Recognized as Company of the Year, Brainvire's
              expertise spans diverse industries, including retail, real estate,
              education, finance, healthcare, automotive, media, entertainment,
              and more.
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
