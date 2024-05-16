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
            <h3>What is Astral Technolgies ?</h3>
            <p>
              Astral Technologies offers Construction ERP Software, a robust
              solution designed to streamline project management and enhance
              efficiency in the construction industry. Tailored for diverse
              needs, including Real Estate and Manufacturing, their software
              ensures seamless execution from conceptualization to
              implementation. With a user-friendly interface, advanced
              technology integration, and extensive testing, Astral's
              Construction ERP Software guarantees a superior user experience.
              Trusted by clients across various sectors, it exemplifies
              excellence in application development, reflecting the company's
              commitment to technological leadership. Elevate your business with
              Astral Technologies, the forefront in innovative technology
              solutions
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
