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
            <h3>What is CBO ERP Limited ?</h3>
            <p>
              CBO ERP Limited provides software solutions, specializing in MR
              reporting for the pharmaceutical industry. Their dynamic and
              efficient software allows companies to enhance quality control,
              monitor product distribution, adhere to regulatory controls, and
              improve overall management visibility. With a focus on
              pharmaceutical distribution automation, CBO ERP's software system
              enables businesses to achieve full traceability, minimize expired
              stock, and streamline operations across multiple production lines.
              Serving over 1100 customers worldwide, CBO ERP Limited is a
              leading service provider, recognized for ISO 9001:2008
              certification and a commitment to information security with ISO
              27001:2013.
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
