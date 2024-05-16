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
            <h3>What is PACT ERP ?</h3>
            <p>
              PACT RevenU is a leading Enterprise Resource Planning (ERP)
              software designed to streamline and automate business processes,
              offering customizable solutions for businesses of all sizes and
              industries. With over 12000 satisfied clients worldwide, it
              provides modules covering finance, inventory, sales, HR, and more,
              ensuring seamless integration and real-time data flow. PACT RevenU
              stands out for its ease-of-use, continuous technical support, and
              industry-specific configurations, making it the go-to choice for
              businesses aiming to enhance productivity and drive growth.
              Whether on-premise or cloud-based, it offers flexibility and
              accessibility, empowering businesses to make informed decisions
              and stay VAT-compliant.
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
