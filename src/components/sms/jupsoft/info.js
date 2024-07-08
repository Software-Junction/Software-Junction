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
            <h3>What is Jupsoft eConnect ?</h3>
            <p>
              Jupsoft eConnect-K12 is a revolutionary school management ERP
              system, simplifying and accelerating daily school processes. This
              advanced software reduces paperwork, handles administration, and
              facilitates secure information sharing across departments. With
              features like role-based dashboards, paperless operations, and
              support for multiple devices and OS, it ensures efficient and
              accessible school management. Trusted by over 300 schools and
              500,000 users, it offers flexibility and adaptability, allowing
              institutions to customize modules based on their requirements.
              Jupsoft eConnect-K12 is a comprehensive solution, providing
              always-updated, secure, and backed-up data for streamlined
              decision-making in educational institutions.
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
