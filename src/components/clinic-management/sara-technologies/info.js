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
            <h3>What is Sara Technologies ?</h3>
            <p>
              The Pathology Management Software developed by Sara Technologies
              streamlines laboratory operations, offering a user-friendly
              digital solution for efficient clinical and operational
              management. Tailored for path labs, the software ensures optimal
              resource utilization, increased productivity, and paperless
              record-keeping. It features comprehensive functionalities,
              including patients' data management, appointment scheduling, web
              reporting, and online MIS, adhering to NABH/NABL standards. With
              benefits such as quick information access, centralized patient
              data, and improved data safety, the software enhances overall
              workflow, making it an indispensable tool for modern diagnostic
              centers.
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
