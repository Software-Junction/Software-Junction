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
            <h3>What is KnowIT HMS ?</h3>
            <p>
              KnowIT HMS, a Hospital Management System meticulously crafted for
              seamless healthcare administration. This integrated ERP solution
              revolutionizes hospital operations, from patient registration and
              clinical support to billing, finance, and inventory management.
              Developed with the latest MVC technology, KnowIT HMS offers a
              versatile web-based platform available in both SaaS and On-Premise
              models. Whether for a small clinic or a multi-specialty hospital,
              KnowIT HMS streamlines processes with modules like Front Office,
              Clinical Support, and Billing & Collection. Its user-friendly
              design, modular approach, and robust security features make it an
              indispensable tool for healthcare institutions seeking efficiency
              and reliability in their operations. Experience the future of
              healthcare management with KnowIT HMS.
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
