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
            <h3>What is InfowanHR ?</h3>
            <p>
              InfowanHR, India's fastest-growing HRMS software, redefines
              workforce management with its cutting-edge features encompassing
              payroll, attendance, leave, and expenses. Delivering unparalleled
              efficiency, it ensures a remarkable time savings of 30 minutes per
              employee daily, promising over 10 times return on investment.
              Trusted by 15,000+ clients and embraced by 2.7 million satisfied
              users in four countries, InfowanHR stands out as a world-class
              solution offered by Infowan Technologies Pvt Ltd. Elevate your HR
              and payroll experience, choosing excellence with InfowanHR.
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
