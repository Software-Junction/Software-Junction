import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const Campinfo = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <h3>What is CampSteer ?</h3>
            <p>
              CampSteer is a campus management system that integrates modules
              such as Admission Management, Fee Management, Academics, Library
              Management, Hostel Management, Fleet Management, Purchase, Assets,
              HRM, Finance, and Reports. This software simplifies tasks like
              scrutinizing applications, managing student demographics, handling
              fee collection, academic scheduling, library operations, hostel
              facilities, fleet management, procurement, HR management, and
              financial transactions. With features like member registration,
              barcode generation, and automated asset maintenance, CampSteer
              offers a holistic solution for educational institutions, promoting
              efficiency and seamless operations across various administrative
              functions.
            </p>
            <div
              className={`${styles["cam-priceplan-box"]} box bg-light  rounded-4 p-3 mb-4 border`}
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
              className={styles["cam-info-img"]}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Campinfo;
