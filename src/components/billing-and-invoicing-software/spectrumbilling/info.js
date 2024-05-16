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
            <h3>What is Spectrum Billing Solution ?</h3>
            <p>
              Spectrum Billing Solutions is a leader in revenue cycle management
              services for healthcare providers, offering a distinct advantage
              through deep industry knowledge, advanced technology, and
              extensive experience. Our dedicated team ensures the efficient and
              streamlined management of your revenue cycle, working tirelessly
              to maximize your financial outcomes. Consider us your committed
              partner in navigating the complexities of billing, from benefits
              verification to insurance and patient collections. Our satisfied
              clients attest to our dedication, praising our ability to simplify
              billing processes and collect challenging claims. Join Spectrum
              Billing Solutions and experience the difference in optimizing your
              revenue cycle with a trusted and results-driven partner.
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
