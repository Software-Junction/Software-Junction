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
            <h3>What is Amrita Hospital Information System ?</h3>
            <p>
              Amrita Hospital Information System (AHIS), a pioneering healthcare
              informatics suite meticulously crafted by Amrita Vishwa
              Vidyapeetham. This cutting-edge software represents the epitome of
              innovation, seamlessly blending science and spirituality to create
              a platform-independent, fully integrated Enterprise Information
              System. AHIS stands as a testament to Amrita's leadership in
              research and development, providing a holistic approach to patient
              care management across clinical domains. Certified as a Complete
              EHR, it not only meets international standards but also fosters
              research, development, and global advancements in medical
              informatics. Step into the future of healthcare with AHIS, where
              technology and compassion converge for a transformative impact on
              healthcare delivery.
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
