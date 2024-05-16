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
            <h3>What is StrategicERP ?</h3>
            <p>
              StrategicERP is a software platform developed by ITAakash
              Strategic Software, catering to the Real Estate, Construction, and
              Infrastructure industries. This end-to-end process automation and
              information management system offer tailored solutions for project
              lifecycle management, empowering businesses with real-time
              analytics for informed decision-making. With a user-friendly
              interface and artificial intelligence integration, the software
              streamlines complex functions, enhances daily business activities,
              and ensures absolute customization. Trusted by over 1000 brands,
              StrategicERP is recognized for its cloud-based ERP,
              mobile-friendly experience, and complete digital media
              integration, providing a competitive edge in the 21st-century
              business landscape.
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
