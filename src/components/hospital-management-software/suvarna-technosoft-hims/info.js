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
            <h3>
              What is Suvarna Technosoft's Hospital Information Management
              System ?
            </h3>
            <p>
              Suvarna Technosoft's Hospital Information Management System (HIMS)
              is an innovative software solution designed to optimize healthcare
              operations, enhance patient care, and improve engagement. With 23
              years of excellence, Suvarna HIMS offers a suite of products
              including Laboratory Information Management System (SLIMS),
              Electronic Medical Record (EMR), Digital Campus Management System,
              Radiology Information System (RIS), Business Intelligence & MIS,
              and Document Management System. Engineered for simplicity,
              reliability, and proven performance, the HIMS has been adopted by
              over 500 healthcare organizations, serving 15,000+ physicians,
              36,000+ healthcare professionals, and managing 60 million patient
              records. Suvarna HIMS is an accessible and affordable choice,
              making proven and reliable healthcare solutions available to
              providers worldwide.
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
