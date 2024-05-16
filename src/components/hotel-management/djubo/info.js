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
            <h3>What is DJUBO ?</h3>
            <p>
              DJUBO is an all-in-one hospitality management software designed
              for hotels, offering a comprehensive suite of modules to
              streamline operations and maximize revenue. It integrates Property
              Management, Centralized Reservation, Channel Management, Booking &
              Payment Engine, Analytics, Meta-search Marketing, Point of Sale,
              Online Reputation Management, Rate Shopping, Intelligent Revenue
              Management, and more. Built by hoteliers for hoteliers, DJUBO's
              cloud-based solution enables seamless connectivity, reducing
              manual efforts and enhancing efficiency. With a user-friendly
              interface, mobile accessibility, and a commitment to innovation,
              DJUBO stands out as a versatile and integrated hotel technology
              solution.
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
