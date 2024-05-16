import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const Shriinfo = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <h3>What is ShriConnect ?</h3>
            <p>
              ShriConnect is an award-winning School ERP software designed for
              the new age, recognized as 'The Innovative School ERP Solution' at
              The World Education Summit. With over 0+ modules and serving
              2,374+ schools with 200,000+ students, it empowers the rise of a
              modern education ecosystem. This user-friendly system offers
              enhanced student-parent experiences, customizable features, and
              ensures 100% data security. ShriConnect provides master-driven
              customization, training modules, and a range of features like
              dynamic school calendar management, online/offline admission and
              fee management, online assessment, and comprehensive student
              analytics, making it a dynamic and future-ready Education
              Management Information System
            </p>
            <div
              className={`${styles["shri-priceplan-box"]} box bg-light  rounded-4 p-3 mb-4 border`}
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
              className={styles["shri-info-img"]}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Shriinfo;
