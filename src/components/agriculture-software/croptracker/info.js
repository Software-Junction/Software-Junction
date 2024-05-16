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
            <h3>What is Croptracker ?</h3>
            <p>
              Croptracker is an award-winning farm management software designed
              for fruit and vegetable growers. Leveraging cutting-edge computer
              vision technology called Harvest Quality Vision, it enables
              growers to assess produce size and quality objectively and
              efficiently. Since 2006, Croptracker has collaborated with
              growers, packers, and associations to prioritize features that
              enhance productivity, workforce connectivity, traceability, and
              cloud-based record accessibility. The software streamlines
              record-keeping, scheduling, work crew communications, analytics,
              and traceability, simplifying food safety compliance. With
              comprehensive support, Croptracker aims to make crop production
              more profitable, efficient, and safe for agricultural businesses
              of all sizes.
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
