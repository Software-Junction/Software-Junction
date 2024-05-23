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
            <h3>What is DocEngage ?</h3>
            <p>
              DocEngage, a healthcare management solution designed to
              revolutionize the way medical institutions operate. Offering a
              holistic platform for both single and multi-speciality hospitals,
              DocEngage provides a suite of six products, over 30 apps, and
              seamless integrations to streamline every aspect of healthcare
              management. From comprehensive hospital management to advanced
              telehealth services, our platform ensures security with
              encryption, role-based access control, and full HIPAA compliance.
              Trusted by renowned healthcare providers like Apollo Homecare and
              Grand World Elder Care, DocEngage stands as a beacon of
              innovation, enhancing patient care, engagement, and overall
              operational efficiency. Join us on the forefront of Digital
              Healthcare with DocEngage!
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
