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
            <h3>What is Arka Inventory ?</h3>
            <p>
              Arka Inventory is a management tool built on Salesforce, offering
              comprehensive solutions for efficient inventory, purchase,
              warehouse, and cost management. With features like Inventory
              Visibility, Bill of Material, Manufacturing, and more, it provides
              businesses worldwide, both large and small, with the means to
              enhance operational efficiency and drive customer success. Trusted
              by a diverse clientele, Arka Inventory boasts high ratings for its
              reliability and effectiveness. This software is designed to
              streamline processes, ensuring businesses have the tools they need
              for optimal inventory control and seamless integration with
              platforms like QuickBooks Online.
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
