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
            <h3>What is mycloud Hospitality ?</h3>
            <p>
              mycloud Hospitality is an award-winning cloud-based hotel
              management software developed by Prologic First, a top hospitality
              software company. With over 15 years of industry expertise,
              mycloud automates hotel operations, offering features like
              contactless check-in, check-out, and dining. Boasting a zero
              upfront fee, the software ensures a rapid live-in of the property
              management system within 4 hours, accompanied by 24/7 guaranteed
              support. Trusted by 2000 hotels across 40+ countries, mycloud is a
              fully customizable and budget-friendly solution, integrating
              various modules for seamless hotel management.
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
