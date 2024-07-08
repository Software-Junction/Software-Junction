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
            <h3>What is eSchoolApp ?</h3>
            <p>
              eSchoolApp, your gateway to a transformative educational
              experience. As a cutting-edge cloud-based Educational Institution
              Management Software, eSchoolApp redefines how schools, preschools,
              colleges, and coaching classes navigate the complexities of
              academic management. From handling fees and attendance to
              streamlining results, library, and online exams, eSchoolApp offers
              an all-encompassing solution. Our commitment to innovation is
              evident in features like Branded Apps, Automation, and Premium
              Support, making us the preferred choice since 2008. Join us on a
              journey where technology meets education seamlessly, bringing
              unparalleled efficiency and connectivity to your institution.
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
