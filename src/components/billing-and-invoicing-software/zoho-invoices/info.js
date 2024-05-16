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
            <h3>What is Zoho Invoices ?</h3>
            <p>
              Zoho Books is a comprehensive invoicing and accounting solution
              designed to streamline business financial management. With
              features like professional invoicing, e-invoicing compliance, and
              multiple payment methods, it simplifies the invoicing process. The
              software also facilitates efficient expense and project
              management, offers multi-currency capabilities for global
              transactions, and automates tasks such as payment reminders and
              recurring billing. Zoho Books ensures accuracy with invoice
              approval and credit note functionalities, making it an all-in-one
              solution for small businesses seeking seamless billing, invoicing,
              and accounting processes.
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
