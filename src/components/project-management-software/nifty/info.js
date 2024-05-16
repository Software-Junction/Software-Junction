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
            <h3>What is Nifty ?</h3>
            <p>
              Nifty is a project management platform designed to streamline
              collaboration for over 20,000 highly productive teams. Serving as
              the ultimate project management OS, Nifty eliminates the need to
              switch between various tools by integrating roadmaps, tasks,
              discussions, docs, and forms into one cohesive app. With features
              such as visual goal timelines, flexible task organization,
              real-time collaboration, and automated reporting, Nifty caters to
              diverse teams including engineering, sales, marketing, product
              development, client management, and IT. The platform's powerful
              unification ensures team alignment, increased productivity, and
              smarter decision-making by consolidating data and processes
              seamlessly.
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
