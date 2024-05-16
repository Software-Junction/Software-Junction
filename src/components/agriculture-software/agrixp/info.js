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
            <h3>What is AgriXP ?</h3>
            <p>
              AgriXP, a online agriculture management system, serves as a free
              crop planning app for farmers and their consultants. Offering
              features such as secure record-keeping, crop planning, and
              budgeting, AgriXP supports seamless interaction between farmers,
              employees, and agronomists. With continuous updates, the software
              provides tools like a crop budget calculator, spray record
              keeping, and detailed weather forecasts. It ensures data
              confidentiality, regulatory compliance, and easy export of
              information to Excel and shapefiles. AgriXP's commitment to small
              farms includes a free version, with premium options available for
              larger operations.
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
