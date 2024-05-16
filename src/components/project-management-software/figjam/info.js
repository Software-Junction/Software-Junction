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
            <h3>What is FigJam ?</h3>
            <p>
              FigJam is a collaborative digital workspace designed to enhance
              team collaboration in the product development process. Trusted by
              leading companies like Square, Netflix, and Spotify, FigJam
              facilitates real-time brainstorming, diagramming, and agile
              workflows. With over 300 templates and AI features, teams can
              easily generate custom visuals, automate processes, and streamline
              decision-making. The platform allows users to express ideas
              through audio, live chat, and reactions, fostering dynamic
              conversations. Integrated seamlessly with Figma, FigJam enables a
              smooth transition from early ideation to final revisions, making
              it a versatile tool for UI/UX design, wireframing, strategic
              planning, and more.
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
