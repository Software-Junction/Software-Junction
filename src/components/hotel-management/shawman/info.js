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
            <h3>What is ShawMan PMS ?</h3>
            <p>
              ShawMan PMS is a Property Management System designed to
              efficiently handle room management, guest preferences, and various
              standard operations for diverse property types such as hotels,
              motels, resorts, clubs, B & B’s, hostels, and apartments. With
              features like centralized rate management and a Central
              Reservation System, it streamlines business processes for hotel
              chains, facilitating easy booking management from travel agents
              and FIT over the Internet. Boasting modern integrated modules,
              ShawMan PMS ensures comprehensive coverage of all aspects of
              property management. Developed by ShawMan Technologies, a
              pioneering force in hospitality technology for over 25 years, this
              software is user-friendly, secure, reliable, and scalable, making
              it an indispensable tool for the HoReCa industry.
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
