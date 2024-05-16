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
            <h3>What is eZee Absolute ?</h3>
            <p>
              eZee Absolute, a Hotel Management System designed to elevate your
              hospitality business to new heights. With a focus on seamless
              operations, this comprehensive software offers a range of
              features, from efficient reservations and offline bookings to easy
              rate management and user role customization. The integrated Hotel
              Channel Manager connects your property to 130+ channels, ensuring
              maximum reach and instant updates. The commission-free Hotel
              Booking Engine empowers direct bookings, while the Restaurant POS
              System streamlines order management and integrates with popular
              food delivery portals. Explore the future of hospitality
              management with eZee Absolute – where innovation meets excellence.
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
