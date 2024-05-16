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
            <h3>What is Oracle Hospitality ?</h3>
            <p>
              Oracle Hospitality is a technology solution designed to elevate
              guest experiences and streamline operations in the hospitality
              industry. With over 40,000 active sites managing 4.8 million hotel
              rooms and integrating with 4,000 vendors, Oracle Hospitality
              offers a suite of AI and automation-powered tools. It seamlessly
              connects event sales, guest rooms, management, and point of sale
              systems, ensuring flawless operations from lobby to back office.
              The software enhances customer engagement, loyalty, and revenue by
              personalizing marketing, automating upselling opportunities, and
              optimizing back-office functions for improved efficiency and
              profitability.
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
