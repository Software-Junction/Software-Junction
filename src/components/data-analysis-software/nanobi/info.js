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
            <h3>What is Nanobi ?</h3>
            <p>
              Nanobi is an advanced, platform offering interactive testing and
              visual full-stack capabilities. Utilizing patented Nanomart Neural
              Metadata technology, it enables swift data assembly and
              exploration of external influences. With deep analytical solutions
              tailored for various industries and customizable options, Nanobi
              simplifies complex data management and fosters actionable
              insights. Its expertise-driven services, backed by years of global
              BI and analytics experience, ensure efficient deployment and
              scaling of analytics solutions. Based in Bengaluru, Nanobi
              empowers businesses with transformative analytics, catering to
              diverse needs from BFSI to healthcare and retail sectors.
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
