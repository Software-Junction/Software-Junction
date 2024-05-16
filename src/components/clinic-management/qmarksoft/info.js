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
            <h3>What is Qmarksoft ?</h3>
            <p>
              Qmarksoft's Pathology Lab Software is a comprehensive and
              customizable online solution for managing and reporting pathology
              lab activities. Offering both online and offline versions, it
              ensures unlimited data management, lightning-fast performance, and
              secure data handling. With features like barcode and QR code
              integration, automated communication via SMS, WhatsApp, and email,
              as well as mobile apps for both Android and iOS, the software
              streamlines operations, facilitates report access, and enables
              seamless interaction with patients. Its extensive capabilities
              encompass inventory management, employee and franchisee systems,
              making it an efficient, user-friendly, and versatile tool for
              pathology laboratories.
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
