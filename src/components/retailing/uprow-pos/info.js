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
            <h3>What is Uprow POS ?</h3>
            <p>
              Uprow POS is a cloud-based inventory management software designed
              to elevate retail businesses. Seamlessly integrating sales,
              purchase, barcoding, accounting, and customer management, it
              offers a centralized solution for streamlined operations. With
              features such as real-time data access, multi-store management,
              and smart reporting, it empowers businesses to make informed
              decisions. Uprow POS caters to diverse industries, from fashion
              and grocery stores to bakery shops and beyond. Its commitment to
              automation, seamless invoicing, and stress-free accounting,
              coupled with excellent customer support, makes it an essential
              tool for businesses aiming for efficiency, growth, and an enhanced
              customer experience.
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
