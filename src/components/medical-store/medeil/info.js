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
            <h3>What is Medeil Cloud POS ?</h3>
            <p>
              Medeil Cloud POS is a pharmacy management software solution
              offering features such as medication dispensing, inventory
              management, patient records, and billing. This user-friendly
              system aims to enhance efficiency and productivity by reducing
              manual work, streamlining workflow processes, and minimizing
              errors in medication dispensing. The software supports various
              types and sizes of pharmacies, providing seamless integration with
              POS systems and electronic medical records. With a focus on easy
              transactions, customization, and offline functionality, Medeil is
              recommended by satisfied clients for its professional business
              management and analysis capabilities in the healthcare and
              pharmaceutical industries.
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
