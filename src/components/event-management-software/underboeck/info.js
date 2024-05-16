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
            <h3>What is Underboeck ?</h3>
            <p>
              Momentus Technologies offers Venue and Event Management Software
              designed to streamline operations for diverse sectors, including
              convention centers, higher education, corporate spaces, stadiums,
              arenas, and arts and culture organizations. This end-to-end
              platform unifies data and resources, providing a powerful suite of
              solutions such as CRM, booking, event management, accounting,
              reporting, and API integration. With a cloud-based,
              accessible-anywhere approach, Momentus empowers teams to enhance
              efficiency, unlock insights from quality analytics, and create
              extraordinary event experiences. Trusted by over 60,000 users
              globally, Momentus is dedicated to connecting people and
              technologies to manage the world's greatest spaces and deliver
              exceptional moments.
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
