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
            <h3>What is QuickBill ?</h3>
            <p>
              QuickBill is a business solution catering to small, midsize, and
              large enterprises, accommodating operations from single stores to
              expansive chains. Offering seamless integration, it empowers
              businesses with enhanced control over inventory, POS/trading
              operations, and financials. Known for its quick implementation and
              user-friendly interface, QuickBill is a comprehensive tool that
              supports growth plans effortlessly. Key features include easy
              installation, robust billing, inventory management, dynamic
              reporting, and streamlined GST compliance, making it the go-to
              solution for businesses at any stage. Elevate your business
              efficiency with QuickBill – the simple solution for your diverse
              operational needs.
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
