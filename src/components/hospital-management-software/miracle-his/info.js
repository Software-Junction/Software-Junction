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
            <h3>What is Miracle HIS ?</h3>
            <p>
              Miracle HIS by Akhil Systems is a state-of-the-art web-based
              Hospital Management Software designed for seamless healthcare
              operations in a paperless environment. This modular system
              integrates key hospital functions like Patient Registration, OPD,
              IPD, OPD Pharmacy, Purchase, and Stores. With versions catering to
              various hospital sizes, it offers quick access to diverse patient
              information, facilitates remote data accessibility, and serves as
              a decision support system. Miracle HIS ensures efficient accounts
              management, error-free record-keeping, and enhanced patient care
              in a cost-effective manner, allowing doctors to focus more on
              clinical aspects. Its comprehensive modules make it a valuable
              solution for hospitals and healthcare institutions.
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
