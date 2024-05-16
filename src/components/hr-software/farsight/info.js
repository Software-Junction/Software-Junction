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
            <h3>What is Farsight ?</h3>
            <p>
              Farsight's Integrated HR Platform offers a robust Human Capital
              Management (HCM) solution with plans tailored for SME/MSMEs and
              enterprises. From Essential HR to Professional and Premium
              editions, it provides a comprehensive Core HRIS Platform,
              encompassing legal entities, mobile applications, asset
              management, and document organization. The platform seamlessly
              integrates Time Office Management for attendance, leave, and
              payroll functions, ensuring compliance with statutory regulations.
              Users can enhance their HR capabilities with optional add-ons such
              as Recruitment, Onboarding, Performance Management, and more. The
              software comes with a structured implementation plan, featuring
              extensive support and resources for effective utilization.
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
