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
            <h3>What is QuickBooks Online ?</h3>
            <p>
              QuickBooks Online, a cloud-based solution that empowers small
              businesses and professionals in India. Seamlessly manage GST
              compliance, generate invoices, and access crucial financial data
              anytime, anywhere. Chartered accountants benefit from effortless
              GST return filing, while small business owners enjoy features like
              HSN/SAC lookup, auto-calculated taxes, and integration with
              popular apps. QuickBooks ensures accuracy with input tax credits,
              simplified data import-export, and customizable reports, providing
              a comprehensive accounting solution for diverse needs.
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
