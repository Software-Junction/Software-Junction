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
            <h3>What is Romio Technologies ?</h3>
            <p>
              Romio Technologies offers a software solution with over 11 years
              of expertise, specializing in ERP for the Hospitality and F&B
              industry. Their POS and Billing Solutions feature a range of
              machines and accessories, seamlessly integrating cash drawers,
              thermal printers, card readers, customer displays, and scanners.
              The Digital Display Solutions include elegant LED Standees and
              Menu Boards, providing a complete solution with multiple display
              features. Their Billing and ERP Software Solutions cater to
              various businesses, offering an easy-to-use application with
              integrations for food aggregators, messaging, and payments. With a
              diverse clientele, Romio Technologies ensures smart, effective,
              and automated technology to streamline business operations and
              enhance customer satisfaction.
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
