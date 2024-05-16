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
              DocEngage is a healthcare management software that serves as a
              comprehensive solution for both single and multi-speciality
              hospitals. Offering six products, over 30 apps, and 100+
              integrations, it provides an advanced and secure platform for
              digital healthcare. From telehealth services and CRM to clinic
              management, EHR, homecare, and hospital management, DocEngage
              covers the entire spectrum of healthcare needs. Noteworthy for its
              emphasis on security, the software ensures data protection through
              SSL encryption, role-based access control, and compliance with
              HIPAA standards. Trusted by leading healthcare providers,
              DocEngage optimizes patient care through secure communication,
              mobile apps, and efficient practice management.
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
