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
            <h3>What is CaptainBiz ?</h3>
            <p>
              CaptainBiz is your go-to solution for small businesses in India,
              offering an All-in-One GST Billing Software designed to streamline
              your invoicing, inventory management, and overall business
              operations. Trusted by over 46,000 SMBs across India and
              recommended by the GST Network, CaptainBiz ensures you get paid on
              time, control costs, and facilitate smooth business growth. With
              industry-specific invoice templates, real-time inventory tracking,
              and secure operation from anywhere, CaptainBiz is a comprehensive
              management solution. Choose from various pricing plans starting
              with a 14-day free trial, and experience the joy of doing business
              efficiently. Sign up today!
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
