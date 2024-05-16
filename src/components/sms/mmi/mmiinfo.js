import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const Mmiinfo = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <h3>What is MMI-School Management Software ?</h3>
            <p>
              MMI introduces a top-rated School Management Software in India, a
              modern cloud-based solution crafted to simplify administrative
              tasks and boost efficiency in schools. This advanced software
              fosters seamless communication between parents and teachers,
              minimizing data entry efforts through mobile and tablet
              accessibility. With bilingual support and customization options,
              it caters to diverse needs, ensuring secure electronic storage of
              information. MMI's School Management Software stands as the ideal
              choice for institutions seeking an effective, secure, and flexible
              solution to streamline their accounting processes and overall
              school management.
            </p>
            <div
              className={`${styles["mmi-priceplan-box"]} box bg-light  rounded-4 p-3 mb-4 border`}
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
              className={styles["mmi-info-img"]}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Mmiinfo;
