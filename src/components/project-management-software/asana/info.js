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
            <h3>What is Asana ?</h3>
            <p>
              Asana is a Collaborative Work Management platform,With a focus on
              clarity and impact at scale, Asana connects work and workflows to
              company-wide goals, serving 80% of Fortune 100 companies. Offering
              features such as real-time progress tracking, AI-driven
              intelligence for enhanced productivity, and enterprise-grade
              security, Asana stands out with over 300 integrations and a
              user-friendly interface, recognized by 90% of users as "easy to
              use." Trusted by top companies like Amazon, Johnson & Johnson, and
              Dell, Asana empowers diverse departments, from marketing to
              operations, facilitating effective project management and goal
              attainment.
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
