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
            <h3>What is SabeeApp ?</h3>
            <p>
              SabeeApp, a seamless and thriving hospitality experience. Our
              Software Suite is a powerhouse of tools, featuring the efficient
              Property Management System (PMS), Booking Engine, Channel Manager,
              SabeePay for secure multichannel payments, and cutting-edge Smart
              Solutions like digital hotel applications. Tailored for hotels,
              apartments, and hostels, SabeeApp is more than just a management
              system – it's a catalyst for automation, direct bookings, and
              elevated guest experiences. Embrace the future with our
              cloud-based platform, granting you access to critical data and
              operations anytime, anywhere. Join the league of global hoteliers
              who trust SabeeApp for personalized onboarding, industry
              integration, and a seamless blend of innovation and efficiency in
              every aspect of hospitality management.
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
