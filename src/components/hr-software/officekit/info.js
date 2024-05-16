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
            <h3>What is OfficeKit HR ?</h3>
            <p>
              OfficeKit HR, established in 2016 by a dynamic team of visionary
              entrepreneurs, is a revolutionary HR management software committed
              to transforming traditional HR practices globally. With a passion
              for integrating Talent, Technology, and Transformation, our
              comprehensive solution covers everything from employee management
              to talent acquisition. Boasting a user-friendly interface, our
              software simplifies HR processes, aids in hiring the best-fit
              talent, and streamlines benefits management, fostering employee
              engagement and empowerment. Whether you're a small-scale business
              or a large enterprise, OfficeKit HR, with its worldwide presence
              in over 25 countries, stands as the perfect tool to amplify
              success and usher in a new era of efficient HR management.
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
