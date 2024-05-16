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
            <h3>What is Meddoz ?</h3>
            <p>
              Meddoz, developed by ASkeyTech, is an intuitive and cost-effective
              pharmacy management software designed to enhance visibility and
              control of all pharmacy processes. With a vast database of over
              100,000 preloaded drugs, it caters to pharmacies of any size,
              offering a ready-made solution. The software's key features
              include user-friendly interfaces and barcode integration for
              streamlined tasks like invoice creation and billing. ASkeyTech,
              based in Chennai, India, is a dedicated software development
              company committed to providing top-notch solutions in
              point-of-sale, enterprise applications, and web design, with a
              focus on professionalism and customer satisfaction. Meddoz also
              comes with comprehensive technical support and post-implementation
              follow-ups, ensuring efficient operation and continual
              improvement.
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
