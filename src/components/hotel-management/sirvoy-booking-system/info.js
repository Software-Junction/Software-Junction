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
            <h3>What is Sirvoy Booking System ?</h3>
            <p>
              Sirvoy Booking System is a user-friendly hospitality management
              solution, encompassing a Property Management System, Booking
              Engine, and Channel Manager. Ideal for hotels, motels, B&Bs, and
              more, it provides easy access to bookings anytime, anywhere
              without the need for installations or updates. With a
              cost-effective starting price of $10/month, Sirvoy's responsive
              booking engine enables commission-free direct bookings via your
              website, while the Channel Manager facilitates seamless
              integration with major online booking channels. Offering fixed
              monthly fees, Sirvoy serves thousands of properties globally,
              providing comprehensive tools for efficient reservation
              management.
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
