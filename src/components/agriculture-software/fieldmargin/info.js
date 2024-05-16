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
            <h3>What is FieldMargin ?</h3>
            <p>
              FieldMargin is a farm management software designed to streamline
              agricultural operations. With a living map feature, users can
              efficiently map their farm, record crops, and plan rotations,
              incorporating details like fences, gateways, buildings, and water
              pipes. The platform facilitates livestock management, enabling
              users to set up herds, track animal numbers, and calculate grazing
              and pasture rest days. Additionally, FieldMargin aids in planning
              and sharing field tasks, allowing users to check and record
              inputs, assign jobs to team members, and track completion dates.
              Trusted by thousands of farms globally, this next-generation tool
              offers offline functionality, seamless team synchronization, and
              an intuitive design for both mobile and computer use.
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
