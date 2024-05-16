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
            <h3>What is AxisRooms Channel Manager ?</h3>
            <p>
              AxisRooms Channel Manager is a hospitality solution designed to
              boost online sales and revenue for hotels. With efficient online
              distribution and advanced channel management capabilities, it
              empowers hoteliers to maximize their reach and visibility. The
              service, backed by over 12 years of industry expertise, offers a
              comprehensive suite of products, including Hotel Revenue
              Management Service and a Booking Engine. Leveraging the power of
              the cloud, AxisRooms has become a trusted partner for over 5,000
              hotels across 61 countries, providing a well-designed channel
              manager with excellent support to ensure unparalleled growth in
              the hospitality business.
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
