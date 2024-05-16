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
            <h3>What is ATLAS.ti ?</h3>
            <p>
              ATLAS.ti is a qualitative data analysis software that empowers
              researchers across various fields with AI-driven insights.
              Offering a seamless user experience, it streamlines research
              workflows for scientific researchers, students, universities,
              UX/product designers, marketers, and data analysts. With its
              intuitive interface, robust feature set, and real-time
              collaboration capabilities, ATLAS.ti enables users to import,
              organize, analyze, and visualize diverse data types efficiently.
              Trusted by leading institutions and companies worldwide, it stands
              out for its exceptional customer support, flexibility in
              licensing, and innovative AI-powered tools, making it the go-to
              solution for qualitative research projects.
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
