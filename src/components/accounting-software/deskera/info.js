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
            <h3>What is Deskera ?</h3>
            <p>
              Introducing Deskera's Accounting Software, a powerful financial
              management solution designed to streamline your business's
              financial operations. With its user-friendly interface and robust
              features, you can easily manage your accounting tasks, from
              invoicing and expense tracking to payroll and financial reporting.
              Deskera's cloud-based platform ensures real-time collaboration and
              data accessibility, enabling you to make informed financial
              decisions anytime, anywhere. Say goodbye to manual bookkeeping and
              embrace efficiency with Deskera Accounting Software. Experience
              the future of accounting today!
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
