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
            <h3>What is Timelabs HR Software ?</h3>
            <p>
              Timelabs HR Software, with over a decade of domain expertise,
              stands out as an efficient and trusted solution for human resource
              management. Processing 700,000 employee records monthly and
              endorsed by 700+ businesses, it offers a comprehensive suite of
              modules such as Applicant Tracking, Onboarding, Payroll, and
              Performance Management. Recognized by industry authorities and
              awarded for its value, Timelabs is a humanized system that
              seamlessly integrates HR processes, ensuring optimal talent
              management and workplace productivity.
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
