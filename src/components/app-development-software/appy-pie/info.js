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
            <h3>What is Appy Pie ?</h3>
            <p>
              Appy Pie is a no-code development platform that enables
              individuals and businesses to effortlessly create fully-functional
              apps and websites without the need for traditional coding
              expertise. With its drag-and-drop functionality, Appy Pie's
              no-code platform simplifies data integration, offering seamless
              connections with various data sources and applications. It stands
              out by being cost-effective, at least 1/10th of industry
              standards, and expedites product launch ten times faster than
              competitors. Additionally, Appy Pie extends its innovative
              features to AI-powered design tools and workflow automation,
              providing a comprehensive solution for efficient and affordable
              app and website development.
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
