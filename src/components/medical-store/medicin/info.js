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
            <h3>What is Medicin Pharmacy Management Software ?</h3>
            <p>
              Medicin Pharmacy Management Software is a solution designed for
              both retail pharmacies and distributors. Offering features like
              automatic purchase and sale modules, GST compliance, prescription
              record with inbuilt camera support, and a wide range of pre-filled
              data, it streamlines operations efficiently. With capabilities
              such as E-Way Bill compliance, barcode-based transactions, and an
              owner app for Android/iOS, it ensures seamless management and
              enhances customer care. The software also supports online and
              offline modes, providing a versatile solution for the pharmacy
              business with features like campaign management, expiry
              notifications, and an easy-to-use interface.
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
