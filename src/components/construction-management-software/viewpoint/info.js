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
            <h3>What is Viewpoint ?</h3>
            <p>
              Trimble Viewpoint is a construction software solution that forms
              part of Trimble Connected Construction. It offers award-winning
              document and drawing management, along with a construction field
              application, to facilitate on-time and on-budget project delivery.
              With features such as document and drawing management, site
              management, project management, BIM, and operations, Trimble
              Viewpoint helps centralize information, streamline workflows, and
              enhance collaboration across project teams. Trusted by over 8,000
              global clients, Trimble Viewpoint is a long-term partner in
              construction operations management, offering a connected system
              designed for contractors to efficiently manage documents,
              drawings, and data throughout the project lifecycle.
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
