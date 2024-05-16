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
            <h3>What is Gusto ?</h3>
            <p>
              Gusto is a leading payroll and HR software, renowned as the #1
              Payroll Software of 2023. Businesses benefit from its smart
              technology, allowing payroll processing in just a few clicks,
              syncing hours seamlessly, and facilitating state tax registration
              across all 50 states. With accolades like #1 in Small Business
              Payroll Satisfaction & HR Implementation, Gusto empowers users to
              run payroll efficiently, saving over 80 hours annually, as
              attested by Approveme.com. Beyond payroll, Gusto offers a holistic
              solution, including employee benefits administration at no extra
              cost, making it the go-to platform for businesses seeking a
              streamlined and joyful approach to workforce management.
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
