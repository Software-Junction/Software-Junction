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
            <h3>What is Adysoft Medical Store Management ?</h3>
            <p>
              Adysoft Medical Store Management is a revolutionary GST Ready
              Medical Store Software developed by Adysoft, designed to
              streamline and automate the operations of medical stores in India.
              This comprehensive solution caters to the needs of pharmacy
              businesses, offering features such as automatic purchase order
              management, expiration tracking, alternate medicine suggestions,
              and detailed profit and loss analysis for each medicine. Medica
              reduces manual efforts, saves time, and provides modules for user
              management, client/vendor management, accounting, transactions,
              inventory, and more. As a leading Medical Software Company in
              India, Adysoft's Medica is the go-to choice for Pharma Retailers,
              Wholesalers, Chemists, and Druggists, ensuring accurate stock
              management and efficient financial accounting with GST compliance.
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
