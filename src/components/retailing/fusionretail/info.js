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
            <h3>What is FusionRetail ?</h3>
            <p>
              FusionRetail is a Retail Store Management Software designed to
              streamline retail businesses. Offering features such as POS
              Billing, Inventory Management, Customer Loyalty Programs,
              Financial Accounting, Payroll Management, and Store Analytics, it
              caters to diverse retail sectors globally. With over 35,000
              installations in 40 countries and 20 years of industry experience,
              FusionRetail stands out for its efficiency in increasing sales by
              20-30%, reducing inventory holding costs, optimizing staff
              productivity, and maximizing margins. Its innovative interface,
              continuous enhancements, and dedicated support make it the
              preferred choice for retailers seeking a unified platform for POS,
              back office, and web store management
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
