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
            <h3>What is Shopify ?</h3>
            <p>
              Shopify is a e-commerce platform that empowers entrepreneurs and
              established brands alike to create and manage online stores
              effortlessly. With a global presence spanning 170+ countries, it
              facilitates seamless online selling, in-person transactions, and
              international commerce. Shopify offers a comprehensive suite of
              tools, including a drag-and-drop store creator, customizable
              templates, and a robust app store for enhanced functionality. From
              built-in marketing tools and flexible point-of-sale systems to
              centralized business operations management, Shopify provides an
              end-to-end solution for businesses of all sizes, enabling them to
              thrive in the dynamic world of e-commerce.
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
