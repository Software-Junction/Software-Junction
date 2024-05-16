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
            <h3>What is Catalyst ?</h3>
            <p>
              Catalyst is a Customer Success Platform designed to transform your
              customers into a formidable growth engine. With seamless
              integrations, real-time Salesforce sync, and top industry
              adoption, Catalyst empowers Sales and Success teams to maximize
              revenue through precise insights on retention risks and expansion
              opportunities. Anchored in the customer journey, Catalyst provides
              actionable data, unifying your entire organization to drive impact
              and revenue from your existing customer base. Its intuitive design
              minimizes administrative tasks, ensuring your team stays focused
              on high-value customer interactions. Trusted by leading technology
              companies, Catalyst offers a comprehensive solution for
              customer-led growth, combining automation, playbooks, and
              workflows to support every stage, from onboarding to expansion.
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
