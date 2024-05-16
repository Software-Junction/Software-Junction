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
            <h3>What is Eventleaf ?</h3>
            <p>
              Eventleaf is a online event management platform designed for
              simplicity, modernity, and affordability. Offering support for
              in-person, hybrid, and virtual events, it provides features such
              as online event registration and mobile event apps. Users can
              effortlessly create and promote events with unmatched design
              flexibility, streamline registration processes, and sell tickets
              online securely. The software facilitates efficient check-in
              procedures with badge printing options and supports engaging event
              experiences through polls, Q&A sessions, and surveys. Eventleaf is
              praised for its user-friendly interface and excellent customer
              service, making it an ideal choice for organizing conferences,
              workshops, meetings, and trade shows.
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
