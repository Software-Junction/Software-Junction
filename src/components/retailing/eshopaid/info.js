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
            <h3>What is eShopaid ?</h3>
            <p>
              eShopaid is a web application designed for retail chains, offering
              a unified Point of Sale (POS) solution. It operates on the latest
              technologies, providing a device-agnostic experience at the store
              front. With real-time data synchronization and robust security
              measures, eShopaid caters to the needs of stores, warehouses, and
              head offices seamlessly. Its deployment models include an entirely
              online cloud POS for businesses with stable internet connectivity
              and a thin offline POS suitable for high transaction volumes or
              locations with inconsistent internet access. This versatile
              software ensures businesses of all sizes and industries, from
              apparel to healthcare, can thrive with tailored POS solutions.
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
