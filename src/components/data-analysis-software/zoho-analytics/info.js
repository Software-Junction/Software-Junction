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
            <h3>What is Zoho Analytics ?</h3>
            <p>
              Zoho Analytics is a analytics platform that empowers users to
              seamlessly connect, prepare, and analyze data. With its intuitive
              interface and AI-driven capabilities, users can effortlessly
              create visually stunning reports and dashboards, uncovering
              valuable insights in minutes. Trusted by thousands of customers
              and millions of users worldwide, Zoho Analytics offers flexible
              deployment options, low total cost of ownership, and robust
              security features, making it a top choice for organizations
              seeking to transform data into actionable insights.
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
