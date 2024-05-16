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
            <h3>What is MMI HOT inn - Hotel Software ?</h3>
            <p>
              Hot Inn ERP by MMI Softwares Pvt. Ltd. is a comprehensive Hotel
              Management Software designed for the hospitality industry in
              India. This innovative solution automates and streamlines key
              hotel operations, including front office tasks, reservations,
              billing, housekeeping, and payments. With a user-friendly
              interface and cloud-based functionality, Hot Inn ERP enhances
              efficiency, increases revenue for both independent hotels and
              hotel groups, and provides a seamless guest experience from
              booking to feedback. The software's all-in-one features,
              integrated channel manager, and booking engine make it a vital
              tool for effective hotel management in the dynamic global economic
              landscape.
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
