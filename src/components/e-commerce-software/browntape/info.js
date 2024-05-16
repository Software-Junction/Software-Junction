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
            <h3>What is Browntape ?</h3>
            <p>
              Browntape a eCommerce management software designed to meet the
              intricate demands of modern retail businesses. With 2028-bit
              encrypted security, it offers features such as inventory and order
              management, courier and warehouse management, and seamless
              integration with leading ERP systems like SAP, Microsoft Dynamics,
              Oracle, IBM, Ginesys, and Salesforce. The software ensures
              efficient online sales with automatic order processing,
              location-wise user access, and a powerful API for extendability.
              Boasting a remarkable support system, Browntape aims to help
              businesses achieve higher seller ratings, reduce return rates, and
              streamline operations for effortless growth in the competitive
              eCommerce landscape.
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
