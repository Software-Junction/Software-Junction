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
            <h3>What is BIGSUN ?</h3>
            <p>
              BIGSUN offers a ERP solution tailored for diverse industries,
              including manufacturing, media, and NBFCs. With robust features
              like accounting, compliance, CRM, and inventory management, it
              streamlines operations and enhances efficiency. Trusted by leading
              businesses, it empowers growth through automation, insightful
              reporting, and seamless integration, making it the go-to choice
              for businesses aiming for productivity and profitability.
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
