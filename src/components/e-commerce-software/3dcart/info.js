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
            <h3>What is 3dcart ?</h3>
            <p>
              3dcart stands out as a robust and versatile eCommerce software,
              celebrating a remarkable 20 years of business experience. As the
              2018 Best Shopping Cart, it offers a comprehensive suite of
              features, customizable themes, and seamless integration with
              various platforms, ensuring a hassle-free online store setup. With
              PCI Certified hosting, SSL technology, and anti-fraud measures,
              3dcart prioritizes security. Boasting a responsive design and
              99.99% uptime, it caters to businesses of all sizes, from startups
              to enterprises. The platform's success stories, such as
              eLeMeNO-Pee and Florida Tobacco Shop, highlight its proven track
              record in facilitating online business growth.
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
