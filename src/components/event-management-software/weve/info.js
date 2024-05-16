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
            <h3>What is Weve ?</h3>
            <p>
              Weve is a virtual event platform designed to elevate your company
              gatherings and team interactions. Partnered with The Go Game, Weve
              offers virtual, in-person, and hybrid experiences that cater to
              various budgets and team sizes. With the flexibility to customize
              events on short notice, Weve ensures seamless transitions from
              virtual to in-person or a combination of both. The platform hosts
              a range of engaging experiences, from team-building games like
              Murder on the Mystery Express and Original Game Show to
              interactive sessions like How to Talk to a Human with Radiolab
              founder, Jad Abumrad. Trusted by renowned companies like Adobe,
              Disney, Nike, and more, Weve is revolutionizing the way people
              connect, learn, and play in the virtual and hybrid event space.
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
