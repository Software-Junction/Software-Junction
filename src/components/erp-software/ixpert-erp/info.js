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
            <h3>What is IXPert ERP ?</h3>
            <p>
              IXPert Smart Solutions offers ERP software designed to streamline
              business operations across various industries. With features like
              finance management, sales tracking, inventory control, and HR
              automation, our software enhances efficiency and facilitates
              informed decision-making. Whether you need a cloud-based or
              on-premises solution, IXPert Smart Solutions provides customizable
              ERP systems tailored to your business needs and preferences. Gain
              real-time insights, improve productivity, and stay ahead in
              today's competitive market with our cutting-edge ERP software.
              Experience seamless integration, advanced analytics, and reliable
              support to drive growth and success for your business.
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
