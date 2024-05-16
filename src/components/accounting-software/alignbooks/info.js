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
            <h3>What is AlignBooks ?</h3>
            <p>
              Welcome to AlignBooks, your all-in-one financial management
              solution. Whether you're a small business owner or a large
              corporation, AlignBooks offers a comprehensive suite of tools to
              streamline your financial operations. From accounting and
              invoicing to inventory management and tax compliance, our software
              simplifies complex financial tasks. With user-friendly features
              and real-time insights, AlignBooks empowers you to make informed
              decisions and drive your business towards success. Experience
              efficiency and accuracy in your financial management with
              AlignBooks
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
