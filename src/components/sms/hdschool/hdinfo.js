import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const Hdinfo = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <h3>What is HD School ?</h3>
            <p>
              HD School, developed by Hyper Drive Solutions, is a powerful
              school management software designed to effortlessly handle
              administrative tasks for educational institutions. This intuitive
              solution covers diverse functionalities such as student and course
              management, examination planning, library organization, and
              efficient payroll management for teaching and non-teaching staff.
              With features like fee management, homework assignments, timetable
              generation, and attendance tracking, HD School ensures seamless
              day-to-day operations. Enjoy the convenience of robust reporting
              systems, including daily fee collection, student pending fees, and
              customizable mark sheets. Join the global community of satisfied
              customers and experience the ease of HD School's online school
              management system.
            </p>
            <div
              className={`${styles["hds-priceplan-box"]} box bg-light  rounded-4 p-3 mb-4 border`}
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
              className={styles["hds-info-img"]}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Hdinfo;
