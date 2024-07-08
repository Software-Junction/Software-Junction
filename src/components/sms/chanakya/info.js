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
            <h3>What is Chanakya ERP ?</h3>
            <p>
              Chanakya ERP, developed by Bicore Chanakya ERP Pvt. Ltd., is a
              cutting-edge accounting and business management software with 100%
              automation in accounting. Recognized as India's first software
              featuring an inbuilt GST return system, it facilitates seamless
              filing with a single click, eliminating the need to log in to the
              GST portal. Serving over 56,000 satisfied clients nationwide,
              including various industries, Chanakya ERP offers hassle-free
              support through a ticketing system and covers inventory,
              accounting, GST, e-Way Bill, and e-Invoice processes. With
              affordable pricing options, lifetime licenses, and advanced
              features like data backup, it ensures efficient and error-free
              business operations.
            </p>
            <div
              className={`${styles["cha-priceplan-box"]} box bg-light  rounded-4 p-3 mb-4 border`}
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
              className={styles["cha-info-img"]}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Info;
