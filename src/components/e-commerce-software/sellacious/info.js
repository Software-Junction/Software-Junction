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
            <h3>What is Sellacious ?</h3>
            <p>
              Sellacious is a versatile eCommerce and marketplace software with
              a global footprint, boasting 204,593+ downloads and trusted by
              8,500+ businesses across 85+ countries. This professional platform
              supports multi-currency transactions and offers a diverse range of
              payment options. With features such as a user-friendly
              administrator panel and optimized store fronts, Sellacious enables
              users to effortlessly launch online stores or Joomla Marketplaces
              within minutes. Its rich functionalities, including detailed rule
              filters, product comparisons, multiple variants, and a native
              multivendor architecture, make it the go-to solution for creating
              efficient and customizable online selling experiences.
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
