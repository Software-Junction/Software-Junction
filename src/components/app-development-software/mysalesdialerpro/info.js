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
            <h3>What is MySalesDialerPro ?</h3>
            <p>
              MySalesDialerPro is a dynamic Inside Sales mobile and cloud
              solution for businesses worldwide. It empowers sales reps by
              offering a robust auto-dialer, real-time geo-tracking, and a
              versatile mobile and web CRM for conducting sales from anywhere.
              With features like task management, Salesforce integration, and
              team collaboration tools, it enhances productivity and supports
              multiple communication channels. Priced at $29.99 per month/user,
              it caters to individual sales agents and managers, ensuring easy
              lead distribution and efficient sales campaigns. The cloud-based
              solution, praised for its effectiveness, is compatible with
              Android and iOS platforms, making it a comprehensive tool for
              transforming inside sales across various industries.
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
