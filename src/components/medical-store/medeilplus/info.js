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
            <h3>What is Medeil Plus ?</h3>
            <p>
              Medeil Cloud POS is a pharmacy management software offering a
              range of features such as medication dispensing, inventory
              management, patient records, and billing. It integrates seamlessly
              with Point of Sale (POS) systems, enabling analytical pharmacy
              reporting and enhancing overall efficiency and productivity. The
              software supports various types and sizes of pharmacies, providing
              easy integration and a user-friendly interface. With positive
              feedback from satisfied customers, Medeil facilitates streamlined
              workflow processes, reduces manual work, and ensures accuracy in
              medication dispensing for improved patient safety.
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
