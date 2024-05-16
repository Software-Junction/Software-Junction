import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const Digiinfo = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <h3>What is Digital School Web Solution ?</h3>
            <p>
              DIGITAL SCHOOL WEB SOLUTION is a leading indigenous, customizable
              online school management software. This comprehensive system
              addresses modern school administration challenges by offering
              features such as a free school website for global visibility, a
              custom mobile app for effective communication, an extensive
              e-library with curriculum-based e-books, accurate result checking,
              and free computer-based testing. Additionally, it provides
              realistic science simulations, making subjects come alive for
              students. The platform is user-friendly and covers automated
              students' registration, course registration, finance management,
              staff and student database management, email services, bulk SMS,
              e-examinations, web content management, JAMB CBT testing,
              E-Library, and payment systems. Transform your school
              administration seamlessly with DIGITAL SCHOOL WEB SOLUTION.
            </p>
            <div
              className={`${styles["dig-priceplan-box"]} box bg-light  rounded-4 p-3 mb-4 border`}
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
              className={styles["dig-info-img"]}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Digiinfo;
