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
            <h3>What is OroCommerce ?</h3>
            <p>
              Oro Inc. presents a versatile suite of B2B solutions with
              OroCommerce CRM, a best-in-class open-source CRM, and OroCommerce,
              the #1 digital commerce platform tailored for manufacturers,
              distributors, and wholesalers. Boasting robust out-of-the-box
              features, Oro's products facilitate seamless digital
              transformations, offering flexible tools for creating
              customer-centric experiences, connecting with existing business
              systems, and managing scalable marketplaces. With a global
              presence and recognition from industry experts, Oro serves over
              40,000 companies worldwide, providing a comprehensive solution for
              B2B businesses to grow, connect, and thrive in the digital
              landscape.
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
