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
            <h3>What is TallyPrime ?</h3>
            <p>
              TallyPrime is a comprehensive business management software
              designed to streamline and enhance various aspects of your
              business operations. With a user-friendly interface and powerful
              features like customizable reports, multi-company management, and
              efficient cash flow control, TallyPrime empowers you to make
              informed decisions and focus on business growth. Boasting high
              ratings on platforms like G2 and Capterra, TallyPrime offers
              seamless integration of accounting, inventory management,
              statutory compliance, payroll, and more. With a straightforward
              setup process, real-time mobile access to reports, and robust
              security measures, TallyPrime is a versatile solution for
              businesses of all sizes.
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
