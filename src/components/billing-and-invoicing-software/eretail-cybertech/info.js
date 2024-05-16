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
            <h3>What is eRetail Cybertech - pranaPOS ?</h3>
            <p>
              Prana, an innovative cloud-based POS software designed to
              streamline your business processes. From maintaining point-of-sale
              transactions to efficiently managing inventory and generating
              insightful reports, Prana empowers you to oversee your business
              from any location worldwide. Featuring a secure platform, our
              software ensures the utmost protection for your data and
              transactions. The intuitive interface simplifies tasks, allowing
              you to add inventory, facilitate sales, and effortlessly run your
              business on-the-go. Set up your POS system within minutes and
              embark on a 14-day trial to experience the convenience and power
              of Prana.
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
